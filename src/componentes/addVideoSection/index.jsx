import { useState, useContext } from "react";
import { VideosContext } from "../../context/videosContext";
import Modal from "../modalAddVideo";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align items: center;
`

const ButtonAddVideo = styled.button`
    background-color: #DA0037;
    color: white;
    padding: 10px 20px;
    border: none;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 20px;

    &:hover {
        background-color: #a9022f;
    }
`;

const AddVideoSection = () => {
    const { setVideos, videos } = useContext(VideosContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddVideo = (novoVideo) => {
        setVideos([...videos, novoVideo]); // Atualiza a lista de vídeos
    };

    return (
        <Container>
            <ButtonAddVideo onClick={() => setIsModalOpen(true)}>
                + Adicionar Novo Vídeo
            </ButtonAddVideo>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddVideo={handleAddVideo}
            />
        </Container>
    );
};

export default AddVideoSection;
