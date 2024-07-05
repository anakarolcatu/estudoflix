import styled from 'styled-components';

const TituloEstilizado = styled.div`
    text-align: center;
    font-size: 3.75rem;
    font-weight: 900;
    line-height: 70px;
`

const Titulo = () => {
    return (
        <TituloEstilizado>
            {children}
        </TituloEstilizado>
    )
}

export default Titulo;