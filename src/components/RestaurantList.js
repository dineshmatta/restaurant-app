import React from 'react';
import { RestaurantItem } from './RestaurantItem';
import { CardColumns } from 'react-bootstrap';

const RestaurantList = ({data}) => {

  if (!data || !data.restaurants) {
    return [];
  }

  return (
    <CardColumns>
      {
        data.restaurants.map(item => { 
          return (<RestaurantItem key={item.id} data={item}></RestaurantItem>)
        })
      }
    </CardColumns>
    
  )
}

export { RestaurantList };