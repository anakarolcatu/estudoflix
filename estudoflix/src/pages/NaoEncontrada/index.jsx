import styled from "styled-components";
import Titulo from "../../components/Titulo";

const Container = styled.section`
    color: #fff;
    margin-top: 150px;
`

const Paragrafo = styled.p`
    font-size: 1.75rem;
`
const NaoEncontrada = () => {
    return (
        <Container>
            <Titulo>Ops!</Titulo>
            <Paragrafo>O conteúdo que você procura não foi encontrado</Paragrafo>
        </Container>
    )
}

export default NaoEncontrada;