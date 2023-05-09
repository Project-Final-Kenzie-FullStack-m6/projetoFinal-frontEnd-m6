import styled from "styled-components";
import bmw from "../../../assets/bmw.png";

export const StyledHomePageMobile = styled.main`
  .sideBarOff {
    display: none;
  }

  .sideBarOn {
    background-color: ${({ theme }) => theme.colors.grey.whiteFixed};
    position: absolute;
    top: 70px;
    padding-top: 25px;
    width: 50%;
    min-width: 320px;
    z-index: 1;
    height: 1650px;
    box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.grey.g3};
    div {
      flex-direction: row;
    }
    .divView {
      display: flex;
      justify-content: center;

      button {
        margin-top: 20px;
        color: white;
        width: 185px;
        height: 45px;
      }
    }
  }

  .divClose {
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 30px;
    margin-bottom: 25px;
    font-size: 25px;
    h3 {
      font-size: 20px;
    }
  }

  .mobileVersion {
    max-height: 1265px;
  }
  
  .cardList {
    width: 100%;
    .ulAdversiment {
      justify-content: center;
    }
    .divMobileFilter {
      padding: 55px 0px 55px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;

      button {
        color: white;
        width: 185px;
        height: 45px;
      }
    }
    .pagination {
      padding: 0;
    }
  }

  @media (max-width: 715px) {
    .ulAdversiment {
      margin: 0 25px;
      display: flex;
      height: 450px;
      flex-direction: column;
      flex-wrap: nowrap;
      overflow-y: scroll;
    }
  }

  /* @media (max-width: 570px) {
    .headerImageMobile {
      background: url(${bmw}) center center / 98% no-repeat;
      div {
        justify-content: start;
        align-items: center;
        text-align: center;
        p {
          margin: 0 20px;
          line-height: 30px;
        }
      }
    }
  } */

  /* .headerMobile {
    padding: 0 25px;
  } */
`;
