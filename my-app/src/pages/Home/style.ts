import styled from "styled-components";

export const StyledHomePage = styled.main``;
export const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  margin-top: 50px;

  .cardList {
    width: 75%;
    .ulAdversiment {
      width: 100%;
      display: flex;
      gap: 40px 50px;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    .bold {
      color: red;
    }
    .liAdversiment {
      width: 300px;

      p {
        margin-top: 10px;
        height: 50px;
        max-height: 50px;
        overflow-y: clip;
      }
    }
    .pagination {
      padding: 85px 0 65px;
      width: 100%;
      max-width: 1100px;
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
      h3 {
        color: ${({ theme }) => theme.colors.brand.b1};
      }
    }
  }

  .filters {
    width: 25%;
    .divButton {
      margin: 20px 0px 35px 40px;
      display: flex;
      gap: 20px;
    }
    button {
      padding: 0;
      margin-top: 0;
      border: none;
      width: 100px;
      height: 27px;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.grey.g3};
    }
    h2 {
      font-weight: 600;
      font-size: 25px;
      line-height: 35px;
      margin-left: 30px;
    }
    ul {
      padding: 12px 0px 35px;

      .bold {
        color: ${({ theme }) => theme.colors.grey.g1};
        font-weight: 600;
      }
    }
    li {
      font-weight: 500;
      font-size: 17px;
      line-height: 25px;
      color: ${({ theme }) => theme.colors.grey.g3};
      margin-left: 40px;
    }
  }
  @media (max-width: 1125px) {
    .divButton {
      display: flex;
      flex-direction: column;
    }
  }
`;
