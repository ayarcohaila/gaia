import preval from 'preval.macro';

import { isDapper } from '~/utils/currencyCheck';
import { COLLECTIONS_NAME } from '../../collections_setup';

export const COLLECTION_TOTAL_NUMBER = {
  [COLLECTIONS_NAME.BALLERZ]: 10000,
  [COLLECTIONS_NAME.BRYSON]: 5000
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
