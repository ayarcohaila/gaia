import { sign } from './sign.js';

// This is the most important function

export async function authz(account) {
  return {
    ...account, // there is some stuff already in here, we need it
    addr: process.env.ADMIN_ADDRESS, // which flow account is going to be doing the signing
    keyId: 0, // says which key we want to do the signing with
    // How to get a signature
    signingFunction: async signable => ({
      f_type: 'CompositeSignature',
      f_vsn: '1.0.0',
      addr: process.env.ADMIN_ADDRESS, // In this case it should be the same as above
      keyId: 0, // In this case it should be the same as above
      signature: sign(process.env.PRIVATE_KEY, signable.message)
    })
  };
}
