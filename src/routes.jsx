import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { EstilosGlobais } from "./EstilosGlobais";
import Favorito from "./pages/Favorito";
import PaginaBase from "./pages/PaginaBase";
import Player from "./pages/Player";
import NaoEncontrada from "./pages/NaoEncontrada";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <EstilosGlobais />
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Home />}></Route>
                    <Route path="favorito" element={<Favorito />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NaoEncontrada />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;