
import BannerPrincipal from "../componentes/bannerPrincipal";
import ExibeVideos from "../componentes/exibeVideos";
import FiltrosDePesquisa from "../componentes/filtrosDePesquisa";
import AddVideoSection from "../componentes/addVideoSection";



const Home = () => {

  return (
    <>
      <BannerPrincipal />
      <AddVideoSection />
      <FiltrosDePesquisa />
      <ExibeVideos />
    </>
  )
}

export default Home;
