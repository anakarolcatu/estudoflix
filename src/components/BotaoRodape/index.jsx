import styled from "styled-components";
import { HiOutlinePlusCircle, HiOutlineHome } from "react-icons/hi";
import useActiveRoute from "../../context/useActiveRoute";

const BotaoMobileEstilizado = styled.button`
    background-color: ${(props) => props.active ? 'rgba(34, 113, 209, 0.24)' : 'transparent'};
    border: none;
    border: ${(props) => props.active ? '2px solid rgba(34, 113, 209, 1)' : 'none'};
    border-radius: 50px;
    color: ${(props) => props.active ? 'rgba(34, 113, 209, 1)' : '#ffffff'};
    display: flex;
    align-items: center;
    padding: 0 15px;
    gap: 10px;
    cursor: pointer;
`
const Texto = styled.p`
    font-size: 1.25rem;
    font-weight: 900;
    display: ${(props) => props.active ? 'block' : 'none'};
`

const BotaoRodape = ({children, path}) => {
    const active = useActiveRoute(path);
    return (
        <BotaoMobileEstilizado active={active}>
            {active ? <HiOutlineHome /> : <HiOutlinePlusCircle />}
            <Texto active={active}>{children}</Texto>
        </BotaoMobileEstilizado>
    )
}

export default BotaoRodape;