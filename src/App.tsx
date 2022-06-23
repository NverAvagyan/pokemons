import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { RouteNames } from "./constants/routes"
import Home from "./pages/Home"
import PokemonDetails from "./pages/PokemonDetails"
import PokemonsList from "./pages/PokemonsList"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteNames.ROOT} element={<Home />} />
      </Routes>
      <Routes>
        <Route path={RouteNames.POKEMONS_LIST} element={<PokemonsList />} />
      </Routes>
      <Routes>
        <Route path={RouteNames.POKEMON_DETAILS} element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
