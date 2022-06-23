import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <h2 className="text-center text-4xl">Pokemons app</h2>
      <h3 className="text-center text-lg mt-5">
        Go to <Link to="pokemons-list" className="text-blue-600 hover:text-green-500">Pokemons List</Link>
      </h3>
    </>
  )
}

export default Home
