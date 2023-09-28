import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  } from "index.js";


const Pokemons = ({pokemons, createPokemon}) => {
  const [pokeName, setPokeName] = useState('')
  const save = async(ev) => {
    ev.preventDefault();
    const pokemon = { pokeName }
    await createPokemon(pokemon);
    setPokeName('');
  }

  const createPokemon = async(pokemon) => {
    
  }

    return (
      <div>
        <h1>All the Pokemon</h1>
        {
          pokemons.map((pokemon) => {
            return(
                <div key={pokemon.id}>
                  <Link to={`/pokemon/${pokemon.id}`}><h3 >{pokemon.name}</h3></Link>
                </div>
            )
          })
        }
        <form>
        <input placheholder='pokemon' value={ pokeName } onChange={ ev => setPokeName(ev.target.value)}/>
          <button disabled={!pokeName}>Add Pokemon</button>
        </form>
      </div>
    )
  }

export default Pokemons