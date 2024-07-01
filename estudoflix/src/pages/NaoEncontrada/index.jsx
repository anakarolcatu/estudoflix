import styled from "styled-components";

const Container = styled.section`
    color: #fff;
    margin-top: 150px;
`
const Titulo = styled.h2`
    font-size: 3rem;
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