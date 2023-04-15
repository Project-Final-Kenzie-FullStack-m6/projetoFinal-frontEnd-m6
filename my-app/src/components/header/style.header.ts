import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  .showBtnsOn {
    background-color: ${({ theme }) => theme.colors.grey.whiteFixed};
    position: absolute;
    right: 0px;
    top: 70px;
    border: none;
    border-bottom-left-radius: 5px;
    padding: 20px 15px;
    z-index: 1;
    box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.grey.g3};
    button {
      border: 1px solid ${({ theme }) => theme.colors.grey.g3};
      width: 100px;
    }
  }
  .showBtnsOff {
    display: none;
  }
`;
