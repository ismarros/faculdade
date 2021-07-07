import React, { Component } from "react";
import axios from 'axios';


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    
    Component.state = {
        pokemons: [],
        nomepokemon: '',
        codtipo: 1,
      }
    
    
   function handleChange () {
        props.this.setState({ nomepokemon: 'props.target.value' });
    
        console.log("ESSE É O TEXTO",this.state.nomepokemon)
      }
    
    function handleMuda () {
        this.setState({ codtipo: this.target.value });
        console.log("ESSE É O COD",this.state.codtipo)
      }
    
    function handleSubmit () {
    
        const user = {
          nomepokemon: this.state.nomepokemon,
          codtipo: this.state.codtipo
        };
    
        console.log("AQUI", user.codtipo.value)
        axios.post('http://localhost:8001/pokemons', {
          nomepokemon: this.state.nomepokemon,
          codtipo: this.state.codtipo
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      } 

    return(
        <>
            <div>
                
            </div>
        </> 
    )

}
