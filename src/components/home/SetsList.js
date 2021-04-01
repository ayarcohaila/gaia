import React from 'react';
import Card from '../asset/Asset';

function SetsList({ sets }) {
  return (
    <>
      {sets.map(set => {
        if (set.owner !== null) {
          return (
            <Card
              key={set.id}
              id={set.id}
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
