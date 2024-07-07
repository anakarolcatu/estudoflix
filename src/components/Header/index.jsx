import styled from "styled-components";
import { Link } from "react-router-dom";
import Navegacao from "../Navegacao";

const HeaderEstilizado = styled.header`
  background-color: #000;
  box-sizing: border-box;
  height: 125px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  z-index: 1;
  padding: 0 60px;
  border-top: var(--border);
  box-shadow: var(--boxShadow);
  > a > img {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    justify-content: space-between;
    position: relative;
    border-top: none;
    border-bottom: var(--border);
    z-index: 0;
    > a > img {
      display: inline;
      width: 168px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderEstilizado>
      <Link to={"/"}>
        <img src="/imagens/estudoflix.png" alt="EstudoFlix logo em azul" />
      </Link>
      <Navegacao />
    </HeaderEstilizado>
  );
};

export default Header;
