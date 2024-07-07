import styled from 'styled-components';
import { useVideosContext } from '../../context/Videos/Videos';
import Titulo from '../Titulo'
import NovaCategoriaFormulario from '../NovaCategoriaFormulario';
import { HiOutlineX } from "react-icons/hi";

const Overlay = styled.div`
    background-color: #000000b2;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`;

const Dialog = styled.dialog`
    position: absolute;
    top: 0px;
    left: 0%;
    width: 374px;
    background-color: #03122F;
    padding: 60px 20px;
    border: 5px solid #6BD1FF;
    border-radius: 15px;
    @media screen and (min-width: 1024px) {
        width: 865px;
    }
`;

const ModalButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const AddCategoriaModal = () => {
    const videoContext = useVideosContext();
    
    return (
        videoContext.modalCategoriaOpen && (
            <>
                <Overlay onClick={() => videoContext.modalCategoria(false)} />
                <Dialog open={videoContext.modalCategoriaOpen}>
                    <Titulo> ADICIONAR CATEGORIA:</Titulo>
                    <NovaCategoriaFormulario />
                    <ModalButton onClick={() => videoContext.modalCategoria(false)}>
                        <HiOutlineX />
                    </ModalButton>
                </Dialog>
            </>
        )
    );
};

export default AddCategoriaModal;