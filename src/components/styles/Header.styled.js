import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.header};
  padding: 40px 0;

  h1 {
    color: greenyellow;
  }
  &:hover {
    color: silver;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Logo = styled.img`
  src: ${({ src }) => src};
`;
