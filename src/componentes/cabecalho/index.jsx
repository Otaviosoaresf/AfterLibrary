import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiBurningEye } from "react-icons/gi"

const ContainerCabecalho = styled.div`
    display: flex;
    height: 12vh;
    padding: 10px 80px;
    background-color: #DA0037;
    align-items: center;
    justify-content: space-between;
    color: #EDEDED;
`

const DivTitulo = styled.div`
    display: flex;
    gap: 3px;
    align-items: baseline;
`

const DivLinks = styled.nav`
    display: flex;
    gap: 10px;
`


const Cabecalho = () => {
    return (
        <ContainerCabecalho>
            <DivTitulo>
                <h1>AFTER</h1>
                <p>Library</p>
                <GiBurningEye size={30}/>
            </DivTitulo>
            <DivLinks>
                <a>Home</a>
                <Link to="./favorito">Favoritos</Link>
                <a>Player</a>
            </DivLinks>
        </ContainerCabecalho>
    )
}

export default Cabecalho;