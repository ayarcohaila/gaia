import { fcl, t } from '../config/config';

const TX = `import FungibleToken from 0xFungibleToken
import FUSD from 0xFUSDContract

transaction(amount: UFix64, receiverAddr: Address) {

  // The Vault resource that holds the tokens being transferred
  let sentVault: @FungibleToken.Vault

  prepare(signer: AuthAccount) {
    // Get a reference to the signer's stored vault
    let vaultRef = signer
      .borrow<&FUSD.Vault>(from: /storage/fusdVault)
      ?? panic("Could not borrow reference to the owner's Vault!")

    // Withdraw tokens from the signer's stored vault
    self.sentVault <- vaultRef.withdraw(amount: amount)
  }

  execute {
    // Get the recipient's public account object
    let recipient = getAccount(receiverAddr)

    // Get a reference to the recipient's Receiver
    let receiverRef = recipient
      .getCapability(/public/fusdReceiver)!
      .borrow<&{FungibleToken.Receiver}>()
      ?? panic("Could not borrow receiver reference to the recipient's Vault")

    // Deposit the withdrawn tokens in the recipient's receiver
    receiverRef.deposit(from: <-self.sentVault)
  }
}`;

export async function sendFUSD() {
  try {
    const txId = await fcl
      .send([
        fcl.transaction(TX),
        //salePrice must have 1. something , INT are not accepted by this transaction
        fcl.args([
          fcl.arg(Number(1).toFixed(8), t.UFix64),
          fcl.arg('0xc92b257289017814', t.Address)
        ]),
        fcl.proposer(fcl.authz),
        fcl.payer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(1000)
      ])
      .then(fcl.decode);
    return fcl.tx(txId).onceSealed();
  } catch (err) {
    console.warn('-------------------------');
    console.error(err);
    console.warn('-------------------------');
    throw new Error(err);
  }
}
