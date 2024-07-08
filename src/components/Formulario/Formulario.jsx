import styled from 'styled-components';
import InputForm from './InputForm';
import SelectForm from './SelectForm';
import TextAreaForm from './TextAreaForm';
import { useVideosContext } from '../../context/Videos/Videos';
import Botao from '../Botao';
import { useEffect, useState } from 'react';

const FormularioEstilo = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    gap: 40px;
`;

const DivBotao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 525px;
    gap: 15px;
    @media screen and (min-width: 650px) {
        flex-direction: row;
        justify-content: flex-start;
        gap: 30px;
    }
`;

const Formulario = ({ method, video }) => {
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
    }, []);

    const formSubmit = (evento) => {
        evento.preventDefault();
        videoContext.editarVideo(null);
        const novoVideo = {
            "titulo": videoTitulo,
            "url": videoUrl,
            "categoria": videoCategoria,
            "descricao": videoDescricao,
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
        <FormularioEstilo onSubmit={(evento) => formSubmit(evento)}>
            <InputForm
                cor={method ? '#6bd1ff' : '#696969'}
                label="Título"
                id="titulo"
                type="text"
                value={videoTitulo ? videoTitulo : ""}
                placeholder="Título do video"
                handleChange={(value) => setVideoTitulo(value)}
            />
            <SelectForm
                cor={method ? '#6bd1ff' : '#696969'}
                label="Categoria"
                id="categoria"
                categorias={videoContext.categorias}
                value={videoCategoria ? videoCategoria : ""}
                handleChange={(value) => setVideoCategoria(value)}
            />
            <InputForm
                cor={method ? '#6bd1ff' : '#696969'}
                label="Vídeo"
                id="url"
                type="url"
                value={videoUrl ? videoUrl : ""}
                placeholder="Link do video"
                handleChange={(value) => setVideoUrl(value)}
            />
            <TextAreaForm
                cor={method ? '#6bd1ff' : '#696969'}
                label="Descrição"
                id="descricao"
                value={videoDescricao ? videoDescricao : ""}
                placeholder="Sobre o que é esse vídeo?"
                handleChange={(value) => setVideoDescricao(value)}
            />
            <DivBotao>
                <Botao type="submit">GUARDAR</Botao>
                <Botao type="reset" onClick={() => limparCampos()}>LIMPAR</Botao>
            </DivBotao>
        </FormularioEstilo>
    );
};

export default Formulario;
