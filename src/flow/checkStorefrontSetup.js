import { fcl, t } from '../config/config';

const CHECK_STOREFRONT_SETUP_TX = fcl.cdc`
import NFTStorefront from 0xStorefrontContract

pub fun main(address: Address): Bool {
    return getAccount(address)
    .getCapability<&{NFTStorefront.StorefrontPublic}>(NFTStorefront.StorefrontPublicPath)
    .check()
}
`;

export async function checkStorefrontSetup(address) {
  const txId = await fcl
    .send([fcl.script(CHECK_STOREFRONT_SETUP_TX), fcl.args([fcl.arg(address, t.Address)])])
    .then(fcl.decode);

  return txId;
}
