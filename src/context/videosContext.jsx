import { createContext, useState } from "react";
import listaDeVideos from "../mocks/videos.json";

export const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
    const [ videos, setVideos ] = useState(listaDeVideos);

    
    return(
        <VideosContext.Provider value={
            {
                videos,
                setVideos,
                listaDeVideos
            }
        }>
            {children}
        </VideosContext.Provider>
    )
}