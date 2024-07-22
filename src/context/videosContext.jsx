import { createContext, useContext, useState } from "react";
import listaDeVideos from "../mocks/videos.json";

export const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
    const [ videos, setVideos ] = useState(listaDeVideos);
    const [ favoritos, setFavoritos ] = useState([]);
    const [ paginaAtual, setPaginaAtual ] = useState(1);

    const videosPorPagina = 6;
    const indexInicial = (paginaAtual - 1) * videosPorPagina;
    const videosSelecionados = videos.slice(indexInicial, indexInicial + videosPorPagina)

    return(
        <VideosContext.Provider value={
            {
                videos,
                setVideos,
                listaDeVideos,
                favoritos,
                setFavoritos,
                paginaAtual,
                setPaginaAtual,
                videosSelecionados,
                indexInicial,
                videosPorPagina,
            }
        }>
            {children}
        </VideosContext.Provider>
    )
}

export const useVideoFavoritoContext = () => {
    const { favoritos, setFavoritos } = useContext(VideosContext)
    
    const adicionaVideoFavorito = (novoVideo) => {
        const videoRepetido = favoritos.some(item => item.id === novoVideo.id);

        let novaListaDeVideos = [...favoritos];

        if(!videoRepetido) {
            novaListaDeVideos.push(novoVideo);
            return setFavoritos(novaListaDeVideos);
        }

        novaListaDeVideos.splice(novaListaDeVideos.indexOf(novoVideo), 1)
        return setFavoritos(novaListaDeVideos)
    }

    return{
        favoritos,
        adicionaVideoFavorito
    }
}