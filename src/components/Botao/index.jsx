import styled from "styled-components"

const StyledButton = styled.button`
    width: 180px;
    height: 54px;
    background-color: transparent;
    border: 2px solid #F5F5F5;
    border-radius: 10px;
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: 900;
    text-align: center;
    cursor: pointer;
    &:hover{
        background-color: #ffffff;
        color: #2271D1;
    }
    &.active{
        background-color:#000000E5;
        border-color: #2271D1;
        box-shadow: 0px 0px 12px 4px #2271D1 inset;
        color: #2271D1;
    }
    
`


const Botao = ({children, isActive}) => {
    
    return(
        <StyledButton className={isActive?"active":""}>
            {children}
        </StyledButton>
    )
}

export default Botao;