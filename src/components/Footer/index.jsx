import { Link } from "react-router-dom";
import styled from "styled-components";

const Rodape = styled.footer`
  display: none;
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 125px;
    background-color: #262626;
    border-top: var(--border);
    box-shadow: var(--boxShadow);
    img {
      width: 168px;
    }
  }
`;

const Footer = () => {
  return (
    <Rodape>
      <Link to={"/"}>
        <img src="/imagens/estudoflix.png" alt="EstudoFlix logo em azul" />
      </Link>
    </Rodape>
  );
};

export default Footer;
