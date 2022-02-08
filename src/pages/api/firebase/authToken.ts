import {
  GetFirebaseAuthTokenRequest,
  GetFirebaseAuthTokenResponse
} from '~/api/schema/getFirebaseAuthToken';
import { NextApiRequest, NextApiResponse } from 'next';
import { modelData } from '~/helpers/modelHelpers';
import firebaseAdmin from '~/lib/firebaseAdmin';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // TODO: need to refactor this to use Dapper auth, right now we just trust the dapper wallet address (which is not secure)
    const body = req.body as GetFirebaseAuthTokenRequest;

    const customToken = await firebaseAdmin.auth().createCustomToken(body.address);

    res.status(200).json(modelData<GetFirebaseAuthTokenResponse>({ authToken: customToken }));
  } catch (e) {
    console.error('error', e);
    res.status(500).json({ error: `Can't get firebase auth token` });
  }
}
