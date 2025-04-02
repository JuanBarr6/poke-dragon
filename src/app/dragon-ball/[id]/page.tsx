import {DragonBallCharacterDetail} from "@/features/dragon-ball/data/dto";
import DragonBallCharacterDetailComponent from "@/features/dragon-ball/components/dragon-ball-character-detail";

interface CharacterProps {
    params: Promise<{id: string}>;
}

export default async function Character({params}: CharacterProps) {
    const {id} = await params

    const result  = await fetch(`https://dragonball-api.com/api/characters/${id}`)

    const data : DragonBallCharacterDetail = await result.json()

    return <DragonBallCharacterDetailComponent character={data} />
}
