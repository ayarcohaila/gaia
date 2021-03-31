/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Button, Col, List, Typography } from 'antd';
import useAuth from '../../hooks/useAuth';
import { listNfts } from '../../flow/listNfts';
import { setupAccount } from '../../flow/setupAccount';
import { deployContract } from '../../flow/deployContract';
import { mintNft } from '../../flow/mintNft';
import { getSales } from '../../flow/getSales';
import { createSaleOffer } from '../../flow/sell';
import { changePrice } from '../../flow/changePrice';

import { buy } from '../../flow/buy';

function Actions() {
  const { user } = useAuth();
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const listItems = useCallback(async () => {
    if (user?.addr) {
      try {
        const items = await listNfts(user.addr);
        setNfts(items);
      } catch (error) {
        console.error(error);
      }
    }
  }, [user?.addr]);

  useEffect(listItems, [listItems]);

  const hasItems = useMemo(() => nfts.length > 0, [nfts]);

  return (
    <Col>
      <Button onClick={() => deployContract(user?.addr)}>deployContract</Button>
      {!hasItems && <Button onClick={setupAccount}>Setup account</Button>}
      <Button
        type="primary"
        loading={isLoading}
        onClick={async () => {
          try {
            setIsLoading(true);
            await mintNft(
              user?.addr,
              1,
              'owner name',
              '`placeholder description`',
              'https://coinlist.co/assets/index/flow_index/header/logo-46aa631655ee5f11ca84195284702bc701bed87141956d342f2385056d9a5864.png'
            );
            listItems();
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        }}>
        Mint NFT
      </Button>
      <Button onClick={async () => console.log(await createSaleOffer(0, 0, user?.addr))}>
        sell 0
      </Button>
      <Button onClick={async () => console.log(await changePrice(user?.addr, 0, 22))}>
        editPrice 0
      </Button>
      <Button onClick={async () => console.log(await changePrice(user?.addr, 1, 1234))}>
        editPrice 1
      </Button>

      <Button onClick={async () => console.log(await buy(0, user?.addr))}>buy 0</Button>

      <Button onClick={async () => console.log(await getSales(user.addr))}>getSales</Button>
      <Link href="/creator">Create NFT</Link>
      <List
        header={<div>My Inventory</div>}
        bordered
        dataSource={nfts}
        renderItem={nft => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {JSON.stringify(nft)}
          </List.Item>
        )}
      />
    </Col>
  );
}

export default Actions;
