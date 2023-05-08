import styled from "styled-components"

export const StyledContainerBackground = styled.div`
  z-index: 2;
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
  padding: 18px 30px 18px 24px;
  background-color: ${({ theme }) => theme.colors.grey.whiteFixed};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
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
  margin-bottom: 20px;

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize.size16px};
    color: ${({ theme }) => theme.colors.grey.g2};
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
  margin-bottom: 25px;
  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize.size14px};
    color: ${({ theme }) => theme.colors.grey.g2};
    font-weight: ${({ theme }) => theme.typography.fontWeight.weight600};
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 12px;

    h1 {
      font-size: ${({ theme }) => theme.typography.fontSize.size12px};
    }
  }
`;

export const StyledParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  

  .btnEvent {
    
    display: flex;
    justify-content: end;
    gap: 10px;
    width: 100%;
  }

  .btnStyle{
    width: 210px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;