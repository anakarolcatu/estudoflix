import styled from 'styled-components';
import { FormProvider, useFormContext } from '../../context/Formulario/FormContext';
import InputForm from './InputForm';
import SelectForm from './SelectForm';
import TextAreaForm from './TextAreaForm';
import { useVideosContext } from '../../context/Videos/Videos';
import Botao from '../Botao';

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
    @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const Formulario = ({ method, video }) => {
    return (
        <FormProvider video={video}>
            <FormContent method={method} />
        </FormProvider>
    );
};

const FormContent = ({ method }) => {
    const {
        videoTitulo, setVideoTitulo,
        videoCategoria, setVideoCategoria,
        videoUrl, setVideoUrl,
        videoDescricao, setVideoDescricao,
        formSubmit, limparCampos,
    } = useFormContext();

    const { categorias } = useVideosContext();

    return (
        <FormularioEstilo onSubmit={(evento) => formSubmit(evento)}>
            <InputForm
                cor={method ? '#6bd1ff' : '#696969'}
                label="Título"
                id="titulo"
                type="text"
                value={videoTitulo}
                placeholder="Título do video"
                handleChange={(value) => setVideoTitulo(value)}
            />
            <SelectForm
                cor={method ? '#6bd1ff' : '#696969'}
                label="Categoria"
                id="categoria"
                categorias={categorias}
                value={videoCategoria}
                handleChange={(value) => setVideoCategoria(value)}
            />
            <InputForm
                cor={method ? '#6bd1ff' : '#696969'}
                label="Vídeo"
                id="url"
                type="url"
                value={videoUrl}
                placeholder="Link do video"
                handleChange={(value) => setVideoUrl(value)}
            />
            <TextAreaForm
                cor={method ? '#6bd1ff' : '#696969'}
                label="Descrição"
                id="descricao"
                value={videoDescricao}
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
