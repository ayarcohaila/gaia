import { fcl, t } from '../config/config';

const CREATE_TEMPLATE = `
import FlowAssets from 0xNFTContract

// This transaction creates a new play struct 
// and stores it in the Top Shot smart contract
// We currently stringify the metadata and instert it into the 
// transaction string, but want to use transaction arguments soon

transaction(metadata: {String: String}) {
    prepare(acct: AuthAccount) {

        // borrow a reference to the admin resource
        let admin = acct.borrow<&FlowAssets.Admin>(from: /storage/FlowAssetsAdmin)
            ?? panic("No admin resource in storage")
        admin.createTemplate(metadata: metadata)
    }
}`;

export async function createTemplate(metadata) {
  const txId = await fcl
    .send([
      fcl.transaction(CREATE_TEMPLATE),
      fcl.payer(fcl.authz),
      fcl.proposer(fcl.authz),
      fcl.authorizations([fcl.authz]),
      fcl.args([
        fcl.arg(
          metadata,
          t.Dictionary(Array(metadata.length).fill({ key: t.String, value: t.String }))
        )
      ]),
      fcl.limit(35)
    ])
    .then(fcl.decode);

  return fcl.tx(txId).onceSealed();
}
