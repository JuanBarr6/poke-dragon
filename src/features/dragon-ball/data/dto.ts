import {DragonBallCharacter, LinksData, MetaData} from "@/features/shared/data/dto";

export interface OriginPlanet {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    deletedAt: string | null;
}

export interface Transformation {
    id: number;
    name: string;
    image: string;
    ki: string;
    deletedAt: string | null;
}

export interface DragonBallCharacterDetail extends DragonBallCharacter {
    originPlanet: OriginPlanet;
    transformations: Transformation[];
}

export interface DragonBallResponse {
    items: DragonBallCharacter[];
    meta: MetaData;
    links: LinksData;
}
