import { combineReducers } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';
import { pokemonApi } from './api/pokemons/pokemonApi';

const rootReducer = combineReducers({
  counter: counterSlice,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
