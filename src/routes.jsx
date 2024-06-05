import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { EstilosGlobais } from "./EstilosGlobais";
import Favorito from "./pages/Favorito";
import { VideosProvider } from "./context/videosContext";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <EstilosGlobais />
            <VideosProvider>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/favorito" element={<Favorito />}></Route>
                </Routes>
            </VideosProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;