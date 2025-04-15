import { PlanetDetail } from '@/features/planets/data/dto';

interface CharacterProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: CharacterProps) {
  const { id } = await params;

  const result = await fetch(`https://dragonball-api.com/api/planets/${id}`);

  const data: PlanetDetail = await result.json();

  const sliceCharacter1 = data.characters.slice(0, 2);
  const sliceCharacter2 = data.characters.slice(2, 4);

  console.log(sliceCharacter1);
  console.log(sliceCharacter2);

  return null;
}
