import styled from "styled-components";
import BarraDePesquisa from "../barraDePesquisa";
import Tags from "../tags";
import { useContext } from "react";
import { VideosContext } from "../../context/videosContext";

const Section = styled.section`
    display: flex;
    margin: 20px 50px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`


const FiltrosDePesquisa = () => {
    const { setVideos, listaDeVideos } = useContext(VideosContext)
    return(
        <Section>
            <BarraDePesquisa listaDePesquisa={listaDeVideos} funcaoDePesquisa={setVideos} />
            <Tags />
        </Section>
    )
}

export default FiltrosDePesquisa;