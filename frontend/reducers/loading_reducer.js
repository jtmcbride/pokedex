import actions from '../actions/pokemon_actions';

export const LoadingReducer = (state= false, action) =>{
  let variable;
  if (action.type.startsWith('REQUEST')){
    variable = 'req';
  }else if(action.type.startsWith('RECEIVE')){
      variable = 'rec';
  }

  switch (variable) {
    case 'req':
      return true;
    case 'rec':
      return false;
    default:
      return state;
  }
};
