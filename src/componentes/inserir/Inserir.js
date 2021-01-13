import React, { Component } from 'react'
import css from './inserir.module.css'

export default class Inserir extends Component {

    inserirInputChange = (event) =>{ //metodo captura o evento e armazena em argTexto
        const argTexto = event.target.value;
        this.props.onInserirInput(argTexto); //valor é compartilhado por props
    
    }//Função é ativada quando input recebe texto

    render() {
        const {texto} = this.props; //props permite a comunicação dos valores entre os componentes

        return (
            <div className={css.campoTexto}>
                <input placeholder="Digite um texto Qualquer" type="text" value={texto} onChange={this.inserirInputChange}/>
            </div>
        )
    }
}
