import { useState } from 'react';
import styled from 'styled-components';

const CorpoForm = styled.fieldset`
    width: 90%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    background-color: transparent;
`

const Label = styled.label`
    color: #fff;
    font-size: 1.25rem;
    font-weight: 600;
    &.invalido {
        color: rgba(229, 57, 53, 1);
    }
`

const TextArea = styled.textarea`
    width: 100%;
    height: 155px;
    background-color: transparent;
    font-size: 1.25rem;
    font-weight: 600;
    color: #fff;
    padding-left: 10px;
    border: 3px solid ${(props) => props.$cor};
    border-radius: 15px;
    resize: none;
    &.invalido {
        border-color: rgba(229, 57, 53, 1);
    }
`

const TextAreaForm = ({id, label, cor, placeholder, value, handleChange}) => {
    const [isValid, setIsValid] = useState(true);

    return (
        <CorpoForm>
            <Label
                htmlFor={id}
                className={isValid ? "" : "invalido"}>{label}</Label>
            <TextArea
                className={isValid ? "" : "invalido"}
                $cor={cor}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={(evento) => handleChange(evento.target.value)}
                onBlur={(evento => setIsValid(evento.target.validity.valid))}
                />
        </CorpoForm>
    )
}

export default TextAreaForm;