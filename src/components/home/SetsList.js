import React from 'react';
import TokenCard from '../TokenCard/TokenCard';

function SetsList({ sets }) {
  return (
    <>
      {sets.map(set => {
        if (set.owner !== null) {
          return (
            <TokenCard
              key={set.id}
              imgURL={set.imgURL}
              collection={set.collection}
              name={set.name}
              price={set.price}
            />
          );
        }
        return null;
      })}
    </>
  );
}

export default SetsList;
