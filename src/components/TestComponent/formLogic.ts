import { object, string } from 'yup';

export const PokemonSchema = object({
  pokemonName: string().required().min(2, 'Too Short!').max(50, 'Too Long!'),
});
