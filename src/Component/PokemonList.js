import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Fetch from './FetchPokemon'
import '../App.css'
function PokemonList({ pokemon }) {

    return (
        <Router>
            {pokemon.map(p => (
                <Switch>  

                    <ul>
                        
                        <li>
                        <Link to='/' key={p}> <Route path="">{p} </Route>  </Link>

                        </li>
                        </ul>      
                        <Route path="/" component={Fetch} />
                          
                </Switch>   

            ))}
        </Router>
    )
}

export default PokemonList
