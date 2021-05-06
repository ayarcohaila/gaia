import React from 'react';
import Card from '../asset/Asset';

function SetsList({ sets }) {
  return sets.map(({ nft, price }) => (
    <Card
      key={nft.id}
      id={nft.id}
      imgURL={nft.template.metadata.imgURL}
      description={nft.template.metadata.description}
      name={nft.template.metadata.name}
      price={Number(price)}
    />
  ));
}

export default SetsList;
