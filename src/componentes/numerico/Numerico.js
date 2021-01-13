import React, { Component } from 'react'
import css from './../css.module.css'
import {formatoNumerico} from '../funcoes/NumerarTexto.js';

export default class Invertido extends Component {
    render() {
        const {textoNumerico} = this.props;

        return (
            <div className={css.quadro}>
                <h6>Texto Numérico</h6>
                <p>{formatoNumerico(textoNumerico)}</p>
            </div>
        )
    }
}