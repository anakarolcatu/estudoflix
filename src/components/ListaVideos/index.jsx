import styled from "styled-components";
import Card from '../Card';
import BotaoCategoria from '../BotaoCategoria';

const VideoContainer = styled.div`
        width: 100%;
        display: flex;
        margin-bottom: 60px;
        gap: 30px;
        overflow-x: auto;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: #2271D1 hsl(213, 72%, 17%);
        &::-webkit-scrollbar{
            height: 10px;
            background-color: #2271d12b;
            border: 5px;
            border-radius: 20px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #2271D1;
            border-radius: 20px;
        }
    `
const ListaVideos = ({ categorias, videos }) => {
    
    return (
        (videos.length > 0) && <>
            <BotaoCategoria cor={categorias.cor}>
                {categorias.nome}
            </BotaoCategoria>
            <VideoContainer>
                {videos.map((video) => <Card key={video.titulo} cor={categorias.cor} video={video} />)}
            </VideoContainer>
        </>
    )
}

export default ListaVideos;