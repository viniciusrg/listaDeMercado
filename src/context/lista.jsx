import { createContext, useState } from "react"

export const ListaContext = createContext();

export const ListaProvider = ({children}) => {
    const [lista, setLista] = useState([{ id: '1', nome: 'Item 1', obs: 'Observações' }]);

    const adicionarItem = () => {
        const novaLista = [];
        setLista([...lista, novaLista]);
    }
    
    return(
        <ListaContext.Provider value={{lista, adicionarItem}}>
            {children}
        </ListaContext.Provider>
    )
}