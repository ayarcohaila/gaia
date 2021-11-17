import { ballerzCollection } from '~/config/config';

export const COLLECTIONS = {
  BALLERZ: 'ballerz',
  BRYSON: 'bryson'
};

export const COLLECTION_ID = {
  [COLLECTIONS.BALLERZ]: ballerzCollection || 'db4ccc58-4398-4a66-87cd-5b0f6c6c21f3',
  [COLLECTIONS.BRYSON]: '10ed6305-a3c0-443f-bcfb-77ce1d102e0b'
};

export const COLLECTION_TOTAL_NUMBER = {
  [COLLECTIONS.BALLERZ]: 10000,
  [COLLECTIONS.BRYSON]: 5000
};
