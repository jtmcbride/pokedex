import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
  pokemon: state.pokemonDetail,
  loading: state.loading
});

export default connect(mapStateToProps)(PokemonDetail);
