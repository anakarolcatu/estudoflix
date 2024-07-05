import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Botao from "../Botao";

const StyledNavDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
    > p {
        display: flex;
        align-items: center;
        gap: 5px;
        border: 2px solid #2271D1;
        border-radius: 50px;
        padding: 6px 20px;
        background: #2271D13D;
        color: #2271D1;
        font-weight: 900;
        font-size: 1.25rem;
    }
`;

const NavItem = ({ url, imagem, activeIcon, children, reverse }) => {
    const activeRoute = useLocation().pathname;
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        screenSize <= 1024 
            ? (activeRoute === "/" || activeRoute === "/novovideo")
                ? <StyledNavDiv style={reverse ? { flexDirection: "row-reverse" } : { flexDirection: "row" }}>
                    <p>
                        <img src={imagem} alt={children} />
                        {children}
                    </p>
                    <Link to={url}>
                        {activeIcon}
                    </Link>
                  </StyledNavDiv>
                : <StyledNavDiv>
                    <Link to="/">
                        <img src="/imagens/home.png" alt="Home" />
                    </Link>
                    <Link to="/novovideo">
                        <img src="/imagens/novovideo.png" alt="Novo Video" />
                    </Link>
                  </StyledNavDiv>
            : <StyledNavDiv>
                <Link to="/">
                    <Botao isActive={activeRoute === "/"}>
                        HOME
                    </Botao>
                </Link>
                <Link to="/novovideo">
                    <Botao isActive={activeRoute === "/novovideo"}>
                        NOVO VIDEO
                    </Botao>
                </Link>
              </StyledNavDiv>
    );
};

export default NavItem;
