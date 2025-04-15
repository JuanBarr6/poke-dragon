'use client';

import { PokemonResult } from '@/features/pokemon/server/dto';
import Link from 'next/link';

interface PokemonCardProps {
  pokemons: PokemonResult[];
}

export default function PokemonList({ pokemons }: PokemonCardProps) {
  return (
    <div className="flex-wrap flex gap-4">
      {pokemons.map(({ name, url }) => (
        <div
          className="flex h-[200px] w-[200px] border rounded-xl  justify-center align-middle bg-black text-white"
          key={name}
        >
          <Link href={{ pathname: `/pokemon-list/${name}`, query: { url } }}>
            <div>{name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
