import styled from "styled-components"
import Titulo from "../../components/Titulo"
import AddCategoriaModal from "../../components/AddCategoriaModal"
import Formulario from "../../components/Formulario/Formulario"
import { useVideosContext } from "../../context/Videos/Videos"
import Botao from "../../components/Botao"

const StyledNewVideoContainer = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: 90px auto 120px;
    padding: 0 10px;
    position: sticky;
`
const StyledParagraph = styled.p`
    text-align: center;
    font-size: 1.25rem;
    font-weight: 300;
    color: #FFFFFF;
    margin-bottom: 40px;
`
const StyledFormContainer = styled.div`
    padding: 0 50px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const StyledSubTitle = styled.h3`
    padding: 20px 0;
    font-size: 2.25rem;
    width: 100%;
    color: #FFFFFF;
    font-weight: 400;
    border-top: 3px solid #393939;
    border-bottom: 3px solid #393939;
    margin-bottom: 60px;
`
const StyledNewCategoryButton = styled.button`
    position: absolute;
    top: -70px;
    right: 30px;
    background-color: transparent;
    border: none;
` 

const NovoVideo = () => {

    const videoContext = useVideosContext()

    return(
        <StyledNewVideoContainer>
            <Titulo>NOVO VÍDEO</Titulo>
            <StyledParagraph>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</StyledParagraph>
            <StyledFormContainer>
                <StyledSubTitle>Criar Card</StyledSubTitle>
                <Formulario />
            </StyledFormContainer>
            <StyledNewCategoryButton onClick={() => videoContext.modalCategoria(true)}>
                <Botao>NOVA CATEGORIA</Botao>
            </StyledNewCategoryButton>
            <AddCategoriaModal />
        </StyledNewVideoContainer>
    )
}

export default NovoVideo;