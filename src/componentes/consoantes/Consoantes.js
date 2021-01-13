import React, { Component } from 'react'
import css from './../css.module.css'
import {formatoConsoantes} from '../funcoes/ConsoantesTexto.js';

export default class Invertido extends Component {
    render() {
        const {textoConsoantes} = this.props;

        return (
            <div className={css.quadro}>
                <h6>Apenas Consoantes</h6>
                <p>{formatoConsoantes(textoConsoantes)}</p>
            </div>
        )
    }
}