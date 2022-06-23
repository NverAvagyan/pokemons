import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { GetPokemon } from "../services/pokemonService"
import { GetPokemonReturnType } from "../types/pokemonServiceTypes"

const PokemonDetails = () => {
  const [loading, setLoading] = useState(true)
  const [pokemonInfo, setPokemonInfo] = useState<GetPokemonReturnType>()
  const { name } = useParams()

  useEffect(() => {
    if (name) {
      setLoading(true)
      GetPokemon({ name })
        .then(({ data }) => {
          setPokemonInfo(data)
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
          alert("Something went wrong")
        })
    }
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div className="text-center">
      <Link to={"/pokemons-list"}>Go back</Link>
      <h2 className="text-xl first-letter:uppercase">
        Name: {pokemonInfo?.name}
      </h2>
      <h2 className="text-xl first-letter:uppercase">
        Height: {pokemonInfo?.height}
      </h2>
      <h2 className="text-xl first-letter:uppercase">
        Weight: {pokemonInfo?.weight}
      </h2>
      <h2 className="text-xl first-letter:uppercase">
        Experience: {pokemonInfo?.base_experience}
      </h2>
    </div>
  )
}

export default PokemonDetails
