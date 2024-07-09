import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { VideosContext } from "../context/videosContext";
import Video from "../componentes/video";
import Banner2 from "../assets/banner-2.jpg";
import BarraDePesquisa from "../componentes/barraDePesquisa";

const FavoritoContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const DivTituloPesquisa = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const H1 = styled.h1`
    color: #DA0037;
    width: 100%;
    display: flex;
    padding: 40px;
    justify-content: center;
    font-size: 48px;
`

const Container = styled.section`
    width: 100%;
    height: auto;
    background-image: url(${Banner2});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 170px;
`

const Favorito = () => {
    const { favoritos } = useContext(VideosContext);
    const [ favoritosPesquisa, setFavoritosPesquisa ] = useState(favoritos)

    useEffect(() => {
        setFavoritosPesquisa([...favoritos])
    }, [favoritos])
    
    return (
        <FavoritoContainer>
            <DivTituloPesquisa>
                <H1>Seus sets Favoritos...</H1>
                <BarraDePesquisa listaDePesquisa={favoritos} funcaoDePesquisa={setFavoritosPesquisa} />
            </DivTituloPesquisa>
            <Container>
                {favoritosPesquisa.map(favorito =>
                    <Video key={favorito.id} video={favorito} />
                )}
            </Container>
        </FavoritoContainer>
    )
}

export default Favorito;