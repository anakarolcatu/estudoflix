import styled from "styled-components"
import Titulo from "../../components/Titulo"
import AddCategoriaModal from "../../components/AddCategoriaModal"
import Formulario from "../../components/Formulario/Formulario"
import { useVideosContext } from "../../context/Videos/Videos"

const StyledNewVideoContainer = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: 90px auto 120px;
    padding: 0 10px;
    position: sticky;
`
const StyledParagraph = styled.p`
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
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
    padding: 15px;
    font-size: 2.25rem;
    width: 100%;
    text-align: center;
    color: #FFFFFF;
    font-weight: 600;
    border-top: 3px solid #393939;
    border-bottom: 3px solid #393939;
    margin-bottom: 20px;
`
const StyledNewCategoryButton = styled.button`
    position: absolute;
    top: -80px;
    right: 20px;
    background-color: transparent;
    border: 3px solid #FFFFFF;
    border-radius: 10px;
    padding: 20px;
    color: #FFFFFF;
    font-size: 1rem;
` 

const NovoVideo = () => {

    const videoContext = useVideosContext()

    return(
        <StyledNewVideoContainer>
            <Titulo>NOVO VIDEO</Titulo>
            <StyledParagraph>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</StyledParagraph>
            <StyledFormContainer>
                <StyledSubTitle>Criar Card</StyledSubTitle>
                <Formulario />
            </StyledFormContainer>
            <StyledNewCategoryButton onClick={() => videoContext.modalCategoria(true)}>
                NOVA CATEGORIA
            </StyledNewCategoryButton>
            <AddCategoriaModal />
        </StyledNewVideoContainer>
    )
}

export default NovoVideo;