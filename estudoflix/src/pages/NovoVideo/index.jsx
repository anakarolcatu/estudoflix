import styled from "styled-components";
import Titulo from '../../components/Titulo'
import Formulario from '../../components/Formulario';
import AdicionarCategoriaModal from '../../components/AddCategoriaModal';
import BotaoRodape from "../../components/BotaoRodape";
import { useVideosContext } from "../../context/Videos";

const NovoVideoContainer = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: 90px auto 120px;
    padding: 0 10px;
    position: sticky;
`
const ParagrafoEstilizado = styled.p`
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 20px;
    color: var(--claro);
`
const FormContainer = styled.div`
    padding: 0 50px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const H2Estilizado = styled.h2`
    padding: 15px;
    font-size: 2.25rem;
    text-align: center;
    color: var(--claro);
    font-weight: 600;
    border-top: 3px solid var(--cinza);
    border-bottom: 3px solid var(--cinza);
    margin-bottom: 20px;
`

const NovoVideo = () => {

    const videoContext = useVideosContext();

    return(
        <NovoVideoContainer>
            <Titulo>NOVO VÍDEO</Titulo>  
            <ParagrafoEstilizado>COMPLETE O FORMULARIO PARA CRIAR UM NOVO CARD DE VÍDEO</ParagrafoEstilizado>
            <FormContainer>
                <H2Estilizado>Criar Card</H2Estilizado>
                <Formulario />
            </FormContainer>
            <BotaoRodape path="/novo-video" onClick={() => videoContext.modalCategoria(true)}>Adicionar Categoria</BotaoRodape>
            <AdicionarCategoriaModal />
        </NovoVideoContainer>
    )
}

export default NovoVideo