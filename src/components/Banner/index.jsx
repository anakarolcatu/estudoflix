import styled from "styled-components";
import { Link } from "react-router-dom";
import { useVideosContext } from "../../context/Videos/Videos";
import Titulo from "../Titulo";
import BotaoCategoria from "../BotaoCategoria";
import { useEffect, useState } from "react";

const BannerVazio = styled.div`
  height: 500px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const BannerVazioP = styled.p`
  font-size: 1.25rem;
`;
const BannerEstilizado = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    cursor: pointer;
    gap: 24px;
    height: 648px;
    width: 100%;
    padding: 80px 40px;
    position: relative; /* Para o pseudo-elemento */
    border-bottom: 3px solid ${(props) => props.$cor};
    background: linear-gradient(#0012338f, #0012338f),
      url(${(props) => props.$backgroundimage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
const ContainerTexto = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1; /* Para garantir que o conteúdo esteja acima da imagem de fundo */
  p {
    font-size: 1.125rem;
    font-weight: 300;
    color: #f5f5f5;
  }
  h3 {
    font-size: 3rem;
    margin: 20px 0;
  }
`;
const ContainerImg = styled.div`
    border: 4px solid ${(props) => props.$cor};
    img {
      width: 100%;
      max-width: 646px;
      align-self: center;
    }
`

const Banner = () => {
  const { videos, extractVideoId } = useVideosContext();
  const [currentIndex, setCurrentIndex] = useState(0);
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
    );
  }

  const currentVideo = videos[currentIndex];
  const videoId = extractVideoId(currentVideo.url);
  const videoCategoria = categorias.filter(
    (categoria) => categoria.nome === currentVideo.categoria
  );
  const corCategoria = videoCategoria[0].cor;
  const thumbUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <Link to={`/${currentVideo.id}`}>
      <BannerEstilizado $backgroundimage={thumbUrl} $cor={corCategoria}>
        <ContainerTexto>
          <BotaoCategoria cor={corCategoria}>
            {currentVideo.categoria}
          </BotaoCategoria>
          <h3>{currentVideo.titulo}</h3>
          <p>{currentVideo.descricao}</p>
        </ContainerTexto>
        <ContainerImg $cor={corCategoria}>
          <img src={thumbUrl} alt={currentVideo.nome} />
        </ContainerImg>
      </BannerEstilizado>
    </Link>
  );
};

export default Banner;
