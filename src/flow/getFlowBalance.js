import { fcl } from '../config/config';

export async function getFlowBalance(address) {
  if (address == null) return null;
  const balance = await fcl.query({
    args: (arg, t) => [arg(address, t.Address)],
    cadence: `
    // This script reads the balance field of an account's FlowToken Balance

    import FungibleToken from 0xFungibleToken
    import FlowToken from 0xFlowToken
    
    pub fun main(account: Address): &FlowToken.Vault{FungibleToken.Receiver} {
    
        let vaultRef = getAccount(account)
            .getCapability(/public/flowTokenReceiver)
            .borrow<&FlowToken.Vault{FungibleToken.Receiver}>()
            ?? panic("Could not borrow Balance reference to the Vault")
    
        return vaultRef
    }
    `
  });
  return Math.trunc(Number(balance));
}
