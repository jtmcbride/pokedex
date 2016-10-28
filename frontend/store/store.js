import {createStore} from 'redux';
import { RootReducer } from '../reducers/root_reducer';
import MasterMiddleware from '../middleware/master_middleware';

const configureStore = (preLoadedState = {}) => (
  createStore(RootReducer, preLoadedState, MasterMiddleware)
);

export default configureStore;
