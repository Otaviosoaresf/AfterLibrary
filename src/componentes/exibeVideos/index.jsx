import { useContext } from "react";
import styled from "styled-components";
import { VideosContext } from "../../context/videosContext";
import Video from "../video";
import Banner2 from "../../assets/banner-2.jpg"
import MudaPaginaDeVideos from "../mudaPaginaDeVideos";

const ContainerComponente = styled.section`
    width: 100%;
    height: auto;
    background-image: url(${Banner2});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 30px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContainerVideos = styled.div`
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 10px;
    margin-bottom: 60px;
`



const ExibeVideos = () => {
    const { videosSelecionados, videos } = useContext(VideosContext);

    return (
        <ContainerComponente>
            <ContainerVideos>
                {videosSelecionados.map(video => <Video key={video._id} video={video} />)}
            </ContainerVideos>
            <MudaPaginaDeVideos listaDeVideos={videos} />
        </ContainerComponente>
    )
}

export default ExibeVideos;