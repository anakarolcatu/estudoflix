import styled from 'styled-components';
import Navegacao from '../Navegacao';
import { Link } from 'react-router-dom';

const HeaderEstilizado = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 125px;
    padding: 0 20px;
    position: fixed;
    bottom: 0;
    z-index: 1;
    background-color: #000;
    border-top: var(--border);
    box-shadow: var(--boxShadow);
    >a>img {
        display: none;
    }
    @media screen and (min-width: 1024px) {
        position: relative;
        justify-content: space-between;
        border-top: none;
        border-bottom: var(--border);
        z-index: 0;
        >a>img {
            display: inline;
            width: 168px;
        }
    }
`

const Header = () => {
    return (
        <HeaderEstilizado>
            <Link to={"/"}><img src='/imagens/estudoflix.png' alt='Logo EstudoFlix' /></Link>
            <Navegacao />
        </HeaderEstilizado>
    )
}

export default Header;
