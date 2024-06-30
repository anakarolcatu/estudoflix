import Banner from "../../components/Banner";
import ListaVideos from "../../components/ListaVideos";
import ModalEditar from "../../components/ModalEditar";
import { useVideosContext } from "../../context/Videos";

const Inicio = () => {
  const selectedVideo = useVideosContext().selectedVideo;
  return (
    <>
      <Banner />
      <ListaVideos />
      <ModalEditar selectedCard={selectedVideo} />
    </>
  );
};

export default Inicio;
