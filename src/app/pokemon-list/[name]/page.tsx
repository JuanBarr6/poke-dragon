interface PokemonDetailPageProps {
  params: Promise<{ name: string }>;
  searchParams: Promise<{ url: string }>;
}

export default async function PokemonDetailPage({
  params,
  searchParams,
}: PokemonDetailPageProps) {
  const { url } = await searchParams;
  const { name } = await params;

  const result = await fetch(url);

  const data = await result.json();

  return <div>{name}</div>;
}
