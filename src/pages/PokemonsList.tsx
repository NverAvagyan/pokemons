import { FunctionComponent, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Pagination from "../components/Pagination"
import { GetPokemon, GetPokemons, LIMIT } from "../services/pokemonService"
import {
  GetPokemonReturnType,
  PokemonItemType,
} from "../types/pokemonServiceTypes"

const PokemonsList: FunctionComponent = () => {
  const [loading, setLoading] = useState(true)
  const [pagesCount, setPagesCount] = useState(0)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")
  const [foundPokemon, setFoundPokemon] = useState<GetPokemonReturnType>()
  const [pokemonsList, setPokemonsList] = useState<PokemonItemType[]>([])

  useEffect(() => {
    setLoading(true)
    GetPokemons({ page })
      .then(({ data }) => {
        setPokemonsList(data.results)
        setPagesCount(Math.ceil(data.count / LIMIT))
        setLoading(false)
      })
      .catch(() => {
        alert("Something went wrong")
        setLoading(false)
      })
  }, [page])

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (query.trim()) {
        GetPokemon({ name: query.trim() }).then(({ data }) => {
          setFoundPokemon(data)
        })
      }
    }, 500)

    return () => clearTimeout(timeOutId)
  }, [query])

  return (
    <div className="my-12 px-10">
        <Link className="float-right mb-5 text-blue-600 hover:underline" to='/'>Go to Home Page</Link>
      <div className="mb-10">
        <input
          type="text"
          className="border w-full h-10 mb-5 px-4"
          placeholder="Type name here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {foundPokemon && (
          <div className="bg-zinc-400 rounded-xl">
            <h3 className="text-lg text-center">Name: {foundPokemon.name}</h3>
            <div className="text-center">Height: {foundPokemon.height}</div>
            <div className="text-center">Weight: {foundPokemon.weight}</div>
          </div>
        )}
      </div>
      <div>
        {loading ? (
          <h2 className="text-xl text-center">Loading...</h2>
        ) : (
          <div className="grid gap-5 grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
            {pokemonsList.map((item) => (
              <Link
                key={item.name}
                to={`/pokemon-details/${item.name}`}
                className="first-letter:uppercase px-4 py-2 bg-rose-500 text-center text-gray-100 rounded hover:scale-110 transition-all duration-100"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      <Pagination page={page} pagesCount={pagesCount} setPage={setPage} />
    </div>
  )
}

export default PokemonsList
