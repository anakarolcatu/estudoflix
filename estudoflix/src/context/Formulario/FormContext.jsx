import { createContext, useContext, useEffect, useState } from "react";
import { useVideosContext } from '../Videos';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({children, video}) => {
    const videoContext = useVideosContext();
    const [videoTitulo, setVideoTitulo] = useState('');
    const [videoCategoria, setVideoCategoria] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [videoDescricao, setVideoDescricao] = useState('');
    const [novaCategoria, setNovaCategoria] = useState("");
    const [novaCor, setNovaCor] = useState("#000");

    useEffect(() => {
        if (video) {
            setVideoTitulo(video.titulo);
            setVideoCategoria(video.categoria);
            setVideoUrl(video.url);
            setVideoDescricao(video.descricao);
        }
    }, [video]);

    const formSubmit = (evento) => {
        evento.preventDefault();
        videoContext.editarVideo(null);
        const novoVideo = {
            titulo: videoTitulo,
            url: videoUrl,
            categoria: videoCategoria,
            descricao: videoDescricao,
        };

        if (video) {
            novoVideo.id = video.id;
            videoContext.alterarVideo(novoVideo);
        } else {
            videoContext.adicionarVideo(novoVideo);
        }
        limparCampos();
    }

    const formCategoriaSubmit = (evento) => {
        evento.preventDefault();
        const addCategoria = {
            "categoria": novaCategoria,
            "cor": novaCor
        }
        videoContext.addCategoria(addCategoria)
        videoContext.modalCategoria(false)
    }

    const limparCampos = () => {
        setVideoCategoria('');
        setVideoDescricao('');
        setVideoUrl('');
        setVideoTitulo('');
    };

    

    return (
        <FormContext.Provider
            value={{
                videoTitulo, setVideoTitulo,
                videoCategoria, setVideoCategoria,
                videoUrl, setVideoUrl,
                videoDescricao, setVideoDescricao,
                novaCategoria, setNovaCategoria,
                novaCor, setNovaCor,
                formSubmit, limparCampos,
                formCategoriaSubmit,
            }}
        >
            {children}
        </FormContext.Provider>
    )
}