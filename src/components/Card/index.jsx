import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useVideosContext } from '../../context/Videos';
import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";

const CardContainer = styled.div`
    max-width: 373px;
    margin-bottom: 40px;
    @media screen and (min-width: 1024px) {
        max-width: 432px;
    }
`
const Imagem = styled.div`
    width: 100%;
    min-height: 174px;
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
    background-color: #000;
    width: 100%;
    height: 59px;
    border: 4px solid ${(props) => props.$cor};
    border-radius: 0 0 15px 15px;
`
const Botao = styled.button`
    display: flex;
    align-items: center;
    gap: 20px;
    border: none;
    background-color: transparent;
    color: #fff;
    font-weight: 800;
    cursor: pointer;
`

const Card = ({ cor, video }) => {
    const videosContext = useVideosContext();
    return (
        <CardContainer>
            <Link to={`/${video.id}`}>
                <Imagem $cor={cor} />
            </Link>
            <Rodape>
                <Botao onClick={() => videosContext.deletarVideo(video)}><HiOutlineTrash size={28}/>DELETAR</Botao>
                <Botao onClick={() => videosContext.editarVideo(video)}><HiOutlinePencil size={28}/>EDITAR</Botao>
            </Rodape>
        </CardContainer>
    )
}

export default Card;