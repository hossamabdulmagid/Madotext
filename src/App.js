import React from 'react'
import Axios from 'axios'
import FetchPokemon from './Component/FetchPokemon'
import './App.css'
function App() {
  
  return (
    <>
    <div className="App">
      <header className="App-header">
        <FetchPokemon />
      </header>
    </div>
    </>
  )
}

export default App
