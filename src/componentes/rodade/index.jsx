import { GiBurningEye } from "react-icons/gi"
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5"
import styled from "styled-components";

const Section = styled.section`
    background-color: #DA0037;
    width: 100%;
    height: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    color: #EDEDED;
`

const DivLogo = styled.div`
    display: flex;
    gap: 3px;
    align-items: baseline;
`

const H3 = styled.h3`
    font-size: 20px;
    font-weight: 700;
`

const DivLinks = styled.div`
    display: flex;
    gap: 50px;
`

const ALink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: inherit;

    :hover {
        color: black;
    }
`

const Rodape = () => {
    return (
        <Section>
            <DivLogo>
                <h1>AFTER</h1>
                <p>Library</p>
                <GiBurningEye size={30}/>
            </DivLogo>

            <H3>Desenvolvido Por Otávio Soares</H3>

            <DivLinks>
                <ALink href="https://www.linkedin.com/in/otavio-soares-felicio/">
                    <IoLogoLinkedin size={50}/>
                </ALink>
                <ALink href="https://github.com/Otaviosoaresf" >
                    <IoLogoGithub size={50} />
                </ALink>
            </DivLinks>
            
        </Section>
    )
}

export default Rodape;