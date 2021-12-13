import { fcl } from '../config/config';

export async function setupAccount(tx) {
  try {
    const txId = await fcl
      .send([
        fcl.transaction(tx),
        fcl.payer(fcl.authz), // current user is responsible for paying for the transaction
        fcl.proposer(fcl.authz), // current user acting as the nonce
        fcl.authorizations([fcl.authz]), // current user will be first AuthAccount
        fcl.limit(100) // set the compute limit
      ])
      .then(fcl.decode);

    return fcl.tx(txId).onceSealed();
  } catch (err) {
    console.warn(err);
    throw new Error(err);
  }
}
