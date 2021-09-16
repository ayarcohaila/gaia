import React from 'react';
import Card from '../asset/Asset';

function SetsList({ nft, price }) {
  return (
    <Card
      key={nft.id}
      id={nft.id}
      imgURL={nft.template.metadata.image}
      description={nft.template.metadata.description}
      name={nft.template.metadata.name}
      video={nft.template.metadata.video}
      price={Number(price)}
      mintNumber={nft.mint_number}
      owner={nft.owner}
      showOwner
    />
  );
}

export default SetsList;
