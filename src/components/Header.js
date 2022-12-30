import React from "react";
import { Logo, Nav, StyledHeader } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" />
          <Button>Button</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
