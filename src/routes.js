import Home from "./pages/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaProvider } from "./context/lista";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListaProvider><Home /></ListaProvider>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;