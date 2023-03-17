import React from "react";
import CardCompras from "../CardCompras";
import Styles from './listaDeCompras.module.css';

function ListaDeCompras({lista}) {
    return (
        <div className={Styles.listaDeCompras}>
            {
                lista.map((item) =>{
                    return <CardCompras key={item.id} nome={item.nome} obs={item.obs} />
                })
            }
            
        </div>
    )
}

export default ListaDeCompras;