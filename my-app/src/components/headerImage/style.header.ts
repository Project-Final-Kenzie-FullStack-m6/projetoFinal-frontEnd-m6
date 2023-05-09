import styled from "styled-components";
import lambo from "../../assets/lambo.jpg";
export const StyledImageHeader = styled.div`
  height: 500px;

  background: no-repeat center/cover url(${lambo});
  background-size: 100%;

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

  div {
    /* width: 100vw; */
    height: 500px;

    max-height: 350px;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
    opacity: 0.8;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  div h1 {
    color: white;
    font-style: normal;
    font-weight: 600;
    /* font-size: 34px;
    line-height: 56px; */

    font-size: 26px;
    line-height: 56px;
  }
  div p {
    color: white;
    font-style: normal;
    font-weight: 500;
    /* font-size: 32px;
    line-height: 56px; */

    font-size: 24px;
    line-height: 56px;
  }

  @media (max-width: 900px) {
    background: url(${lambo}) center center / 300% no-repeat;
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
`;
