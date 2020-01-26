import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import PokemonList from './Component/PokemonList';
import './App.css'
function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    Axios.get(currentPageUrl).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })
  }, [currentPageUrl])
  if (loading) return "Loading...."
  return (
    <div className="App">
      <header className="App-header">
        <PokemonList pokemon={pokemon} />
      </header>
    </div>
  )
}

export default App
