import React from 'react';
import { withRouter } from 'react-router';

const PokemonIndexItem = ({poke, router}) => {
  const handleClick = url => e => router.push(url);

  return (
  <li
    onClick={handleClick(`/pokemon/${poke.id}`)}>
    <img src={poke.image_url}/> {poke.name}
   </li>
 );
};

export default withRouter(PokemonIndexItem);
