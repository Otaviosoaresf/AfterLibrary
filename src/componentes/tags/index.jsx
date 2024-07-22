import styled from 'styled-components';
import listaTags from '../../mocks/tags.json';
import { useContext } from 'react';
import { VideosContext } from '../../context/videosContext';

const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`
const TagsTitulo = styled.h3`
    font-size: 20px;
    color: #EDEDED;
    padding: 5px;
    border: solid 1px #444444;
    border-radius: 10px;
`

const DivTags = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
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
`

const Tags = () => {
    const { setVideos, listaDeVideos, setPaginaAtual } = useContext(VideosContext)

    const FiltrarPorTag = (id) => {
        setPaginaAtual(1)
        setVideos(id === 0 ? listaDeVideos :
         listaDeVideos.filter(video => 
            video.categoriaId === id
        ))
    }

    return(
        <TagsContainer>
            <TagsTitulo>Categorias</TagsTitulo>
            <DivTags>
                {listaTags.map(tag => 
                    <Tag 
                        key={tag.id}
                        onClick={() => FiltrarPorTag(tag.id)}
                    >
                        {tag.titulo}
                    </Tag>
                )}
            </DivTags>
        </TagsContainer>
    )
}

export default Tags;