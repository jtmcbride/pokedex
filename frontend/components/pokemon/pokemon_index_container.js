import {connect} from 'react-redux';
import {requestAllPokemon} from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';
import {selectAllPokemon} from '../../reducers/selectors';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state),
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  requestPokemon: () => (dispatch(requestAllPokemon()))
});


export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);
