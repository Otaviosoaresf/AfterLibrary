import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiBurningEye } from "react-icons/gi"
import TamanhosDeTela from "../../breakpoints";

const Icone = styled(GiBurningEye)`
    width: 30px;
    height: 30px;

    @media (max-width: ${TamanhosDeTela.mobile}) {
        width: 20px;
        height: 20px;
    }

    @media (min-width: ${TamanhosDeTela.mobile}) and (max-width: ${TamanhosDeTela.tablet}) {
        width: 25px;
        height: 25px;
    }
`

const ContainerCabecalho = styled.div`
    display: flex;
    height: 12vh;
    padding: 10px 80px;
    background-color: #DA0037;
    align-items: center;
    justify-content: space-between;
    color: #EDEDED;
    max-width: 100%;

    @media (max-width: ${TamanhosDeTela.mobile}) {
        justify-content: center;
        padding: 10px;
        height: 9vh;
        gap: 30px;
    }

    @media (min-width: ${TamanhosDeTela.mobile}) and (max-width: ${TamanhosDeTela.tablet}) {
        padding: 10px 30px;
        height: 10vh;
    }
`

const DivTitulo = styled.div`
    display: flex;
    gap: 3px;
    align-items: baseline;
`

const TituloCabecalho = styled.h1`
    font-size: 32px;

    @media (max-width: ${TamanhosDeTela.mobile}) {
        font-size: 22px;
    }

    @media (min-width: ${TamanhosDeTela.mobile}) and (max-width: ${TamanhosDeTela.tablet}) {
        font-size: 27px;
    }
`

const PCabecalho = styled.p`
    font-size: 16px;

    @media (max-width: ${TamanhosDeTela.mobile}) {
        font-size: 11px;
    }

    @media (min-width: ${TamanhosDeTela.mobile}) and (max-width: ${TamanhosDeTela.tablet}) {
        font-size: 13px;
    }
`

const DivLinks = styled.nav`
    display: flex;
    gap: 10px;
`
const LinkCustomizado = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:hover {
        color: black;
    }

    @media (max-width: ${TamanhosDeTela.mobile}) {
        font-size: 13px;
    }
`

const Cabecalho = () => {
    return (
        <ContainerCabecalho>
            <DivTitulo>
                <TituloCabecalho>AFTER</TituloCabecalho>
                <PCabecalho>Library</PCabecalho>
                <Icone />
            </DivTitulo>
            <DivLinks>
                <LinkCustomizado to="/">Home</LinkCustomizado>
                <LinkCustomizado to="favorito">Favoritos</LinkCustomizado>
            </DivLinks>
        </ContainerCabecalho>
    )
}

export default Cabecalho;