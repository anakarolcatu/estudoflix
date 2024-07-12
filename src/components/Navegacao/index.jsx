import { useLocation } from "react-router-dom"
import styled from "styled-components"
import NavItem from "../NavItem";
import { GoHome, GoPlusCircle } from "react-icons/go";

const StyledNav = styled.nav`
    background-color: #000000;
    
`


const Navegacao = () => {
    const activePage = useLocation().pathname
    return(
        <StyledNav>
            {activePage === "/" 
                ?   <NavItem 
                        url="novovideo"  
                        activeIcon={<GoPlusCircle size={64} />}
                        icon={<GoHome size={48} />}
                        reverse={false}
                    >
                        HOME
                    </NavItem>
                :   <NavItem 
                        url="/"  
                    activeIcon={<GoHome size={64}/>}
                    icon={<GoPlusCircle size={48} />}
                        reverse={true}
                    >
                        NOVO VIDEO
                    </NavItem>
            }
        </StyledNav>
    )
}

export default Navegacao;