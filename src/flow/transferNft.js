import { fcl, t } from '../config/config';

export async function transferNft(tx, recipient, withdrawID) {
  try {
    const txId = await fcl
      .send([
        fcl.transaction(tx),
        fcl.args([fcl.arg(recipient, t.Address), fcl.arg(withdrawID, t.UInt64)]),
        fcl.payer(fcl.authz), // current user is responsible for paying for the transaction
        fcl.proposer(fcl.authz), // current user acting as the nonce
        fcl.authorizations([fcl.authz]), // current user will be first AuthAccount
        fcl.limit(100) // set the compute limit
      ])
      .then(fcl.decode);

    const sealedTx = await fcl.tx(txId).onceSealed();
    return {
      txId,
      sealedTx
    };
  } catch (err) {
    throw new Error(err);
  }
}
