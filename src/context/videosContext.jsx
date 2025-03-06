import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

export const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    const [todosOsVideos, setTodosOsVideos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [favoritos, setFavoritos] = useState([]);
    const [paginaAtual, setPaginaAtual] = useState(1);

    const videosPorPagina = 6;
    const indexInicial = (paginaAtual - 1) * videosPorPagina;
    const videosSelecionados = videos.slice(indexInicial, indexInicial + videosPorPagina);

    const fetchVideos = async () => {
        try {
            const response = await api.get("/videos");
            setVideos(response.data);
            setTodosOsVideos(response.data);
        } catch (error) {
            console.error("Erro ao buscar vídeos:", error);
        }
    };

    const fetchCategorias = async () => {
        try {
            const response = await api.get("/categorias");
            setCategorias(response.data);
        } catch (error) {
            console.error("Erro ao buscar categorias:", error);
        }
    };

    useEffect(() => {
        fetchVideos();
        fetchCategorias();
    }, []);

    const adicionarOuRemoverFavorito = (video) => {
        setFavoritos((favoritosAnteriores) => {
            const jaEstaNosFavoritos = favoritosAnteriores.some(fav => fav._id === video._id);
            return jaEstaNosFavoritos
                ? favoritosAnteriores.filter(fav => fav._id !== video._id)
                : [...favoritosAnteriores, video];
        });
    };

    return (
        <VideosContext.Provider
            value={{
                videos,
                setVideos,
                todosOsVideos,
                categorias,
                favoritos,
                setFavoritos,
                paginaAtual,
                setPaginaAtual,
                videosSelecionados,
                indexInicial,
                videosPorPagina,
                adicionarOuRemoverFavorito, // 🔥 Função corrigida agora disponível no contexto
            }}
        >
            {children}
        </VideosContext.Provider>
    );
};