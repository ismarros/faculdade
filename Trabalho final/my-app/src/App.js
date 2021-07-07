import React, { Component } from "react";
import api from "./services/api";
import axios from "axios";
import Listar from './components/listar.jsx'
import './components/index.css'

class App extends Component{

  state = {
    pokemons: [],
    nomepokemon: '',
    codtipo: 1,
  }


  async componentDidMount(){
    var response = await api.get('pokemons');
    this.setState({ pokemons: response.data });
    console.log(response.data);
  }


  handleChange = event => {
    this.setState({ nomepokemon: event.target.value });

    console.log("ESSE É O TEXTO",this.state.nomepokemon)
  }

  handleMuda = event => {
    this.setState({ codtipo: event.target.value });
    console.log("ESSE É O COD",this.state.codtipo)
  }

  handleSubmit = event => {

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
    event.preventDefault();
    this.componentDidMount();
  } 

  render(){
    const { pokemons } = this.state;
    return(
    <>
      <Listar pokemons = {pokemons}></Listar>
      <h1>Inserir novo Pokémon</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label for="nome">Nome:</label>
                        <input type="text" value={this.value}  onChange={this.handleChange} />
                        <br></br>
                        <label for="tipo">Tipo:</label>
                        <select id="tipo" value={this.value}  onChange={this.handleMuda}>
                            <option value="1">Planta</option>
                            <option value="2">Fogo</option>
                            <option value="3">Água</option>
                            <option value="4">Inseto</option>
                            <option value="5">Normal</option>
                            <option value="6">Venenoso</option>
                            <option value="7">Elétrico</option>
                            <option value="8">Terra</option>
                            <option value="9">Lutador</option>
                            <option value="10">Psiquico</option>
                            <option value="11">Pedra</option>
                            <option value="12">Voador</option>
                            <option value="13">Fantasma</option>
                            <option value="14">Gelo</option>
                            <option value="15">Dragão</option>
                            <option value="16">Metálico</option>
                            <option value="17">Noturno</option>
                            <option value="18">Fada</option>
                        </select>
                    </div>
                    <div class="button">
                        <button type="submit">Salvar Pokemon</button>
                    </div>
                </form> 
    </>
    )
  }
}
export default App;