export interface GetPokemonsParamsType {
    page: number
}

export interface GetPokemonParamsType {
    name: string
}

export interface GetPokemonsReturnType {
    count: number
    results: Array<PokemonItemType>
}


export interface PokemonItemType {
    name: string
    url: string
}

export interface GetPokemonsReturnType {
    count: number
    results: Array<PokemonItemType>
}

export interface GetPokemonReturnType {
  base_experience: number;
  height: number;
  id: number;
  name: string;
  weight: number;
}