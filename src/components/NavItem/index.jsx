import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Botao from "../Botao";
import { GoHome, GoPlusCircle } from "react-icons/go";

const StyledNavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  > p {
    display: flex;
    align-items: center;
    gap: 5px;
    border: 2px solid #2271d1;
    border-radius: 50px;
    padding: 6px 20px;
    background: #2271d13d;
    color: #2271d1;
    font-weight: 900;
    font-size: 1.25rem;
  }
`;

const NavItem = ({ url, icon, activeIcon, children, reverse }) => {
  const activeRoute = useLocation().pathname;
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize <= 1024 ? (
    activeRoute === "/" || activeRoute === "/novovideo" ? (
      <StyledNavDiv
        style={
          reverse ? { flexDirection: "row-reverse" } : { flexDirection: "row" }
        }
      >
        <p icon={icon}>{icon}{children}</p>
        <Link to={url}>{activeIcon}</Link>
      </StyledNavDiv>
    ) : (
      <StyledNavDiv>
        <Link to="/">
          <GoHome size={64} />
        </Link>
        <Link to="/novovideo">
          <GoPlusCircle size={64} />
        </Link>
      </StyledNavDiv>
    )
  ) : (
    <StyledNavDiv>
      <Link to="/">
        <Botao isActive={activeRoute === "/"}>HOME</Botao>
      </Link>
      <Link to="/novovideo">
        <Botao isActive={activeRoute === "/novovideo"}>NOVO VIDEO</Botao>
      </Link>
    </StyledNavDiv>
  );
};

export default NavItem;
