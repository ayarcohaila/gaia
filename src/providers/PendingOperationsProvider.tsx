import React, { useEffect, useState } from 'react';
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  Unsubscribe,
  where,
  writeBatch
} from '@firebase/firestore';
import { modelData } from '~/helpers/modelHelpers';
import { FsOperation } from '~/api/models/FsOperation';
import moment from 'moment';
import { useAuthContext } from '~/providers/AuthProvider';
import * as fcl from '@onflow/fcl';
import { toast } from 'react-toastify';

async function addPendingOperation(
  operationType: 'purchase' | 'createListing' | 'cancelListing',
  nftType: string,
  nftId: number,
  description: string,
  transactionId: string,
  externalUserId: string
) {
  const db = getFirestore();

  const doc: FsOperation = {
    operationType,
    transactionId,
    externalUserId,
    timestamp: moment().unix(),
    status: 'Pending',
    description: description,
    affectedNfts: [
      {
        nftType: nftType,
        nftId: nftId
      }
    ],
    errorMessage: null
  };

  await addDoc(collection(db, 'operations'), modelData<FsOperation>(doc));
}

async function setTransactionError(externalUserId: string, transactionId: string, error: string) {
  const db = getFirestore();

  const q = query(
    collection(db, 'operations'),
    where('externalUserId', '==', externalUserId),
    where('transactionId', '==', transactionId)
  );

  const querySnapshot = await getDocs(q);

  const batch = writeBatch(db);

  querySnapshot.forEach(doc => {
    batch.update(doc.ref, {
      status: 'Error',
      errorMessage: error
    });
  });

  await batch.commit();
}

function createStore() {
  return {
    pendingOperations: [] as FsOperation[],
    addPendingOperation
  };
}

const PendingOperationsContext = React.createContext<ReturnType<typeof createStore> | null>(null);

export const PendingOperationsProvider = ({ children }: any) => {
  const [pendingOperations, setPendingOperations] = useState([] as FsOperation[]);

  const authContext = useAuthContext();

  useEffect(() => {
    const subscriptions: Unsubscribe[] = [];

    let monitoredOperations: FsOperation[] = [];

    const checkMonitoredTransactions = (address: string) => {
      for (const op of monitoredOperations) {
        if (!monitoredTransactions[op.transactionId]) {
          monitoredTransactions[op.transactionId] = true;
          fcl
            .tx(op.transactionId)
            .onceSealed()
            .catch((err: any) => {
              toast.error(`The transaction has failed`);
              return setTransactionError(address, op.transactionId, String(err));
            })
            .finally(() => delete monitoredTransactions[op.transactionId]);
        }
      }
    };

    let monitorInterval: any | undefined;

    const monitoredTransactions: { [key: string]: boolean } = {};

    if (authContext.user?.addr && authContext.firebaseUser) {
      const address = authContext.user?.addr;
      monitorInterval = setInterval(() => checkMonitoredTransactions(address), 2000);
      const db = getFirestore();
      const operationsQuery = query(
        collection(db, 'operations'),
        where('externalUserId', '==', authContext.user?.addr),
        where('status', '==', 'Pending')
      );

      subscriptions.push(
        onSnapshot(operationsQuery, querySnapshot => {
          const operations: FsOperation[] = [];

          querySnapshot.forEach(doc => {
            operations.push(doc.data() as FsOperation);
          });

          monitoredOperations = [...operations];
          setPendingOperations(operations);
        })
      );
    } else {
      setPendingOperations([]);
    }

    return () => {
      if (monitorInterval) {
        clearInterval(monitorInterval);
      }

      subscriptions.forEach(unsubscribe => unsubscribe());
    };
  }, [setPendingOperations, authContext.user?.addr, authContext.firebaseUser]);

  const state = {
    pendingOperations,
    addPendingOperation
  };

  return (
    <PendingOperationsContext.Provider value={state}>{children}</PendingOperationsContext.Provider>
  );
};

export const usePendingOperations = () => {
  const store = React.useContext(PendingOperationsContext);

  if (!store) {
    throw new Error('usePendingOperations must be used within a PendingOperationsContext.Provider');
  }

  return store;
};
