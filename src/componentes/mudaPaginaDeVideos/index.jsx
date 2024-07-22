import { useContext } from "react"
import { VideosContext } from "../../context/videosContext"
import styled from "styled-components"
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const ContainerPaginas = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`

const PaginaNumero = styled.p`
    color: #EDEDED;
    font-size: 30px;
    font-weight: bold;
`

const BotaoMudaPagina = styled.button`
    border-radius: 25px;
    border: none;
    background-color: black;
    color: #DA0037;
    cursor: pointer;

    &:hover {
        color: #EDEDED;
    }
`

const MudaPaginaDeVideos = ({listaDeVideos}) => {
    const {
        paginaAtual,
        setPaginaAtual,
        videosPorPagina
    } = useContext(VideosContext)

    const totalDePaginas = Math.ceil(listaDeVideos.length / videosPorPagina);

    const mudaPagina = (pagina) => {
        setPaginaAtual(pagina)
    }

    return (
        <ContainerPaginas>
            <BotaoMudaPagina onClick={() => mudaPagina(
                paginaAtual === 1 ? paginaAtual : (paginaAtual - 1)
            )}>
                <BsArrowLeftCircle size={45}/>
            </BotaoMudaPagina>
            <PaginaNumero>{paginaAtual}</PaginaNumero>
            <BotaoMudaPagina onClick={() => mudaPagina(
                paginaAtual >= totalDePaginas ? paginaAtual : (paginaAtual + 1)
            )}>
                <BsArrowRightCircle size={45}/>
            </BotaoMudaPagina>
        </ContainerPaginas>
    )
}

export default MudaPaginaDeVideos;