import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const videosApi = 'https://my-json-server.typicode.com/anakarolcatu/estudoflix-api/videos';
const categoriasApi = 'https://my-json-server.typicode.com/anakarolcatu/estudoflix-api/categorias';
export const VideosContext = createContext();
VideosContext.displayName = 'Videos';

export default function VideosProvider({ children }) {
    const [videos, setVideos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [videoSelecionado, setVideoSelecionado] = useState(null);
    const [modalCategoriaOpen, setModalCategoriaOpen] = useState(false);
    
    useEffect(() => {
        console.log("Fetching videos...")
        axios.get(videosApi)
            .then(resposta => {
                console.log("Videos fetched successfully:", resposta.data);
                setVideos(resposta.data);
            })
            .catch(error => {
                console.error("Error fetching videos: ", error);
            });
    }, []);

    useEffect(() => {
        console.log("Fetching categorias...");
        axios.get(categoriasApi)
            .then(resposta => {
                console.log("Categorias fetched successfully:", resposta.data);
                setCategorias(resposta.data);
            })
            .catch(error => {
                console.error("Error fetching categorias: ", error);
            });
    }, []);

    return (
        <VideosContext.Provider value={{ videos, setVideos, categorias, setCategorias, videoSelecionado, setVideoSelecionado, modalCategoriaOpen, setModalCategoriaOpen }}>
            {children}
        </VideosContext.Provider>
    );
}

export function useVideosContext() {
    const context = useContext(VideosContext);

    const { videos, setVideos, categorias, setCategorias, videoSelecionado, setVideoSelecionado, modalCategoriaOpen, setModalCategoriaOpen } = context;

    function adicionarVideo(video) {
        axios.post(videosApi, {
            titulo: video.titulo,
            url: video.url,
            descricao: video.descricao,
            categoria: video.categoria
        })
        .then((resposta) => {
            setVideos([...videos, resposta.data]);
            alert("Video cadastrado com sucesso!");
        })
        .catch(() => alert("Não foi possível adicionar o video, tente novamente."));
    }

    function editarVideo(video) {
        console.log("editarVideo chamado com:", video);
        setVideoSelecionado(video);
        video ? window.scrollTo({ top: 0, behavior: 'smooth' }): "";
    }

    function alterarVideo(video) {
        axios.put(`${videosApi}/${video.id}`, {
            titulo: video.titulo,
            url: video.url,
            descricao: video.descricao,
            categoria: video.categoria
        })
        .then(() => {
            setVideos(videos.map(thisVideo => thisVideo.id === video.id ? video : thisVideo));
            alert("Video alterado!");
        })
        .catch(() => alert("Não foi possível editar o vídeo, tente novamente."));
    }

    function deletarVideo(video) {
        axios.delete(`${videosApi}/${video.id}`)
        .then(() => {
            setVideos(videos.filter(thisVideo => thisVideo.id !== video.id));
            alert("Vídeo deletado com sucesso!");
        })
        .catch(() => alert("Não foi possível apagar o vídeo, tente novamente."));
    }

    function adicionarCategoria(categoria) {
        axios.post(categoriasApi, {
            nome: categoria.nome,
            cor: categoria.cor
        })
        .then((resposta) => {
            setCategorias([...categorias, resposta.data]);
            alert("Categoria adicionada!");
        })
        .catch(() => alert("Não foi possível adicionar a categoria, tente novamente."));
    }

    const extractVideoId = (url) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const matches = url.match(regex);
        return matches ? matches[1] : null;
      };
      const getThumbUrl = (url) => {
        const videoId = extractVideoId(url);
        return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
    };

    function modalCategoria(boolean) {
        setModalCategoriaOpen(boolean);
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
        adicionarCategoria,
        extractVideoId,
        getThumbUrl
    };
}
