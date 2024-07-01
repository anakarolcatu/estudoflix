import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useVideosContext } from '../../context/Videos';
import Titulo from '../Titulo';
import BotaoCategoria from '../ListaVideos';

const BannerVazio = styled.div`
    height: 648px;
    width: 100%;
    background-color: var(--cinza);
`
const BannerEstilizado = styled.div`
    display: none;
    @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        border: 4px solid rgba(107, 209, 255, 1);
        gap: 24px;
        height: 550px;
        width: 100%;
        margin: 20px 0;
        padding: 0 40px;
        background: linear-gradient(#0012338F, #0012338F), url(${(props) => props.$cover});
        background-position: center;
        background-repeat: no-repeat;
        background-position: center;
        div {
            display: flex;
            flex-direction: column;
            width: 100%;
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
    const videos = useVideosContext().videos;
    const categorias = useVideosContext().categorias;

    if (videos.length === 0 || categorias.length === 0) {
        return (
            <BannerVazio>
                <Titulo>Nenhum vídeo cadastrado!</Titulo>
            </BannerVazio>
        )
    }

    const randomNumber = Math.floor(Math.random() * (videos.length));
    const videoBanner = videos[randomNumber];
    const categoriaBanner = categorias.filter((categoria) => categoria.nome === videoBanner.categoria)
    const corCategoria = categoriaBanner[0].cor;

    return (
        <Link to={`/${videoBanner.id}`}>
            <BannerEstilizado $cover={videoBanner.cover}>
                <div>
                    <BotaoCategoria color={corCategoria}>{videoBanner.categoria}</BotaoCategoria>
                    <h3>{videoBanner.titulo}</h3>
                    <p>{videoBanner.descricao}</p>
                </div>
                <div>
                    <img src={videoBanner.cover} alt={videoBanner.titulo} />
                </div>
            </BannerEstilizado>
        </Link>
    )
}

export default Banner;