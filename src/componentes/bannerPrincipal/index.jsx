import styled, { keyframes } from "styled-components"
import bannerHome from "../../assets/banner.jpg";
import imagemAdesiva from "../../assets/imgAdesivo.png";
import TamanhosDeTela from '../../breakpoints';


const SectionBanner = styled.section`
  width: 100%;
  height: 90vh;
  background-image: url(${bannerHome});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex-wrap: wrap;
  padding: 50px 120px;
  display: flex;
  justify-content: right;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: ${TamanhosDeTela.mobile}) {
    justify-content: center;
    padding: 20px 80px;
    height: 60vh;
  }

  @media (min-width: ${TamanhosDeTela.mobile}) and (max-width: ${TamanhosDeTela.notebook}) {
    justify-content: center;
    padding: 35px 100px;
    height: 70vh;
  }
`

const animacao = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const DivConteudoBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${animacao} 3s ease-in-out;
`
const DivParagrafoTitulo = styled.div`
  border: solid 1px #DA0037;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 430px;
  flex-wrap: wrap;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 20px;

  @media (max-width: ${TamanhosDeTela.mobile}) {
    max-width: 365px;
    padding: 10px;
  }
`

const H1Banner = styled.h1`
  color: #DA0037;
  margin-bottom: 20px;
  font-size: 30px;

  @media (max-width: ${TamanhosDeTela.mobile}) {
    font-size: 20px;
  }
`

const ParagrafoBanner = styled.p`
  color: #EDEDED;

  @media (max-width: ${TamanhosDeTela.mobile}) {
    font-size: 14px;
  }
`

const ImgAdesiva = styled.img`
  width: 325px;
  height: 375px;

  @media (max-width: ${TamanhosDeTela.mobile}) {
    width: 210px;
    height: 260px;
  }

  @media (min-width: ${TamanhosDeTela.mobile}) and (max-width: ${TamanhosDeTela.tablet}) {
    width: 245px;
    height: 295px
  }

  @media (min-width: ${TamanhosDeTela.tablet}) and (max-width: ${TamanhosDeTela.monitor}) {
    width: 275px;
    height: 325px
  }
`


const BannerPrincipal = () => {
    return(
        <SectionBanner>
          <DivConteudoBanner>
            <DivParagrafoTitulo>
              <H1Banner>Crie sua playlist...</H1Banner>
              <ParagrafoBanner>
                Selecione os seus djs e estilos favoritos,
                para escutar sempre que precisar
              </ParagrafoBanner>
            </DivParagrafoTitulo>
            <ImgAdesiva src={imagemAdesiva} />
          </DivConteudoBanner>
        </SectionBanner>
    )
}

export default BannerPrincipal;