import { useContext } from "react";
import BannerPrincipal from "../componentes/bannerPrincipal";
import ExibeVideos from "../componentes/exibeVideos";
import FiltrosDePesquisa from "../componentes/filtrosDePesquisa";
import { VideosContext } from "../context/videosContext";




const Home = () => {

  return (
    <>
      <BannerPrincipal />
      <FiltrosDePesquisa />
      <ExibeVideos />
    </>
  )
}

export default Home;
