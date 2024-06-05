import styled from "styled-components";

const DivContainer = styled.div`
    background-color: #DA0037;
    width: 30%;
    height: auto;
    padding: 15px;
    color: #EDEDED;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
`

const Iframe = styled.iframe`
    width: 100%;
    height: 30vh;
`



const Video = ({ video }) => {
    return(
        <DivContainer>
            <Iframe src={video.url} allowFullScreen></Iframe>
            <div>
                <h2>{video.titulo}</h2>
                <p>Ano: {video.ano}</p>
            </div>
        </DivContainer>
    )
}

export default Video;