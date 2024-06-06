import { Outlet } from "react-router-dom";
import Cabecalho from "../componentes/cabecalho";
import { VideosProvider } from "../context/videosContext";
import Rodape from "../componentes/rodade";
import styled from "styled-components";

const ContainerApp = styled.main`
  width: 100%;
  height: 100vh;
`

const PaginaBase = () => {
    return(
        <ContainerApp>
            <VideosProvider>
                <Cabecalho />
                <Outlet />
                <Rodape />
            </VideosProvider>
        </ContainerApp>
    )
}

export default PaginaBase;