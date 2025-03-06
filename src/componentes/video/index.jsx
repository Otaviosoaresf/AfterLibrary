import styled, { keyframes } from "styled-components";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useContext } from "react";
import { VideosContext } from "../../context/videosContext";
import { Link } from "react-router-dom";
import TamanhosDeTela from "../../breakpoints";

const animacao = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const DivContainer = styled.div`
    animation: ${animacao} 0.5s ease-out;
    background-color: #DA0037;
    width: 30%;
    height: auto;
    padding: 15px;
    color: #EDEDED;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${TamanhosDeTela.mobile}) {
        width: 80%;
    }

    @media (min-width: ${TamanhosDeTela.mobile}) and (max-width: ${TamanhosDeTela.tablet}) {
        width: 65%;
    }

    @media (min-width: ${TamanhosDeTela.tablet}) and (max-width: ${TamanhosDeTela.notebook}) {
        width: 45%;
    }
`;

const Iframe = styled.iframe`
    width: 100%;
    height: 30vh;

    @media (max-width: ${TamanhosDeTela.mobile}) {
        height: 15vh;
    }

    @media (min-width: ${TamanhosDeTela.mobile}) and (max-width: ${TamanhosDeTela.tablet}) {
        height: 20vh;
    }
`;

const H2 = styled.h2`
    margin-bottom: 10px;
    font-size: 25px;
    &:hover {
        color: black;
    }

    @media (max-width: ${TamanhosDeTela.mobile}) {
        font-size: 18px;
    }

    @media (min-width: ${TamanhosDeTela.mobile}) and (max-width: ${TamanhosDeTela.tablet}) {
        font-size: 21px;
    }

    @media (min-width: ${TamanhosDeTela.tablet}) and (max-width: ${TamanhosDeTela.notebook}) {
        font-size: 23px;
    }
`;

const Botao = styled.button`
    background-color: #DA0037;
    border: none;
    text-decoration: none;
    cursor: pointer;
`;

const Video = ({ video }) => {
    const { favoritos, adicionarOuRemoverFavorito } = useContext(VideosContext);
    
    const ehFavorito = favoritos.some(fav => fav._id === video._id); // 🔥 Corrigido para usar _id
    const icone = ehFavorito ? <IoHeartSharp size={40} color="black" /> : <IoHeartOutline size={40} color="gray" />;

    return (
        <DivContainer>
            <Link 
                to={`/${video._id}`} 
                style={{ textDecoration: 'none', color: 'inherit'}}
            >
                <Iframe src={video.url} allowFullScreen></Iframe>
                <H2>{video.titulo}</H2>
            </Link>
            <Botao onClick={() => adicionarOuRemoverFavorito(video)}>{icone}</Botao>
        </DivContainer>
    );
};

export default Video;
