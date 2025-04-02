export interface DragonBallCharacter {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    deletedAt: string | null;
}

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

export interface Meta {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}

export interface Links {
    first: string;
    previous: string;
    next: string;
    last: string;
}

export interface DragonBallResponse {
    items: DragonBallCharacter[];
    meta: Meta;
    links: Links;
}
