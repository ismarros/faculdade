import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    return(
        <React.Fragment>
            <div>
                <h1>Listar os Pokemons</h1>
                <ul>
                    { props.pokemons.map(pokemon => <li>NOME: {pokemon.nomepokemon}</li>)}
                </ul>
            </div>
        </React.Fragment> 
    )

}