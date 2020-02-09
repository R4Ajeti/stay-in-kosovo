import React from 'react';
import Card from './Card';

const CardList = ({ hostels }) => {
  return (
    <div>
      {hostels.map((user, i) => {
        return (
          <Card
            key={i}
            id={hostels[i].id}
            name={hostels[i].company.name}
            email={hostels[i].email}
            lat={hostels[i].address.geo.lat}
            lng={hostels[i].address.geo.lng}
          />
        );
      })}
    </div>
  );
};

export default CardList;
