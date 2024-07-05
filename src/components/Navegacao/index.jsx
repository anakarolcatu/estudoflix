import { useLocation } from "react-router-dom"
import styled from "styled-components"
import NavItem from "../NavItem";
import { GoHome, GoPlusCircle } from "react-icons/go";

const StyledNav = styled.nav`
    background-color: #000;
`


const Navegacao = () => {
    const activePage = useLocation().pathname
    return(
        <StyledNav>
            {activePage === "/" 
                ?   <NavItem 
                        url="novovideo" 
                        imagem="/imagens/home.png" 
                        activeIcon={<GoPlusCircle />}
                        reverse={false}
                    >
                        HOME
                    </NavItem>
                :   <NavItem 
                        url="/" 
                        imagem="/imagens/novovideo.png" 
                    activeIcon={<GoHome />}
                        reverse={true}
                    >
                        NOVO VIDEO
                    </NavItem>
            }
        </StyledNav>
    )
}

export default Navegacao;