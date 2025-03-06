import styled from "styled-components";
import BarraDePesquisa from "../barraDePesquisa";
import Tags from "../tags";
import { useContext } from "react";
import { VideosContext } from "../../context/videosContext";
import TamanhosDeTela from "../../breakpoints";

const Section = styled.section`
    display: flex;
    margin: 20px 50px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: ${TamanhosDeTela.monitor}) {
        flex-direction: column-reverse;
        justify-content: center;
        gap: 30px;
    }
`


const FiltrosDePesquisa = () => {
    const { setVideos, videos } = useContext(VideosContext)
    return(
        <Section>
            <BarraDePesquisa listaDePesquisa={videos} funcaoDePesquisa={setVideos} />
            <Tags />
        </Section>
    )
}

export default FiltrosDePesquisa;