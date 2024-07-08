import styled from "styled-components";
import { HiOutlineX } from "react-icons/hi";
import { useVideosContext } from "../../context/Videos/Videos.jsx";
import Titulo from '../Titulo';
import Formulario from "../Formulario/Formulario.jsx";

const Overlay = styled.div`
  background-color: #000000b2;
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dialog = styled.dialog`
  position: relative;
  top: 380px;
  left: 0;
  width: 374px;
  background-color: rgba(3, 18, 47, 1);
  padding: 70px 0 60px 0;
  border: 5px solid rgba(107, 209, 255, 1);
  border-radius: 15px;
  @media screen and (min-width: 1024px) {
    width: 974px;
  }
`;
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

  function fecharModal() {
    videoContext.editarVideo(null);
  }
  console.log(videoSelecionado);

  return (
    videoSelecionado && (
      <>
        <Overlay onClick={() => fecharModal()}>
        <Dialog
          onClose={() => fecharModal()}
          open={!!videoSelecionado}
        >
            <Titulo>EDITAR VÍDEO:</Titulo>
            <Formulario method="dialog" video={videoSelecionado} />
            <ModalFechar onClick={() => fecharModal()}>
                <HiOutlineX size={64}/>
            </ModalFechar>
        </Dialog>
        </Overlay>
      </>
    )
  );
};

export default ModalEditar;
