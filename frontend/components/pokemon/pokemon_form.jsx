import React from 'react';
import { withRouter } from 'react-router';
import {selectItem} from '../../reducers/selectors';

class PokemonForm extends React.Component{
  constructor(props){
    super(props);
    this.poke_types = [
      "fire",
      "electric",
      "normal",
      "ghost",
      "psychic",
      "water",
      "bug",
      "dragon",
      "grass",
      "fighting",
      "ice",
      "flying",
      "poison",
      "ground",
      "rock",
      "steel"
    ];

    this.state = {
      name: '',
      image_url: '',
      poke_type: 'bug',
      attack: '',
      defense: '',
      moves: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(property){
    if( property === "moves" ) {

      let that = this;
      return e =>{
        let newMoves = Object.assign({}, that.state.moves);
        newMoves[e.target.id] = e.target.value;
        that.setState({moves: newMoves });
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    }
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(event){
    event.preventDefault();
    let moves = Object.keys(this.state.moves).map(key => this.state.moves[key]);
    let newState = Object.assign({}, this.state);
    newState.moves = moves;
    this.props.createPokemon(newState);
  }

  errors(){
    let pokemonErrors;
    if (this.props.errors){
      pokemonErrors= (this.props.errors).map(error => <li key={error}>{error}</li>);
    }
    return pokemonErrors;
  }

  render(){
    return(
      <form className="pokemon-form main-content">
        <h1>Create Pokemon</h1>
        {this.errors()}
        <input type="text" onChange={this.handleChange("name")} value={this.state.name} placeholder="Name"/>
        <input type="text" onChange={this.handleChange("image_url")}  value={this.state.image_url} placeholder="Image Url"/>
        <select defaultValue= {this.state.poke_type} onChange={this.handleChange("poke_type")} >
          {this.poke_types.map( type => {
            return <option  value={type} key={type}>{type}</option>;
          })}
          </select>
          <input onChange={this.handleChange("defense")}  type="number" value={this.state.defense} placeholder="Defense"/>
          <input onChange={this.handleChange("attack")}  type="number" value={this.state.attack} placeholder="attack"/>
          <input onChange={this.handleChange("moves")} type="text" id="move_1" value={this.state.move_1} placeholder="Move 1"/>
          <input onChange={this.handleChange("moves")} type="text" id="move_2" value={this.state.move_2} placeholder="Move 2"/>
      <button onClick={this.handleSubmit}>Create Pokemon</button>

      </form>
    );
  }


}

export default PokemonForm;
