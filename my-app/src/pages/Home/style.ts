import styled from "styled-components";

export const StyledHomePage = styled.main``;
export const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  margin-top: 50px;

  .cardList {
    width: 75%;
    /* max-width: 1300px; */
    .ulAdversiment {
      width: 100%;
      display: flex;
      gap: 0 50px;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    .liAdversiment {
      width: 300px;
      height: 400px;
    }
  }

  .filters {
    width: 25%;
    .divButton {
      margin: 15px 0 20px 40px;
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
      color: #868e96;
    }
    h2 {
      font-weight: 600;
      font-size: 25px;
      line-height: 35px;
      margin-left: 30px;
    }
    ul {
      padding: 15px 0 20px 0;
    }
    li {
      font-weight: 500;
      font-size: 17px;
      line-height: 25px;
      color: #868e96;
      margin-left: 40px;
    }
  }
`;
