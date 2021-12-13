import React, { useEffect, useContext, useState } from 'react';
import { Grid, Typography, Link } from '@mui/material';
import axios from 'axios';
import preval from 'preval.macro';

import { CollectionCard } from '~/components';
import useBreakpoints from '~/hooks/useBreakpoints';
import { AuthContext } from '~/providers/AuthProvider';
import { isDapper } from '~/utils/currencyCheck';
import { loadTransaction } from '~/utils/transactionsLoader';

const CollectionList = ({ nfts, hasNftsForSale }) => {
  const { isMediumDevice } = useBreakpoints();
  const [ownNFTs, setOwnNFTs] = useState([]);
  const [transaction, setTransaction] = useState(null);
  const { user } = useContext(AuthContext);

  const buyTx = isDapper
    ? preval`
      const fs = require('fs')
      const path = require('path'),
      filePath = path.join(__dirname, "../../flow/transactions/dapper/buy.cdc");
      module.exports = fs.readFileSync(filePath, 'utf8')
    `
    : preval`
      const fs = require('fs')
      const path = require('path'),
      filePath = path.join(__dirname, "../../flow/transactions/flowToken/buy.cdc");
      module.exports = fs.readFileSync(filePath, 'utf8')
    `;

  useEffect(() => {
    (async () => {
      if (!!user && Object.keys(user).length) {
        const result = await axios.get(`/api/list?address=${user?.addr}`);
        const ballerzNFTs = result.data.ballerz;
        const brysonNFTs = result.data.bryson;
        const NFTs = ballerzNFTs.concat(brysonNFTs);
        const tx = await loadTransaction(buyTx);
        setTransaction(tx);
        setOwnNFTs(NFTs);
      }
    })();
  }, [user, loadTransaction, isDapper]);

  return (
    <>
      {hasNftsForSale ? (
        nfts.map(nft => (
          <CollectionCard key={nft.id} data={nft} ownNFTs={ownNFTs} transaction={transaction} />
        ))
      ) : (
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ width: '50%', height: isMediumDevice ? '100%' : 300 }}>
          <Typography
            variant="body"
            sx={{
              fontSize: isMediumDevice ? '14px' : '20px',
              textAlign: 'center',
              lineHeight: isMediumDevice ? '1.2' : '22px'
            }}>
            Sold out! Join us on <Link url="https://twitter.com/ballerz_nft ">Twitter</Link> and{' '}
            <Link url="https://discord.com/invite/ballerznft ">Discord</Link> for more BALLERZ info.
          </Typography>
        </Grid>
      )}
    </>
  );
};

export default React.memo(CollectionList);
