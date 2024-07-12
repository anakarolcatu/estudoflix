import { useState } from 'react';
import styled from 'styled-components';

const SelectContainer = styled.fieldset`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;
    background-color: transparent;
    width: 100%;
` 
const Label = styled.label`
    font-size: 1.25rem;
    font-weight: 600;
    color: #fff;
    &.invalido {
        color: rgba(229, 57, 53, 1);
    }
`
const Select = styled.select`
    width: 100%;
    height: 62px;
    font-size: 1.25rem;
    background-color: transparent;
    font-weight: 600;
    color: #fff;
    padding-left: 10px;
    outline: none;
    border: 3px solid ${(props) => props.$cor};
    border-radius: 10px;
    &.invalido{
        border-color: rgba(229, 57, 53, 1);
        color: rgba(229, 57, 53, 1);
    }
    option {
        color: #000000;
    }
`

const SelectForm = ({ cor, label, id, categorias, value, handleChange}) => {
    const [isValid, setIsValid] = useState(true);

    return (
        <SelectContainer>
            <Label className={isValid ? "" : "invalido"} htmlFor={id}>{label}</Label>
            <Select 
            className={isValid ? "" : "invalido"}
            $cor={cor}
            id={id}
            value={value}
            onChange={(evento) => handleChange(evento.target.value)}
            onBlur={(evento) => setIsValid(evento.target.validity.valid)}
            required
        >
            <option value="" hidden>Escolha uma categoria!</option>
            {categorias.map((categoria) => <option key={categoria.id}>{categoria.nome}</option>)}
        </Select>
        </SelectContainer>
    )
}

export default SelectForm;