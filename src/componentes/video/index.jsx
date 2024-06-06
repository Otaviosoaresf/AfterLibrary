import styled from "styled-components";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useVideoFavoritoContext } from "../../context/videosContext";

const DivContainer = styled.div`
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
`

const Iframe = styled.iframe`
    width: 100%;
    height: 30vh;
`
const H2 = styled.h2`
    margin-bottom: 10px;
    font-size: 25px;
`

const Botao = styled.button`
    background-color: #DA0037;
    border: none;
    text-decoration: none;
    cursor: pointer;
`

const Video = ({ video }) => {
    const { favoritos, adicionaVideoFavorito } = useVideoFavoritoContext();
    const ehFavorito = favoritos.some((favorito) => favorito.id === video.id);
    const icone = !ehFavorito ? 
        <IoHeartOutline size={40}/> : 
        <IoHeartSharp size={40}/>;

    return (
        <DivContainer>
            <Iframe src={video.url} allowFullScreen></Iframe>
            <H2>{video.titulo}</H2>
            <Botao onClick={() => adicionaVideoFavorito(video)}>{icone}</Botao>
        </DivContainer>
    )
}

export default Video;