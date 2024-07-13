import styled from "styled-components";
import { HiOutlineX } from "react-icons/hi";
import { useVideosContext } from "../../context/Videos/Videos.jsx";
import Titulo from '../Titulo';
import Formulario from "../Formulario/Formulario.jsx";
import ReactModal from 'react-modal';
import { useEffect, useState } from "react";


const ModalFechar = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const ModalEditar = ({ videoSelecionado }) => {
  const videoContext = useVideosContext();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(!!videoSelecionado);
  }, [videoSelecionado]);

  function fecharModal() {
    videoContext.editarVideo(null);
    setShowModal(false);
  }
  console.log(videoSelecionado);

  return (
    showModal && (
      <>
        <ReactModal
        isOpen={showModal}
        onRequestClose={() => fecharModal()}>
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '374px',
            color: '#2271D1',
            backgroundColor: '#03122F',
            padding: '60px 20px',
            border: '5px solid #6BD1FF',
            borderRadius: '15px',
            '@media screen and (minwidth: 1024px)': {
              width: '865px',
            },
        }}
      >
            <Titulo>EDITAR VÍDEO:</Titulo>
            <Formulario method="dialog" video={videoSelecionado} />
            <ModalFechar onClick={() => fecharModal()}>
                <HiOutlineX size={64}/>
            </ModalFechar>
            </div>
        </ReactModal>
        
      </>
    )
  );
};

export default ModalEditar;
