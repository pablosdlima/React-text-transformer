import React, { Component } from 'react'
import css from './../css.module.css'
import {inverterTexto} from '../funcoes/InverterTexto.js';

export default class Invertido extends Component {
    render() {
        const {textoInvertido} = this.props;
        return (
            <div className={css.quadro}>
                <h6>Texto Invertido</h6>
                <p>{inverterTexto(textoInvertido)}</p>
            </div>
        )
    }
}
