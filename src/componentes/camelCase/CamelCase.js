import React, { Component } from 'react'
import css from './../css.module.css'
import {formatoCamel} from '../funcoes/CamelTexto.js';

export default class Invertido extends Component {
    render() {
        const {textoCamel} = this.props;

        return (
            <div className={css.quadro}>
                <h6>Váriável</h6>
                <p>{formatoCamel(textoCamel)}</p>
            </div>
        )
    }
}