import styled from "styled-components";
import bmw from "../../../assets/bmw.png";

export const StyledHomePageMobile = styled.main`
  .mobileVersion {
    max-height: 700px;
  }
  .headerMobile {
    height: 70px;
  }

  .headerImageMobile {
    max-height: 350px;

    div {
      max-height: 350px;
      h1 {
        font-size: 26px;
        line-height: 56px;
      }
      p {
        font-size: 24px;
        line-height: 56px;
      }
    }
  }
  .divIcon {
    border: none;
    font-size: 25px;
  }
  .filters {
    display: none;
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
      height: 350px;
      flex-direction: column;
      flex-wrap: nowrap;
      overflow-y: scroll;
    }
  }

  @media (max-width: 570px) {
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
  }

  .headerMobile {
    padding: 0 25px;
  }
`;
