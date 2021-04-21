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

function serializeMetadata(metadata) {
  try {
    let serializedData = [];
    Object.keys(metadata).forEach(k => {
      serializedData.push({
        key: k,
        value: metadata[k]
      });
    });

    return serializedData;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

export async function createTemplate(metadata) {
  const txId = await fcl
    .send([
      fcl.transaction(CREATE_TEMPLATE),
      fcl.payer(fcl.authz),
      fcl.proposer(fcl.authz),
      fcl.authorizations([fcl.authz]),
      fcl.args([
        fcl.arg(
          serializeMetadata(metadata),
          t.Dictionary([
            { key: t.String, value: t.String },
            { key: t.String, value: t.String },
            { key: t.String, value: t.String }
          ])
        )
      ]),
      fcl.limit(35)
    ])
    .then(fcl.decode);

  return fcl.tx(txId).onceSealed();
}
