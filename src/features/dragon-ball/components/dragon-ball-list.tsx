import {DragonBallCharacter} from "@/features/dragon-ball/data/dto";
import Link from "next/link";

interface DragonBallListProps {
    characters: DragonBallCharacter[];
}



export default function DragonBallList({characters}: DragonBallListProps) {
    return (
        <div>
            <h1>Dragon Ball Characters</h1>
            <ul>
                {characters.map((character) => (
                    <Link  key={character.id} href={`/dragon-ball/${character.id}`}>
                        <li>{character.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}
