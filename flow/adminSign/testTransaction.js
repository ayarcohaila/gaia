// File: ./mvt.tx.js
import { send } from '@onflow/sdk-send';
import { decode } from '@onflow/sdk-decode';
import { proposer } from '@onflow/sdk-build-proposer';
import { payer } from '@onflow/sdk-build-payer';
import { authorizations } from '@onflow/sdk-build-authorizations';
import { authz } from './authz';
import { transaction } from '@onflow/sdk-build-transaction';

export const testSign = async () => {
  var txId = await send([
    transaction`
      transaction {
        prepare(acct: AuthAccount) {
          log(acct)
        }
      }
    `,
    proposer(authz), // used as a nonce
    payer(authz), // means your account 0xe704fadec500fa15 will be paying for the transaction
    authorizations([
      authz // means the first AuthAccount passed into the prepare will be for 0xe704fadec500fa15
    ])
  ])
    .then(decode)
    .finally(
      console.log(`tx[${txId}]: https://flow-view-source.com/testnet/tx/${txId}`) // see the status of the transaction
    );
};
