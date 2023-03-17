import React from 'react';
import Styles from './cardCompras.module.css';

function CardCompras({id, nome, obs}) {
    return (
        <div className={Styles.cardCompras}>
            <div id='1'>
                <h1>{nome}</h1>
                <p>{obs}</p>
            </div>
            <div id='2'>
                <i>C</i>
                <i>X</i>
            </div>
        </div>
    )
}

export default CardCompras;