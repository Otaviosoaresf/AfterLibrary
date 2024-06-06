import { createContext, useContext, useState } from "react";
import listaDeVideos from "../mocks/videos.json";

export const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
    const [ videos, setVideos ] = useState(listaDeVideos);
    const [ favoritos, setFavoritos ] = useState([]);


    return(
        <VideosContext.Provider value={
            {
                videos,
                setVideos,
                listaDeVideos,
                favoritos,
                setFavoritos
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