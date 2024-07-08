import { useState } from 'react';
import styled from 'styled-components';

const FormInput = styled.fieldset`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;
    width: 100%;
    background-color: transparent;
`

const Label = styled.label`
    font-size: 1.25rem;
    font-weight: 600;
    color: #fff;
    &.invalido {
        color: rgba(229, 57, 53, 1);
    }
`

const Input = styled.input`
    width: 100%;
    height: 62px;
    font-size: 1.25rem;
    font-weight: 600;
    color: #fff;
    background-color: transparent;
    border: 3px solid ${(props) => props.$cor};
    border-radius: 10px;
    padding-left: 10px;
    outline: none;
    &::placeholder{
        color: #a5a5a5;
    }
    &.invalido {
        border-color: rgba(229, 57, 53, 1);
        &::placeholder {color: rgba(229, 57, 53, 1);}
    }
`

const InputForm = ({cor, label, id, type, value, placeholder, handleChange}) => {
    const [isValid, setIsValid] = useState(true);

    return (
        <FormInput>
            <Label className={isValid ? "" : "invalido"} htmlFor={id}>{label}</Label>
            <Input
                className={isValid ? "" : "invalido"}
                $cor={cor}
                placeholder={placeholder}
                type={type}
                value={value}
                id={id}
                required
                onChange={(evento) => handleChange(evento.target.value)}
                onBlur={(evento) => setIsValid(evento.target.validity.valid)} 
            />
        </FormInput>
    )
}

export default InputForm;