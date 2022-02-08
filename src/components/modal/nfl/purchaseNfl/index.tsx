import Modal from '~/components/modal';
import preval from 'preval.macro';
import * as fcl from '@onflow/fcl';
import { t } from '~/config/config';
import { useEffect, useState } from 'react';
import useBreakpoints from '~/hooks/useBreakpoints';
import { CircularProgress, Stack, Typography } from '@mui/material';
import { usePendingOperations } from '~/providers/PendingOperationsProvider';
import { formatCurrencyValue } from '~/utils/formatCurrencyValue';
import { useAuthContext } from '~/providers/AuthProvider';
import { buildMomentDescription } from '~/helpers/stringHelpers';
import Accordion from '~/components/accordion';

type MomentInfo = {
  momentId: number;
  play: {
    playerFullName: string;
    playType: string;
  };
  series: {
    name: string;
  };
  set: {
    name: string;
  };
  serialNumber: number;
};

type Props = {
  moment: MomentInfo;
  orderId: number;
  orderAddress: string;
  price: number;
  show: boolean;
  onClose: () => void;
  assetImage: string;
};

export const PurchaseNflModal = (props: Props) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [errorDetails, setErrorDetails] = useState<string | undefined>(undefined);
  const [disableClose, setDisableClose] = useState(true);
  const [currentStep, setCurrentStep] = useState<'initial' | 'sealing' | 'sealed'>('initial');
  const { addPendingOperation } = usePendingOperations();
  const { user } = useAuthContext();

  useEffect(() => {
    (async () => {
      const buyTx = preval`
    const fs = require('fs')
    const path = require('path'),
    filePath = path.join(__dirname, "../../../../flow/transactions/dapper/buy_nfl.cdc");
    module.exports = fs.readFileSync(filePath, 'utf8')
    `;

      const dapperAuthz = fcl.authz;

      try {
        const txId = await fcl
          .send([
            fcl.transaction(buyTx),
            fcl.payer(fcl.authz),
            fcl.proposer(fcl.authz),
            fcl.authorizations([dapperAuthz, fcl.authz]),
            fcl.args([
              fcl.arg(props.orderId, t.UInt64),
              fcl.arg(props.orderAddress, t.Address),
              fcl.arg(props.price.toFixed(8), t.UFix64)
            ]),
            fcl.limit(1000)
          ])
          .then(fcl.decode);

        setCurrentStep('sealing');

        try {
          await addPendingOperation(
            'purchase',
            'nfl_all_day',
            props.moment.momentId,
            `Purchased ${buildMomentDescription(props.moment)} for $${formatCurrencyValue(
              props.price
            )}`,
            txId,
            user!.addr
          ).catch(console.error);
        } catch (err) {
          console.error(err);
        }

        try {
          await fcl.tx(txId).onceSealed();
          setCurrentStep('sealed');
          setDisableClose(false);
        } catch (err: any) {
          setErrorMessage('There was an issue executing this transaction on the Flow blockchain.');
          setDisableClose(false);
          setErrorDetails(String(err));
        }
      } catch (err: any) {
        console.error(err);
        if (/Externally Halted/g.test(String(err)) || /Declined/g.test(String(err))) {
          // user cancelled from Dapper Wallet
          props.onClose();
        } else {
          // some other error has occurred
          setErrorMessage('There was an error processing your transaction');
          setDisableClose(false);
        }
      }
    })();
  }, [props.orderId, props.orderAddress, props.price]);

  const { isExtraSmallDevice } = useBreakpoints();

  let title = 'Payment Pending';

  if (currentStep === 'sealing') {
    title = 'Payment Processing';
  } else if (currentStep === 'sealed') {
    title = 'Payment Complete';
  }

  return (
    // @ts-ignore
    <Modal
      asset={{ img: props.assetImage }}
      open={props.show}
      onClose={() => props.onClose()}
      description={''}
      descriptionSx={{ textAlign: 'center' }}
      title={title}
      disableCloseButton={disableClose}
      titleSx={{ mt: '120px' }}
      mobileHeight={isExtraSmallDevice ? '70vh' : '60vh'}
      height={'400px'}>
      {errorMessage ? (
        <Stack spacing={1}>
          <Typography style={{ textAlign: 'center' }} padding={4} fontSize={18} lineHeight={1.4}>
            {errorMessage}
          </Typography>
          {errorDetails ? (
            <Accordion title={'Error Detail'}>
              <Typography>{errorDetails}</Typography>
            </Accordion>
          ) : null}
        </Stack>
      ) : (
        <>
          {currentStep === 'initial' ? (
            <Stack spacing={2} alignItems={'center'}>
              <Typography
                style={{ textAlign: 'center' }}
                padding={4}
                fontSize={18}
                lineHeight={1.4}>
                Awaiting your payment in the Dapper Wallet pop-up and then confirming your
                transaction on the Flow blockchain. If you don&apos;t see a pop-up, enable pop-ups
                and refresh the page to try again.
              </Typography>
              <CircularProgress />
            </Stack>
          ) : null}
          {currentStep === 'sealing' ? (
            <Stack spacing={2} alignItems={'center'}>
              <Typography
                style={{ textAlign: 'center' }}
                padding={4}
                fontSize={18}
                lineHeight={1.4}>
                Your payment has been submitted and your transaction is being confirmed on the Flow
                blockchain.
              </Typography>
              <CircularProgress />
            </Stack>
          ) : null}
          {currentStep === 'sealed' ? (
            <Stack spacing={2} alignItems={'center'}>
              <Typography
                style={{ textAlign: 'center' }}
                padding={4}
                fontSize={18}
                lineHeight={1.4}>
                Your payment has completed and your transaction has been confirmed on the Flow
                blockchain.
              </Typography>
            </Stack>
          ) : null}
        </>
      )}
    </Modal>
  );
};
