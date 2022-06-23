import axios, { AxiosPromise } from "axios"
import {
  GetPokemonParamsType,
  GetPokemonReturnType,
  GetPokemonsParamsType,
  GetPokemonsReturnType,
} from "../types/pokemonServiceTypes"

export const LIMIT = 24

export const GetPokemons = ({
  page,
}: GetPokemonsParamsType): AxiosPromise<GetPokemonsReturnType> => {
  return axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${page}`
  )
}

export const GetPokemon = ({
  name,
}: GetPokemonParamsType): AxiosPromise<GetPokemonReturnType> => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
}
