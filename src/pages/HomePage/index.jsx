import Banner from "../../components/Banner"
import ModalEditar from "../../components/ModalEditar"
import ListaVideos from "../../components/ListaVideos"
import { useVideosContext } from "../../context/Videos/Videos"
import ContainerVideos from "../../components/ContainerVideos"


const HomePage = () =>{
    const videoSelecionado = useVideosContext().videoSelecionado
    return(
        <>
            <Banner />
            <ContainerVideos />  
            <ModalEditar cardSelecionado={videoSelecionado} /> 
        </>
    )
}

export default HomePage