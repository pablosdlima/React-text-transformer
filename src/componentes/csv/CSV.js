import React, { Component } from 'react'
import css from './../css.module.css'
import {formatoCsv} from '../funcoes/CsvTexto.js';

export default class Invertido extends Component {
    render() {
        const {textoCSV} = this.props;

        return (
            <div className={css.quadro}>
                <h6>Texto CSV (com aspas)</h6>
                <p>{formatoCsv(textoCSV)}</p>
            </div>
        )
    }
}