import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useVideosContext } from '../../context/Videos/Videos';
import Titulo from '../Titulo';
import BotaoCategoria from '../BotaoCategoria';
import { useEffect, useState } from 'react';

const BannerVazio = styled.div`
    height: 500px;
    width: 100%;
    background-color: #262626;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const BannerVazioP = styled.p`
    font-size: 1.25rem;
`
const BannerEstilizado = styled.div`
    display: none;
    @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        gap: 24px;
        height: 550px;
        width: 100%;
        padding: 0 40px;
        position: relative; /* Para o pseudo-elemento */
        border-bottom: 3px solid ${(props) => props.$cor};
        background: linear-gradient(#0012338F, #0012338F), url(${props => props.backgroundImage});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        
        div {
            display: flex;
            flex-direction: column;
            width: 100%;
            z-index: 1; /* Para garantir que o conteúdo esteja acima da imagem de fundo */
        }
        p {
            font-size: 1.125rem;
            font-weight: 300;
            color: #f5f5f5;
            text-align: center;
        }
        h3 {
            font-size: 3rem;
            margin: 20px 0;
        }
        img {
            width: 100%;
            max-width: 300px;
            align-self: center;
        }
    }
`

const Banner = () => {
    const { videos, extractVideoId } = useVideosContext();
    const [ currentIndex, setCurrentIndex] = useState(0);
    const { categorias } = useVideosContext();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }, 10000);
        return () => clearInterval(interval);
    }, [videos.length]);

    if (videos.length === 0) {
        return (
            <BannerVazio>
                <Titulo>NENHUM VÍDEO CADASTRADO!</Titulo>
                <BannerVazioP>CADASTRE VÍDEOS NO FORMULÁRIO!</BannerVazioP>
            </BannerVazio>
        )
    }

    const currentVideo = videos[currentIndex];
    const videoId = extractVideoId(currentVideo.url);
    console.log(videoId);
    const videoCategoria = categorias.filter((categoria => categoria.nome === currentVideo.categoria));
    const corCategoria = videoCategoria[0].cor;
    const thumbUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    
    
    return (
        <Link to={`/${currentVideo.id}`}>
            <BannerEstilizado backgroundImage={thumbUrl} $cor={corCategoria}>
                <div>
                    <BotaoCategoria cor={corCategoria}>{currentVideo.categoria}</BotaoCategoria>
                    <h3>{currentVideo.nome}</h3>
                    <p>{currentVideo.descricao}</p>
                </div>
                <div>
                    <img src={thumbUrl} alt={currentVideo.nome} />
                </div>
            </BannerEstilizado>
        </Link>
    )
}

export default Banner;
