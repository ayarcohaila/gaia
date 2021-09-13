import { fcl } from '../config/config';
const FLOW_TOKEN_PATH = '/public/flowTokenBalance';

export async function getFlowBalance(address) {
  if (address == null) return null;
  const balance = await fcl.query({
    args: (arg, t) => [arg(address, t.Address)],
    cadence: `
      import FungibleToken from 0xFungibleToken
      pub fun main(addr: Address): UFix64 {
        let AccCapability = getAccount(addr)
          .getCapability<&{FungibleToken.Balance}>(${FLOW_TOKEN_PATH})
        if let moneys = AccCapability.borrow() {
          return moneys.balance
        } else {
          return UFix64(0.0)
        }
      }
    `
  });
  return Math.trunc(Number(balance));
}
