import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import s from './TestComponent.scss';

import { increment } from '../../features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useLazyGetPokemonByNameQuery } from '../../redux/api/pokemons/pokemonApi';

interface ISubmitFormValues {
  pokemonName: string;
}

const TestComponent: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      pokemonName: '',
    },
    onSubmit: (values: ISubmitFormValues) => {
      void trigger(values.pokemonName, true);
    },
  });
  const [trigger, result] = useLazyGetPokemonByNameQuery();
  const pokemonData = result.data;
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter);
  const onIncrement = (): void => {
    dispatch(increment(1));
  };

  return (
    <div className={s.container}>
      <h1>Increment counter state</h1>
      <button onClick={onIncrement}>Increment</button>
      Value counter: {counter}
      <div>
        <h2>Pokemon query </h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            placeholder='bulbasaur'
            name='pokemonName'
            onChange={formik.handleChange}
            value={formik.values.pokemonName}
          />
          <button type='submit'>Get Pokemon by name</button>
        </form>
        <div>
          {result.isError && 'No pokemon found :('}
          {result.isLoading && 'Hunting down the pokemon...'}
        </div>
        {pokemonData && (
          <div className='pokemonData'>
            <div>Name: {pokemonData.name}</div>
            <div>Base experience: {pokemonData.base_experience}</div>
            <div>
              Abilities:
              <ul>
                {pokemonData.abilities.map((abilityProps: any) => (
                  <li key={abilityProps.ability.name}>{abilityProps.ability.name}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <Link to='/test'> Navigate</Link>
    </div>
  );
};

export default TestComponent;
