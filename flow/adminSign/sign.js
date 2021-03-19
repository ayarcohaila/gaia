// File: ./sign.js
import { ex as EC } from 'elliptic'; // ec -> ex
import { hash } from './hash';

export const sign = (privateKey, message) => {
  const key = EC.keyFromPrivate(Buffer.from(privateKey, 'hex'));
  const sig = key.sign(hash(message)); // hashMsgHex -> hash
  const n = 32;
  const r = sig.r.toArrayLike(Buffer, 'be', n);
  const s = sig.s.toArrayLike(Buffer, 'be', n);
  return Buffer.concat([r, s]).toString('hex');
};
