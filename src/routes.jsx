import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { EstilosGlobais } from "./EstilosGlobais";
import Favorito from "./pages/Favorito";
import PaginaBase from "./pages/PaginaBase";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <EstilosGlobais />
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/favorito" element={<Favorito />}></Route>

                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;