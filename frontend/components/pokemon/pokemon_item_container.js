import {connect} from 'react-redux';
import PokemonItem from './pokemon_item';
import {selectItem} from '../../reducers/selectors';

const mapStateToProps = (state, {params}) => {
  return { item: selectItem(state, parseInt(params.itemId)) };
};
export default connect(mapStateToProps)(PokemonItem);
