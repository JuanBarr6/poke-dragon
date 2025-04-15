import { DragonBallCharacterDetail } from '@/features/dragon-ball/data/dto';

interface DragonBallCharacterDetailProps {
  character: DragonBallCharacterDetail;
}

export default function DragonBallCharacterDetailComponent({
  character,
}: DragonBallCharacterDetailProps) {
  return <div>{character.name}</div>;
}
