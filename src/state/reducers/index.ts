import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositores: repositoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
