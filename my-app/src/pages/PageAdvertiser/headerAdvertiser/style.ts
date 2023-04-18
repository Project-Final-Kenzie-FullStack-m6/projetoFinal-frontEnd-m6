import styled from "styled-components";

export const StyledHeaderAdvertiser = styled.div`
  background-color: ${({ theme }) => theme.colors.grey.g8};
  height: 360px;

  .background {
    height: 170px;
    background-color: ${({ theme }) => theme.colors.brand.b1};
  }

  .divCard {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    strong {
      padding: 5px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.brand.b4};
      color: ${({ theme }) => theme.colors.brand.b1};
      font-weight: 600;
      font-size: 14px;
    }
    div {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: -125px;
      width: 80%;
      max-width: 1000px;
      min-height: 220px;
      background-color: white;
      border-radius: 4px;
      padding: 25px;
      gap: 22px;

      .profile {
        width: 60px;
        height: 60px;
        font-size: 20px;
      }
      .createAd {
        border: 1px solid ${({ theme }) => theme.colors.brand.b1};
        background-color: ${({ theme }) => theme.colors.grey.whiteFixed};
        margin-top: 10px;
      }
    }
  }

  @media (max-width: 530px) {
    /* height: 420px; */
    .divCard {
      div {
        top: -145px;
      }
    }
  }
  @media (max-width: 362px) {
    height: 405px;
  }
`;
