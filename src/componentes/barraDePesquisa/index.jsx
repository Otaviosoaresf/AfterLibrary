import { useContext, useEffect, useState } from "react";
import { VideosContext } from "../../context/videosContext";
import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";

const ContainerBarra = styled.div`
    display: flex;
    align-items: center;
`

const InputBarraDePesquisa = styled.input`
    padding: 10px;
    margin: 20px 0;
    border: 1px solid #DA0037;
    border-radius: 10px 0 0 10px;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    
    &:focus {
        border-color: #007BFF;
        outline: none;
    }
`
const Botao = styled.button`
    padding: 9px 20px;
    border: 1px solid #DA0037;
    border-left: none;
    border-radius: 0 10px 10px 0;
    background-color: #DA0037;
    color: #EDEDED;
    cursor: pointer;
    font-size: 16px;
`

const BarraDePesquisa = ({ listaDePesquisa, funcaoDePesquisa}) => {
    const [ videoBuscado, setVideoBuscado ] = useState('');
    const { setPaginaAtual } = useContext(VideosContext)

        useEffect(() => {
            funcaoDePesquisa(listaDePesquisa.filter(video => 
                video.titulo.toLowerCase().includes(videoBuscado.toLowerCase())
            ))
        }, [videoBuscado])
    
    return (
        <ContainerBarra>
            <InputBarraDePesquisa
                type="text"
                placeholder="Procurar sets..."
                value={videoBuscado}
                onChange={(evento) => {
                    setPaginaAtual(1)
                    setVideoBuscado(evento.target.value)
                }}
            />
            <Botao>
                <IoSearchSharp />
            </Botao>
        </ContainerBarra>
    )
}

export default BarraDePesquisa;