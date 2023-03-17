import React, { useContext } from "react";
import Cabecalho from "../../components/Cabecalho";
import Container from "../../components/Container";
import ListaDeCompras from "../../components/ListaDeCompras";
import { ListaContext } from "../../context/lista";

function Home () {

    const {lista, adicionarLista} = useContext(ListaContext);


    return(
        <Container>
            <Cabecalho adicionarLista={adicionarLista} />
            <ListaDeCompras lista={lista}/>
        </Container>
    )
}

export default Home;