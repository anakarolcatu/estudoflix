import { useParams } from "react-router-dom"
import { useVideosContext } from "../../context/Videos/Videos";
import styled from "styled-components"
import NaoEncontrada from '../NaoEncontrada';


const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 100%;
    margin: 100px auto 120px;
    min-height: 500px;
    >iframe{
        width: 90%;
        max-width: 816px;
        min-height: 320px;
        flex: 1;
    }
    @media screen and (min-width: 1024px){
        margin-top: 25px;
        margin-bottom: 0;
        padding: 50px;
        height: calc(100vh - 250px);
    }
    `
const Titulo = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 900;
    border-bottom: 3px solid #393939;
`


const Player = () => {
    const parameters = useParams()
    const videos = useVideosContext().videos
    const videoToShow = videos.find((video) => Number(video.id) === Number(parameters.id))

    if(!videoToShow) {
        return <NaoEncontrada />
    }

    return (
        <StyledSection>
            <Titulo>{videoToShow.titulo}</Titulo>
            <iframe
                src={videoToShow.url} 
                title={videoToShow.titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            ></iframe>
        </StyledSection>
    )
}

export default Player;