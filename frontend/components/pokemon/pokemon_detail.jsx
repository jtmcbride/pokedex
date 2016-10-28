import React from 'react';
import { withRouter } from 'react-router';

const PokemonDetail = ({pokemon, router, children, loading}) => {
  let moves, items;
  const handleClick = url => e => router.push(url);

  if (pokemon.moves){
    moves = pokemon.moves.map((mv) => <li key={mv}>{mv}</li>);
    items = pokemon.items.map((item) => <img onClick={handleClick(`pokemon/${pokemon.id}/items/${item.id}`)} key={item.id} src={item.image_url}/>);
  }
  if (loading) {
      return (
        <div className="loader"></div>);
  } else{
  return (
  <marquee className="main-content" data-n="45" scrollamount="25">
    <img src={pokemon.image_url}/>
    <h1>{pokemon.name}</h1>
    <h3>Type: {pokemon.poke_type}</h3>
    <h3>Moves</h3>
    <ul>
      {moves}
    </ul>
    {items}
    {children}
  </marquee>
);}
};

export default withRouter(PokemonDetail);
