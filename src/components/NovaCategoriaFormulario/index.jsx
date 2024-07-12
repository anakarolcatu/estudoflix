import styled from "styled-components";
import InputForm from "../Formulario/InputForm";
import Botao from "../Botao";
import { useVideosContext } from "../../context/Videos/Videos";
import { useState } from "react";

const FormularioNovaCategoria = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 575px;
  margin: 0 auto;
`;

const NovaCategoriaFormulario = ({ categoria }) => {
  const videoContext = useVideosContext();
  const [novaCategoria, setNovaCategoria] = useState("");
  const [novaCor, setNovaCor] = useState("#000000");

  function formSubmit(evento) {
    evento.preventDefault()
    const addCategoria = {
      "categoria": novaCategoria,
      "cor": novaCor
    }
    videoContext.adicionarCategoria(addCategoria)
    videoContext.modalCategoria(false)
  }

  return (
    <FormularioNovaCategoria onSubmit={(evento) => formSubmit(evento)}>
      <InputForm
        cor="#2271D1"
        label="Nova categoria"
        id="novaCategoria"
        type="text"
        value={novaCategoria}
        placeholder="Insira o nome da categoria"
        handleChange={(value) => setNovaCategoria(value)}
      />
      <InputForm
        cor="#2271D1"
        label="Cor da categoria"
        id="novaCor"
        type="color"
        value={novaCor}
        placeholder="Escolha uma cor"
        handleChange={(value) => setNovaCor(value)}
      />
      <Botao>NOVA CATEGORIA</Botao>
    </FormularioNovaCategoria>
  );
};

export default NovaCategoriaFormulario;
