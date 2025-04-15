import { PokemonResponse } from '@/features/pokemon/server/dto';
import PokemonList from '@/features/pokemon/components/pokemon-list';

export default async function Pokemon() {
  const result = await fetch('https://pokeapi.co/api/v2/pokemon');

  const data: PokemonResponse = await result.json();

  return <PokemonList pokemons={data.results} />;
}
