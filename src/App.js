import React, { useState, useEffect } from 'react'
import Fetch from "./Component/FetchPokemon"
import './App.css'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Users from './Pages/Users'
function App() {

  return (
    <>
    <Router>
    <div className="App">
      <header className="App-header">
        <ul>



          <li className="saw">       <Link to="/">Home</Link>  </li>
          <li className="saw">       <Link to="/About">About</Link>  </li>
          <li className="saw">        <Link to="/Users">Users</Link> </li>

        </ul>

      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/About"  component={About} />
      <Route path="/Users"  component={Users} />

      </Switch>
      <Fetch />

      </header>
    </div>
    </Router>
    </>
  )
}

export default App
