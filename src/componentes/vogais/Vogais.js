import React, { Component } from 'react'
import css from './../css.module.css'
import {formatoVogais} from '../funcoes/VogaisTexto.js';

export default class Invertido extends Component {
    render() {
        const {textoVogais} = this.props;

        return (
            <div className={css.quadro}>
                <h6>Apenas Vogais</h6>
                <p>{formatoVogais(textoVogais)}</p>
            </div>
        )
    }
}