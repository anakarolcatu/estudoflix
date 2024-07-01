import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const videosApi = 'https://my-json-server.typicode.com/anakarolcatu/estudoflix-api/videos';
const categoriasApi = 'https://my-json-server.typicode.com/anakarolcatu/estudoflix-api/categorias';
export const VideosContext = createContext();

export default function VideosProvider({children}) {
    const [videos, setVideos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [videoSelecionado, setVideoSelecionado] = useState(null);
    const [modalCategoriaOpen, setModalCategoriaOpen] = useState(false);

    useEffect(() => {
        axios.get(videosApi)
        .then(resposta => {
            setVideos(resposta.data)
        })
    }, [])

    useEffect(() => {
        axios.get(categoriasApi)
        .then(resposta => {
            setCategorias(resposta.data)
        })
    }, [])

    return (
        <VideosContext.Provider value={{videos, setVideos, categorias, setCategorias, videoSelecionado, setVideoSelecionado, modalCategoriaOpen, setModalCategoriaOpen}}>
            {children}
        </VideosContext.Provider>
    )
}

export function useVideosContext(){
    const {videos, setVideos} = useContext(VideosContext);
    const {categorias, setCategorias} = useContext(VideosContext);
    const {videoSelecionado, setVideoSelecionado} = useContext(VideosContext);
    const {modalCategoriaOpen, setModalCategoriaOpen} = useContext(VideosContext);

    function adicionarVideo(video) {
        axios.post(videosApi, {
            "titulo":video.titulo,
            "ulr":video.url,
            "descricao":video.descricao,
            "categoria":video.categoria
        })
        .then((resposta) => {
            setVideos([...videos, resposta.data])
            alert("Video cadastrado com sucesso!")
        })
        .catch(() => alert("Não foi possível adicionar o video, tente novamente."))
    }

    function editarVideo(video) {
        video ? window.scrollTo(0,350) : "";
        setVideoSelecionado(video);
    }

    function alterarVideo(video) {
        axios.put(`${videosApi}/${video.id}`, {
            "titulo":video.titulo,
            "ulr":video.url,
            "descricao":video.descricao,
            "categoria":video.categoria
        })
        .then(() => {
            setVideos(videos.map(thisvideo => thisvideo.id === video.id ? video : thisvideo))
            alert("Video alterado!")
        })
        .catch(() => alert("Não foi possível editar o vídeo, tente novamente."))
    }

    function deletarVideo(video) {
        axios.delete(`${videosApi}/${video.id}`)
        .then(() => {
            setVideos(videos.filter((thisVideo) => thisVideo.id !== video.id))
        })
        .catch(() => alert("Não foi possível apagar o vídeo, tente novamente."))
    }

    function adicionarCategoria(categoria) {
        axios.post(categoriasApi, {
            "nome": categoria.nome,
            "cor": categoria.cor
        })
        .then((resposta) => {
            setCategorias([...categorias, resposta.data])
            alert("Categoria adicionada!")
        })
        .catch(() => alert("Não foi possível adicionar a categoria, tente novamente."))
    }
    function modalCategoria(boolean){
        setModalCategoriaOpen(boolean)
    }

    return {
        videos,
        categorias,
        videoSelecionado,
        modalCategoriaOpen,
        modalCategoria,
        editarVideo,
        adicionarVideo,
        deletarVideo,
        alterarVideo,
        adicionarCategoria
    }

}