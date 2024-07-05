import styled from "styled-components";
import {
  FormProvider,
  useFormContext,
} from "../../context/Formulario/FormContext";
import InputForm from "../Formulario/InputForm";
import Botao from "../Botao";

const FormularioNovaCategoria = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 575px;
  margin: 0 auto;
`;

const NovaCategoriaFormulario = ({ categoria }) => {
  return (
    <FormProvider categoria={categoria}>
      <CategoriaFormContent />
    </FormProvider>
  );
};

const CategoriaFormContent = () => {
  const {
    novaCategoria,
    setNovaCategoria,
    novaCor,
    setNovaCor,
    formCategoriaSubmit,
  } = useFormContext();

  return (
    <FormularioNovaCategoria onSubmit={(evento) => formCategoriaSubmit(evento)}>
      <InputForm
        cor="#6bd1ff"
        label="Nova categoria"
        id="novaCategoria"
        type="text"
        value={novaCategoria}
        placeholder="Insira o nome da categoria"
        handleChange={(value) => setNovaCategoria(value)}
      />
      <InputForm
        cor="#6bd1ff"
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
