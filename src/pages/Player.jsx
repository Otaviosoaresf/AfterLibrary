import styled from "styled-components";
import bannerPlayer from '../assets/banner-3.jpg';
import { useContext } from "react";
import { VideosContext } from "../context/videosContext";
import { useParams } from "react-router-dom";
import NaoEncontrada from "./NaoEncontrada";
import TamanhosDeTela from '../breakpoints';

const SectionPlayer = styled.section`
    width: 100%;
    height: 100vh;
    background-image: url(${bannerPlayer});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 50px 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    @media (max-width: ${TamanhosDeTela.notebook}) {
        padding: 70px 5px;     
    }
`
const IframePlayer = styled.iframe`
    width: 100%;
    height: 80vh;
    border: none;
    border-radius: 10px;

    @media (max-width: ${TamanhosDeTela.mobile}) {
        height: 50vh;
    }

    @media (min-width: ${TamanhosDeTela.mobile}) and (max-width: ${TamanhosDeTela.tablet}) {
        height: 70vh;
    }

    @media (min-width: ${TamanhosDeTela.tablet}) and (max-width: ${TamanhosDeTela.notebook}) {
        height: 85vh;
    }
`

const Player = () => {
    const { videos } = useContext(VideosContext);
    const parametros = useParams();
    const videoPlayer = videos.find(video => video.id === Number(parametros.id));

    if(!videoPlayer) {
        return <NaoEncontrada />
    }
    
    return (
        <>
            <SectionPlayer>
                <IframePlayer src={videoPlayer.url} allowFullScreen></IframePlayer>
            </SectionPlayer>
        </>
    )
}

export default Player;