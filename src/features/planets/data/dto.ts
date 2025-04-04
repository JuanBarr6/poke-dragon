import {DragonBallCharacter, LinksData, MetaData} from "@/features/shared/data/dto";

export interface Planet {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    deletedAt: string | null;
}

export interface PlanetDetail extends Planet {
    characters: DragonBallCharacter[];
}

export interface PlanetsResponse {
    items: Planet[];
    meta: MetaData;
    links: LinksData;
}



