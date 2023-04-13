import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 0px 70px;
  div {
    display: flex;
    gap: 5px;
    border-left: 2px solid #dee2e6;
    padding: 20px 0;
  }
  .login {
    border: none;
  }
  /* div button {
    margin-top: 0;
    padding: 0;
  } */
`;
