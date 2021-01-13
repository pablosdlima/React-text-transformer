import React, { Component } from 'react'
import css from './../css.module.css'
import {formatoSlug} from '../funcoes/SlugTexto.js';

export default class Invertido extends Component {
    render() {
        const {textoSlug} = this.props;

        return (
            <div className={css.quadro}>
                <h6>Texto SLUG (-)</h6>
                <p>{formatoSlug(textoSlug)}</p>
            </div>
        )
    }
}