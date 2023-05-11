import styled from "styled-components";

export const StyledPageAdvertiser = styled.main`
  background-color: ${({ theme }) => theme.colors.grey.g8};

  .divCard {
    display: flex;
    justify-content: center;
  }

  .divAdversiment {
    width: 100%;
    margin: 20px;
  }

  .ulAds {
    width: 100%;
    max-height: 1140px;

    display: flex;
    gap: 40px;
    -webkit-box-pack: center;
    justify-content: start;
    flex-wrap: wrap;
    max-width: 1500px;
  }

  .pagination {
    padding: 85px 0 65px;
    width: 100%;
    /* max-width: 1100px; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    h4 {
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.grey.g4};
      strong {
        color: ${({ theme }) => theme.colors.grey.g3};
      }
    }

    button {
      color: ${({ theme }) => theme.colors.brand.b1};
      font-weight: 600;
      font-size: 17px;
      background: none;
      padding: 5px;
      width: unset;
      height: unset;
    }
  }
  .ocultTag {
    display: none;
  }
`;
