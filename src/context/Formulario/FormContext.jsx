import { createContext, useContext, useEffect, useState } from "react";
import { useVideosContext } from "../Videos/Videos";

//Cria o contexto e consome usando o FormContext
const FormContext = createContext();


export const useFormContext = () => useContext(FormContext);
//Provedor de contexto que usa useEffect para atualizar os estados baseados no video passado como prop
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
//trada do envio do formulario para adicionar ou alterar um video
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
//envio do formulario para adicionar nova categoria
    const formCategoriaSubmit = (evento) => {
        evento.preventDefault();
        const addCategoria = {
            "categoria": novaCategoria,
            "cor": novaCor
        }
        videoContext.adicionarCategoria(addCategoria)
        videoContext.modalCategoria(false)
    }

    const limparCampos = () => {
        setVideoCategoria('');
        setVideoDescricao('');
        setVideoUrl('');
        setVideoTitulo('');
    };

    
//fornece todos os estados e funções necessárias para os filhos
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