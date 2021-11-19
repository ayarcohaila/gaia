import preval from 'preval.macro';

import { ballerzCollection, brisonCollection } from '~/config/config';
import { isDapper } from '~/utils/currencyCheck';

export const COLLECTIONS = {
  BALLERZ: 'ballerz',
  BRYSON: 'bryson'
};

export const COLLECTION_ID = {
  [COLLECTIONS.BALLERZ]: ballerzCollection,
  [COLLECTIONS.BRYSON]: brisonCollection
};

export const COLLECTION_TOTAL_NUMBER = {
  [COLLECTIONS.BALLERZ]: 10000,
  [COLLECTIONS.BRYSON]: 5000
};

export const BUY_TX = isDapper
  ? preval`
  const fs = require('fs')
  const path = require('path'),
  filePath = path.join(__dirname, "../flow/transactions/dapper/buy.cdc");
  module.exports = fs.readFileSync(filePath, 'utf8')
`
  : preval`
  const fs = require('fs')
  const path = require('path'),
  filePath = path.join(__dirname, "../flow/transactions/flowToken/buy.cdc");
  module.exports = fs.readFileSync(filePath, 'utf8')
`;

export const BUY_BRYSON_TX =
  isDapper &&
  preval`
  const fs = require('fs')
  const path = require('path'),
  filePath = path.join(__dirname, "../flow/transactions/dapper/buy_bryson.cdc");
  module.exports = fs.readFileSync(filePath, 'utf8')
`;

export const isBrysonSaleEnabled = process.env.NEXT_PUBLIC_ENABLE_BRYSON_SALE === 'true';
