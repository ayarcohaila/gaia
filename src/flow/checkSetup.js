import { fcl, t } from '../config/config';

const CHECK_SETUP_TX = fcl.cdc`
import Gaia from 0xGaiaContract
import NonFungibleToken from 0xNFTInterface

pub fun main(address: Address): Bool {
  return getAccount(address)
    .getCapability<&{Gaia.CollectionPublic}>(Gaia.CollectionPublicPath)
    .check()
}
`;

export async function checkSetup(address) {
  const txId = await fcl
    .send([fcl.script(CHECK_SETUP_TX), fcl.args([fcl.arg(address, t.Address)])])
    .then(fcl.decode);

  return txId;
}
