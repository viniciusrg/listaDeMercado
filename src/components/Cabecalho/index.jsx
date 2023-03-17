import React from "react";
import Styles from './cabecalho.module.css';

function Cabecalho ({adicionarLista}) {
    return (
        <div className={Styles.cabecalho}>
            <h1>Lista de mercado</h1>
            <button>Adicionar item</button>
            {/* Criar página para adicionar item */}
        </div>
    )
}

export default Cabecalho;