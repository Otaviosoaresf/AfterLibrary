import styled from 'styled-components';
import { useContext, useState, useEffect } from 'react';
import { VideosContext } from '../../context/videosContext';
import TamanhosDeTela from '../../breakpoints';

const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;

    @media (max-width: ${TamanhosDeTela.monitor}) {
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
`
const TagsTitulo = styled.h3`
    font-size: 20px;
    color: #EDEDED;
    padding: 5px;

    @media (max-width: ${TamanhosDeTela.mobile}) {
        font-size: 20px;
    }
`

const DivTags = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
`

const Tag = styled.button`
    font-size: 20px;
    background-color: #444444;
    color: #EDEDED;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    box-sizing: border-box;
    border: solid 1px #444444;
    flex-wrap: wrap;
    width: 115px;
    height: 55px;
    

    @media (max-width: ${TamanhosDeTela.mobile}) {
        font-size: 14px;
        width: 90px;
        height: 45px;
    }
`

const Tags = () => {
    const { setVideos, videos, setPaginaAtual, categorias } = useContext(VideosContext)
    const [ todosOsVideos, setTodosOsVideos ] = useState([])

    useEffect(() => {
        if (videos.length > 0 && todosOsVideos.length === 0) {
            setTodosOsVideos(videos);
        }
    }, [videos])

    const FiltrarPorTag = (tituloCategoria) => {
        console.log(tituloCategoria)
        setPaginaAtual(1)
        setVideos(tituloCategoria === "Todas" ? todosOsVideos :
         todosOsVideos.filter(video => 
            video.categoriaId.titulo === tituloCategoria
        ))
    }

    return(
        <TagsContainer>
            <TagsTitulo>Categorias</TagsTitulo>
            <DivTags>
                {categorias.map(tag => 
                    <Tag 
                        key={tag.id}
                        onClick={() => FiltrarPorTag(tag.titulo)}
                    >
                        {tag.titulo}
                    </Tag>
                )}
            </DivTags>
        </TagsContainer>
    )
}

export default Tags;