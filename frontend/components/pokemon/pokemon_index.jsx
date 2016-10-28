import React from 'react';
import PokemonIndexItem from './pokemon_index_item';



const PokemonIndex = ({pokemon, children, loading}) => {
  if(loading){
    return (
      <div className="loader"></div>
    );
  }else{
    return (
      <div>
      {children}

      <ul className="poke-index">
        {pokemon.map((poke) => <PokemonIndexItem key={poke.id} poke={poke}/>)}
      </ul>

    </div>);
  }

};

export default PokemonIndex;
