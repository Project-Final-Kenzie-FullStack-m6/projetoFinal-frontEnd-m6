import styled from "styled-components"


export const StyledContainerBackground = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  animation: fadeIn 0.4s ease-in-out forwards;
`

export const StyledContainer = styled.div`
  z-index: 3;
  height: auto;
  padding: 18px 24px 18px 30px;
  background-color: ${({ theme }) => theme.colors.grey.whiteFixed};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: fadeIn 0.4s ease-in-out forwards;

  display: flex;
  flex-direction: column;


  @media screen and (max-width: 768px) {
    margin-top: 30px;
    padding: 12px 16px 12px 20px;
    width: 90%;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
`;

export const StyledBtnClose = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 17px;

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize.size16px};
    color: ${({ theme }) => theme.colors.grey.g1};
    font-weight: ${({ theme }) => theme.typography.fontWeight.weight600};
  }

  button {
    color: ${({ theme }) => theme.colors.grey.g4};
    background-color: transparent;
    font-size: ${({ theme }) => theme.typography.fontSize.size16px};
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: ${({ theme }) => theme.typography.fontSize.size14px};
    }

    button {
      font-size: ${({ theme }) => theme.typography.fontSize.size14px};
    }
  }
`;

export const StyledTitle = styled.div`
  margin-bottom: 24px;
  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize.size14px};
    color: ${({ theme }) => theme.colors.grey.g1};
    font-weight: ${({ theme }) => theme.typography.fontWeight.weight600};
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 12px;

    h1 {
      font-size: ${({ theme }) => theme.typography.fontSize.size12px};
    }
  }
`;

export const StyledFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;


export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  label {
    display: flex;
    flex-direction: column;
    font-size: ${({ theme }) => theme.typography.fontSize.size14px};
    color: ${({ theme }) => theme.colors.grey.g1};
    font-weight: ${({ theme }) => theme.typography.fontWeight.weight600};
    margin-bottom: 8px;
  }

  .styleOption {
    color: ${({ theme }) => theme.colors.grey.g3};
  }

  .divDescription {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .btnAdd {
    width: 70%;
    height: 38px;
    margin-top: 24px;
    background-color: ${({ theme }) => theme.colors.brand.b4};
    font-size: ${({ theme }) => theme.typography.fontSize.size14px};
    font-weight: ${({ theme }) => theme.typography.fontWeight.weight600};
    color: ${({ theme }) => theme.colors.brand.b1};

    @media screen and (max-width: 768px) {
      width: 50%;
      font-size: 2.1vmin;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: 414px) {
      width: 50%;
      font-size: 2.5vmin;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }

  .btnEvent {
    display: flex;
    justify-content: center;
    margin-top: 24px;
    gap: 10px;
  }

  @media screen and (max-width: 414px) {
    .btnDelete {
      display: none;
    }
  }
`;