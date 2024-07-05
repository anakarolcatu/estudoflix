import styled from "styled-components";
import { useVideosContext } from "../../context/Videos/Videos";
import ListaVideos from "../ListaVideos";
import { useEffect } from "react";

const VideosContainer = styled.main`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    margin: 40px 0;
    padding: 0 10px;
`

const ContainerVideos = () => {
    const { categorias, videos } = useVideosContext();

    useEffect(() => {
        console.log("ContainerVideos mounted");
    }, []);

    if (videos.length === 0 || categorias.length === 0) {
        return <div>Carregando...</div>;
    }

    return ( 
        <VideosContainer>
            {categorias.map((categoria) => (
                <ListaVideos
                    key={categoria.nome}
                    categorias={categoria}
                    videos={videos.filter((video) => video.categoria === categoria.nome)}
                />
            ))}
        </VideosContainer>
    )
}

export default ContainerVideos;