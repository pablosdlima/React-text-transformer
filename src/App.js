import React, { Component } from 'react'
import Inserir from './componentes/inserir/Inserir';
import Invertido from './componentes/invertido/Invertido';
import Numerico from './componentes/numerico/Numerico';
import CSV from './componentes/csv/CSV';
import Slug from './componentes/slug/Slug';
import Vogais from './componentes/vogais/Vogais';
import Consoantes from './componentes/consoantes/Consoantes';
import CamelCase from './componentes/camelCase/CamelCase';
export default class App extends Component {

  constructor(){
    super();

    this.state = {
      texto: '',
    }; //inicia ao subir aplicação.

  }

  inseriuInputChange = (argTexto) =>{
    this.setState({
      texto: argTexto,
    });
  }

  render() {

    const {texto} = this.state; //permite o uso do valor sem precisar declara-lo novamente

    return (
      <div>
        <h3 style={{textAlign: 'center'}}>React-text-transformer</h3>
        <Inserir 
          texto={texto}
          onInserirInput={this.inseriuInputChange} //metodos possuem ligação entre os componentes
        />
        <h4 style={{textAlign: 'center'}}>Transformações</h4>
        <Invertido 
          textoInvertido={texto}
        />
        <Numerico 
          textoNumerico={texto}
        />
        <CSV 
          textoCSV ={texto}
        />
        <Slug 
          textoSlug = {texto}
        />
        <Vogais
          textoVogais = {texto}
        />
        <Consoantes
          textoConsoantes = {texto}
        />
        <CamelCase
          textoCamel = {texto}
        />
      </div>
    )
  }
}
