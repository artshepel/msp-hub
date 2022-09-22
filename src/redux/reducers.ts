import { combineReducers } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';
import { pokemonApi } from './api/pokemons/pokemonApi';
import { articlesApi } from './api/articles/articlesApi';

const rootReducer = combineReducers({
  counter: counterSlice,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  [articlesApi.reducerPath]: articlesApi.reducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
