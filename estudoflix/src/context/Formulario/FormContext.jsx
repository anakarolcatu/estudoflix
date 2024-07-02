import { createContext, useContext, useEffect, useState } from "react";
import { useVideoscontext } from '../../context/Videos';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({children, video}) => {
    const videoContext = useVideosContext();
    const [videoTitulo, setVideoTitulo] = useState('');
    const [videoCategoria, setVideoCategoria] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [videoDescricao, setVideoDescricao] = useState('');

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
                formSubmit, limparCampos,
            }}
        >
            {children}
        </FormContext.Provider>
    )
}