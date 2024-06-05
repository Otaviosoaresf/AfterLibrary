import styled from "styled-components";
import BarraDePesquisa from "../barraDePesquisa";
import Tags from "../tags";

const Section = styled.section`
    display: flex;
    margin: 20px 50px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`


const FiltrosDePesquisa = () => {
    return(
        <Section>
            <BarraDePesquisa />
            <Tags />
        </Section>
    )
}

export default FiltrosDePesquisa;