import styled from 'styled-components';

const TituloCategorias = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    width: 286px;
    height: 70px;
    font-weight: 800;
    font-size: 1.5rem;
    border-radius: 15px;
    margin-bottom: 40px;
    background-color: ${(props) => props.$cor};
    @media screen and (min-width: 1024px) {
        width: 432px;
        font-size: 2rem;
    }
`

const BotaoCategoria = ({children, cor}) => {
    return (
        <TituloCategorias $cor={cor}>
            {children}
        </TituloCategorias>
    )
}

export default BotaoCategoria;