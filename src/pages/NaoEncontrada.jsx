import styled from "styled-components";

const Section = styled.section`
    height: 60vh;
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 20px;
`

const H1 = styled.h1`
    color: #DA0037;
    font-size: 35px;
`

const P = styled.p`
    color: #EDEDED;
    font-size: 20px;
`

const NaoEncontrada = () => {
    return (
        <Section>
            <H1>Ops....</H1>
            <P>Página ou link não encontrado.</P>
        </Section>
    )
}

export default NaoEncontrada;