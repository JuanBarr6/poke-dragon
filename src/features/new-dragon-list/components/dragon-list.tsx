'use client';

import { DragonBallResponse } from '@/features/dragon-ball/data/dto';
import { DragonBallCharacter } from '@/features/shared/data/dto';
import DragonBallList from '@/features/dragon-ball/components/dragon-ball-list';
import { useEffect, useState } from 'react';

export function DragonList() {
  const [dragonList, setDragonList] = useState<DragonBallCharacter[]>([]);

  const fetchDragonList = async () => {
    const result = await fetch('https://dragonball-api.com/api/characters');

    const data: DragonBallResponse = await result.json();

    console.log(data)

    return data.items;
  };

  useEffect(() => {
    fetchDragonList().then((r) => setDragonList(r));
  }, []);

  return <DragonBallList characters={dragonList} />;
}
