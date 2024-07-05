import Banner from "../../components/Banner"
import ModalEditar from "../../components/ModalEditar"
import ListaVideos from "../../components/ListaVideos"
import { useVideosContext } from "../../context/Videos/Videos"


const HomePage = () =>{
    const selectedVideo = useVideosContext().selectedVideo
    console.log(selectedVideo);
    return(
        <>
            <Banner />
            <ListaVideos />  
            <ModalEditar selectedCard={selectedVideo} /> 
        </>
    )
}

export default HomePage