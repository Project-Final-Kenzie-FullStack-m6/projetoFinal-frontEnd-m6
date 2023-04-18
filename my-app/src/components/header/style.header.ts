import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.grey.whiteFixed};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  height: 70px;
  div {
    display: flex;
    gap: 5px;
    border-left: 2px solid #dee2e6;
    padding: 20px 0;
  }

  .divIcon {
    border: none;
    font-size: 25px;
  }

  .login {
    border: none;
  }

  .divNameUser {
    display: flex;
    justify-content: start;
    gap: 5px;
    padding-left: 40px;
    padding-right: 50px;
    button {
      width: 28px;
      height: 28px;
      font-size: 13px;
    }
    span {
      font-size: ${({ theme }) => theme.typography.fontSize.size13px};
      color: ${({ theme }) => theme.colors.grey.g2};
      font-weight: ${({ theme }) => theme.typography.fontWeight.weight500};
      display: flex;
      align-items: center;
    }
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
