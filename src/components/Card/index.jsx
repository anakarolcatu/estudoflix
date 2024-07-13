import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useVideosContext } from '../../context/Videos/Videos';
import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";

const CardContainer = styled.div`
    max-width: 390px;
    min-width: 373px;
    margin-bottom: 40px;
    @media screen and (min-width: 1024px) {
        min-width: 432px;
        height: 320px;
    }
`
const Imagem = styled.div`
    width: 100%;
    min-height: 260px;
    background: url(${(props) => props.$bgImage});
    background-size: cover;
    background-position: center;
    border: 4px solid ${(props) => props.$cor};
    border-radius: 4px 4px 0 0;
    box-shadow: 0px 0px 17px 8px ${(props) => props.$cor} inset;
`
const Rodape = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #000000;
    width: 100%;
    height: 59px;
    border-width: 0 4px 4px 4px;
    border-style: solid;
    border-color: ${(props) => props.$cor};
    border-radius: 0 0 15px 15px;
`
const Botao = styled.button`
    display: flex;
    align-items: center;
    gap: 20px;
    border: none;
    background-color: transparent;
    color: #ffffff;
    font-weight: 800;
    cursor: pointer;
`

const Card = ({ cor, video }) => {
    const videosContext = useVideosContext();
    const thumbUrl = videosContext.getThumbUrl(video.url);
    return (
        <CardContainer>
            <Link to={`/${video.id}`}>
                <Imagem $cor={cor} $bgImage={thumbUrl}/>
            </Link>
            <Rodape $cor={cor}>
                <Botao onClick={() => videosContext.deletarVideo(video)}><HiOutlineTrash size={28}/>DELETAR</Botao>
                <Botao onClick={() => videosContext.abrirModalEditar(video)}><HiOutlinePencil size={28}/>EDITAR</Botao>
            </Rodape>
        </CardContainer>
    )
}

export default Card;