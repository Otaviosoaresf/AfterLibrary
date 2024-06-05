import styled from "styled-components";
import Cabecalho from "../componentes/cabecalho";
import BannerPrincipal from "../componentes/bannerPrincipal";
import ExibeVideos from "../componentes/exibeVideos";
import FiltrosDePesquisa from "../componentes/filtrosDePesquisa";
import Rodape from "../componentes/rodade";


const ContainerApp = styled.main`
  width: 100%;
  height: 100vh;
`

const Home = () => {

  return (
    <>
      <ContainerApp>
        <Cabecalho />
        <BannerPrincipal />
        <FiltrosDePesquisa />
        <ExibeVideos />
        <Rodape />
      </ContainerApp >
    </>
  )
}

export default Home;
