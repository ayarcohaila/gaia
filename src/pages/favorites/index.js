import dynamic from 'next/dynamic';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import Seo from '~/components/seo';
import ProfileBanner from '~/components/profileBanner';
import useAuth from '~/hooks/useAuth';
import { SEO_DATA } from '~/constant/seo';

import * as Styled from '~/styles/favorites/styles';

const Card = dynamic(() => import('~/components/card'));

//TODO: Remove after integration
const MOCKED_DATA = [
  {
    asset_id: 2629,
    mint_number: 68,
    collection_id: 'db6b606b-f08b-439d-80f0-8ebc0ca9f837',
    collection: {
      collection_id: 41,
      name: 'BrysonDeChambeau',
      image: 'ipfs://QmNQTUf2TGP98xK3pZF1fkUunxVwDvr9BgxKVpSecsDNi3'
    },
    owner: '0x474fa3d9abf61952',
    template: {
      metadata: {
        img: 'ipfs://QmWD2bUbTQPc78D4Fh9iDTw4GwiMs83TA9HcQL6bE4xgut',
        type: 'Golf',
        title: 'Vegas, Baby!',
        video: 'ipfs://QmeAtfCsWmqdEiXjYy98aTuZcRyiArKqrDm89McinZaitW',
        description: 'Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV'
      }
    },
    id: 68,
    name: 'Vegas, Baby!',
    imageURL: 'https://images.ongaia.com/ipfs/QmWD2bUbTQPc78D4Fh9iDTw4GwiMs83TA9HcQL6bE4xgut',
    videoURL: 'https://images.ongaia.com/ipfs/QmeAtfCsWmqdEiXjYy98aTuZcRyiArKqrDm89McinZaitW',
    collection_name: 'bryson',
    collection_picture: '/collections/bryson/avatar.webp'
  },
  {
    asset_id: 2717,
    mint_number: 1,
    is_for_sale: false,
    has_sale_offers: false,
    collection_id: 'be0a6102-2ca9-4875-b801-cf236ce43a86',
    transaction_status: false,
    collection: {
      collection_id: 44,
      name: 'Ballerz',
      market_fee: 0.05,
      image: '/templates/collections/ballerz.png',
      description: 'A basketball-inspired generative NFT living on the Flow blockchain',
      author: '0x9eef2e4511390ce4'
    },
    owner: '0x474fa3d9abf61952',
    template: {
      metadata: {
        id: '44',
        img: 'ipfs://QmZ6dDfmAzbKq7V37DyUeB8uxbn7yHA4LtP1tyFCwMkF3x/44.png',
        uri: '/collection/ballerz//44',
        body: 'Human V',
        hair: 'Black Taper',
        role: 'Player',
        team: 'Boulder Elks',
        dunks: '76',
        title: 'BALLER #44',
        jersey: 'Away',
        number: '86',
        defense: '73',
        shooting: '68',
        playmaking: '75',
        accessories: 'None',
        description: 'A basketball-inspired generative NFT living on the Flow blockchain'
      }
    },
    sale_offers: [
      {
        listing_resource_id: 19355646,
        price: '10.00000000',
        status: 'finished',
        updated_at: '2021-12-17T20:42:57.190821+00:00'
      }
    ],
    id: '44',
    name: 'BALLER #44',
    imageURL:
      'https://images.ongaia.com/ipfs/QmZ6dDfmAzbKq7V37DyUeB8uxbn7yHA4LtP1tyFCwMkF3x/44.png',
    videoURL: '',
    collection_name: 'ballerz',
    collection_picture: '/collections/ballerz/avatar.webp'
  },
  {
    asset_id: 6200,
    mint_number: 60,
    is_for_sale: false,
    has_sale_offers: false,
    collection_id: '5eeabd9a-546b-4a9d-9833-3dcae22a2aa4',
    transaction_status: false,
    collection: {
      collection_id: 51,
      name: "Shareef O'Neal",
      market_fee: 0.05,
      image: '/images/shareef.png',
      description:
        "O'Neal NFTs are the entry point into a series of NFTs telling the story of the O'Neal family and their shared love of sports, family, and inspiring others to live their best life. Learn more at onealnfts.com",
      author: '0x2f0533311ae9ab7a'
    },
    owner: '0x474fa3d9abf61952',
    template: {
      metadata: {
        img: 'ipfs://QmPznm46ELWPhHXoy6ZH5SegPZYa2sQR7QK9P1MhnrjvjL/shareef_silver.png',
        item: '2',
        type: 'Basketball',
        title: "Shareef O'Neal - Basketball (Silver Edition)",
        video: 'ipfs://QmPznm46ELWPhHXoy6ZH5SegPZYa2sQR7QK9P1MhnrjvjL/shareef_silver.mp4',
        rarity: 'Silver',
        series: 'Shareef O’Neal - Basketball',
        editions: '111',
        description:
          "Although Shareef's playing style may differ from his father's, their highlight reel dunks are clearly a gift passed down from generation to generation. With the O'Neals – it's always showtime.",
        family_member: 'Shareef',
        series_description:
          "This genesis collection focuses on Shareef's love for the game of basketball; Gold and Silver Editions feature his original composed beats."
      }
    },
    sale_offers: [
      {
        listing_resource_id: 21427911,
        price: '88.00000000',
        status: 'finished',
        updated_at: '2021-12-10T22:01:23.68062+00:00'
      },
      {
        listing_resource_id: 21472848,
        price: '88.00000000',
        status: 'finished',
        updated_at: '2021-12-20T20:50:25.013429+00:00'
      }
    ],
    id: 6200,
    name: "Shareef O'Neal - Basketball (Silver Edition)",
    imageURL:
      'https://images.ongaia.com/ipfs/QmPznm46ELWPhHXoy6ZH5SegPZYa2sQR7QK9P1MhnrjvjL/shareef_silver.png',
    videoURL:
      'https://images.ongaia.com/ipfs/QmPznm46ELWPhHXoy6ZH5SegPZYa2sQR7QK9P1MhnrjvjL/shareef_silver.mp4',
    collection_name: 'shareef',
    collection_picture: '/collections/shareef/avatar.webp'
  },
  {
    asset_id: 12793,
    mint_number: 333,
    is_for_sale: false,
    has_sale_offers: false,
    collection_id: 'a4130a47-084d-4f65-a9e2-636ce7bbca2b',
    transaction_status: false,
    collection: {
      collection_id: 53,
      name: "Shareef O'Neal - Birthday",
      market_fee: 0.05,
      image: '/images/shareef-birthday.png',
      description: 'An exclusive drop for Shareef NFT holders to celebrate his January 11 birthday',
      author: '0x2f0533311ae9ab7a'
    },
    owner: '0x474fa3d9abf61952',
    template: {
      metadata: {
        img: 'ipfs://QmQJSeTkEXuo5CBqXHCsBtT7UD5S5nhH7j2i7MTncpiBnn',
        item: '3',
        type: 'Basketball',
        title: "Shareef O'Neal - Birthday (Bronze)",
        video: 'ipfs://QmQaCQthWrj41qstS7ZQVDtYT8qPQx17ZnALTexuXEhmxS',
        rarity: 'Bronze',
        series: "Shareef O'Neal - Airdrop",
        editions: '888',
        description:
          'An exclusive drop for Shareef NFT holders to celebrate his January 11 birthday',
        family_member: 'Shareef',
        series_description: 'Rewards exclusively for holders'
      }
    },
    sale_offers: [],
    id: 333,
    name: "Shareef O'Neal - Birthday (Bronze)",
    imageURL: 'https://images.ongaia.com/ipfs/QmQJSeTkEXuo5CBqXHCsBtT7UD5S5nhH7j2i7MTncpiBnn',
    videoURL: 'https://images.ongaia.com/ipfs/QmQaCQthWrj41qstS7ZQVDtYT8qPQx17ZnALTexuXEhmxS',
    collection_name: 'shareef',
    collection_picture: '/collections/shareef/avatar.webp'
  }
];

const Favorites = () => {
  const { user } = useAuth();

  const router = useRouter();

  const handleClick = () => {
    router.push('/browse');
  };

  const renderList = useMemo(() => {
    if (!user?.addr) {
      return (
        <Styled.EmptyContainer>
          <Styled.EmptyText>
            You must be logged to be able to see your favorite list
          </Styled.EmptyText>
        </Styled.EmptyContainer>
      );
    }
    return (
      <>
        {MOCKED_DATA.length > 0 ? (
          <Styled.ListWrapper>
            {MOCKED_DATA.map((nft, i) => (
              <Card
                key={i}
                data={nft}
                hasActions={!!user && user.loggedIn && user.addr === router.query.id}
              />
            ))}
          </Styled.ListWrapper>
        ) : (
          <Styled.EmptyContainer>
            <Styled.EmptyText>
              There are no Flow NFTs in this favorite list from any Gaia collections
            </Styled.EmptyText>
            <Styled.RedirectButton onClick={handleClick}>Visit Marketplace</Styled.RedirectButton>
          </Styled.EmptyContainer>
        )}
      </>
    );
  }, [user?.addr]);

  return (
    <Box component="section">
      <Seo title={SEO_DATA.title.favorites} description={SEO_DATA.description.default} />
      <ProfileBanner address={user?.addr} bannerTitle="My Favorites" />
      {renderList}
    </Box>
  );
};

export default Favorites;
