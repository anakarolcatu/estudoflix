import styled from 'styled-components';

const TituloEstilizado = styled.div`
    text-align: center;
    font-size: 3.75rem;
    font-weight: 900;
    line-height: 70px;
    margin-bottom: 30px;
`

const Titulo = ({children}) => {
    return (
        <TituloEstilizado>
            {children}
        </TituloEstilizado>
    )
}

export default Titulo;