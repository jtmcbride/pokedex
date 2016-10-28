import React from 'react';
import { withRouter } from 'react-router';
import {selectItem} from '../../reducers/selectors';

const ItemDetail = ({item}) => {
  let name, price, hap;
  if(item) {
    name = item.name;
    price = item.price;
    hap = item.happiness;
  }
  return (
  <div>
    <h4>Name: {name}</h4>
    <h4>Price:{price}</h4>
    <h4>Happiness: {hap} </h4>

  </div>
);
};

export default withRouter(ItemDetail);
