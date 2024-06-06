import { useContext } from "react";
import styled from "styled-components";
import { VideosContext } from "../context/videosContext";
import Video from "../componentes/video";

const H1 = styled.h1`
    color: #000000;
`

const Favorito = () => {
    const { favoritos } = useContext(VideosContext);
    return (
        <>
            <H1>Favoritos</H1>
            <section>
                {favoritos.map(favorito => 
                    <Video key={favorito.id} video={favorito} />
                )}
            </section>
        </>
    )
}

export default Favorito;