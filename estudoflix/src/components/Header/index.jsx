import useActiveRoute from "../../hooks/useActiveRoute";
import Botao from "../Botao";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderEstilizado = styled.header`
  background-color: #000;
  box-sizing: border-box;
  height: 125px;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 52px;
  border-bottom: 4px solid var(--border, rgba(34, 113, 209, 1));
  box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.7);
  img {
    height: 40px;
  }
  @media (max-width: 730px) {
    .header {
      display: none;
    }
  }
`;
const Navegacao = styled.nav`
  display: flex;
  gap: 32px;
`;

const Header = () => {
  const isHomeActive = useActiveRoute("/");
  const isNewVideoActive = useActiveRoute("/novovideo");
  return (
    <HeaderEstilizado>
      <Link to={"/"}>
        <img src="/imagens/estudoflix.png" alt="EstudoFlix logo em azul" />
      </Link>
      <Navegacao>
        <Link to={"/"}>
          <Botao active={isHomeActive}>HOME</Botao>
        </Link>
        <Link to={"/novovideo"}>
          <Botao active={isNewVideoActive}>NOVO VIDEO</Botao>
        </Link>
      </Navegacao>
    </HeaderEstilizado>
  );
};

export default Header;
