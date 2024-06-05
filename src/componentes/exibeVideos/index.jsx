import { useContext } from "react";
import styled from "styled-components";
import { VideosContext } from "../../context/videosContext";
import Video from "../video";
import Banner2 from "../../assets/banner-2.jpg"

const Container = styled.section`
    width: 100%;
    height: auto;
    background-image: url(${Banner2});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 170px;
`

const ExibeVideos = () => {
    const { videos } = useContext(VideosContext);

    return (
        <Container>
            {videos.map(video => <Video key={video.id} video={video} />)}
        </Container>
    )
}

export default ExibeVideos;