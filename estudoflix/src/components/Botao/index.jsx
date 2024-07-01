import styled from "styled-components";

const BotaoEstilizado = styled.button`
  background-color: transparent;
  border-radius: 10px;
  font-weight: 900;
  font-size: 1.25rem;
  width: 180px;
  height: 54px;
  border: 2px solid rgba(245, 245, 245, 1);
  cursor: pointer;
  color: rgba(245, 245, 245, 1);
  /*margin: 32px 0;*/
  text-align: center;
  &.active {
    color: rgba(34, 113, 209, 1);
    border-color: rgba(34, 113, 209, 1);
    box-shadow: 0px 0px 12px 4px rgba(34, 113, 209, 1) inset;
  }
  &:hover {
    color: rgba(34, 113, 209, 1);
    border-color: rgba(34, 113, 209, 1);
  }
  @media (max-width: 730px) {
    margin: 20px;
  }
`;

const Botao = ({children, ativo}) => {
    return (
        <BotaoEstilizado className={ativo ? "active" : ""}>
            {children}
        </BotaoEstilizado>
    )
}

export default Botao;
