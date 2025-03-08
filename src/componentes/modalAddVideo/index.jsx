import { useState } from "react";
import styled from "styled-components";
import api from "../../services/api"; // Importa a API para o POST

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

const ModalContainer = styled.div`
    background: white;
    padding: 20px;
    width: 400px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    text-align: center;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
`;

const Button = styled.button`
    background-color: #DA0037;
    color: white;
    border: none;
    padding: 10px;
    margin-top: 10px;
    width: 100%;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;

    &:hover {
        background-color: #a9022f;
    }
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    float: right;
`;

const Modal = ({ isOpen, onClose, onAddVideo }) => {
    const [titulo, setTitulo] = useState("");
    const [url, setUrl] = useState("");
    const [ano, setAno] = useState("");
    const [categoriaId, setCategoriaId] = useState(""); // Relacionar com categorias

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const novoVideo = { titulo, url, ano, categoriaId };

        try {
            const response = await api.post("/videos", novoVideo);
            console.log("Vídeo criado:", response.data);
            onAddVideo(response.data); // Atualiza a lista de vídeos
            onClose(); // Fecha o modal
        } catch (error) {
            console.error("Erro ao criar vídeo:", error);
        }
    };

    return (
        <Overlay>
            <ModalContainer>
                <CloseButton onClick={onClose}>✖</CloseButton>
                <h2>Adicionar Novo Vídeo</h2>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Título"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="URL do Vídeo"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Ano"
                        value={ano}
                        onChange={(e) => setAno(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="ID da Categoria"
                        value={categoriaId}
                        onChange={(e) => setCategoriaId(e.target.value)}
                        required
                    />
                    <Button type="submit">Adicionar</Button>
                </form>
            </ModalContainer>
        </Overlay>
    );
};

export default Modal;
