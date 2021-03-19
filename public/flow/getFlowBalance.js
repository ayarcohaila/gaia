import { fcl } from '../config/config';

export async function getFlowBalance(address) {
  if (address == null) return null;
  const account = fcl.account(address);
  return account.balance;
}
