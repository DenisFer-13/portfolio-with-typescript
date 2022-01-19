import styled from "styled-components";

export const StyledNavbar = styled.nav`
  background-color: violet;
  z-index: 2;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  li {
    padding: 1vw;
  }
  li:hover {
    background-color: lightgrey;
  }
`;
