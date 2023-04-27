import styled from "styled-components";

export const Container = styled.div`
  /* width: 312px; */
  /* height: 420px; */
  max-width: 90%;
  max-height: 1425px;
  overflow-y: hidden;
  display: flex;
  gap: 48px;
  justify-content: flex-start;
  flex-wrap: wrap;

  ul {
    display: flex;
    li {
      display: flex;
      flex-direction: column;
      div {
        width: 100%;
      }
    }
  }

  .divImg {
    width: 100%;
    height: 145px;
    background-color: ${({ theme }) => theme.colors.grey.g7};
    display: flex;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }

  .divModelDescription {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    h3 {
      font-size: ${({ theme }) => theme.typography.fontSize.size16px};
      color: ${({ theme }) => theme.colors.grey.g1};
      font-weight: ${({ theme }) => theme.typography.fontWeight.weight600};
    }

    p {
      font-size: ${({ theme }) => theme.typography.fontSize.size14px};
      line-height: 24px;
      color: ${({ theme }) => theme.colors.grey.g1};
      font-weight: ${({ theme }) => theme.typography.fontWeight.weight400};
    }
  }

  .divNameUser {
    display: flex;
    justify-content: start;
    gap: 5px;
    margin: 0px 0px 10px 0px;
    span {
      font-size: ${({ theme }) => theme.typography.fontSize.size16px};
      color: ${({ theme }) => theme.colors.grey.g2};
      font-weight: ${({ theme }) => theme.typography.fontWeight.weight500};
      display: flex;
      align-items: center;
    }
  }

  .divMileAgePrice {
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      display: flex;
      gap: 10px;
      span {
        width: auto;
        padding: 5px;
        height: 32px;
        border-radius: 4px;
        background-color: ${({ theme }) => theme.colors.brand.b4};
        color: ${({ theme }) => theme.colors.brand.b1};
        font-weight: ${({ theme }) => theme.typography.fontWeight.weight600};
        font-size: 13px;
        line-height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    span {
      font-size: ${({ theme }) => theme.typography.fontSize.size16px};
      color: ${({ theme }) => theme.colors.grey.g1};
      font-weight: ${({ theme }) => theme.typography.fontWeight.weight600};
    }
  }

  .ulAdversiment {
    width: 100%;
    display: flex;
    gap: 40px 50px;
    -webkit-box-pack: center;
    justify-content: start;
    flex-wrap: wrap;
    max-width: 1500px;
  }

  .liAdversiment {
    margin: 10px 0;
    width: 300px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.grey.whiteFixed};
    box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.grey.g3};

    .divInfos {
      padding: 0 10px 0px 10px;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;

      .divAdm {
        display: flex;
        gap: 10px;
        button {
          border: 1px solid ${({ theme }) => theme.colors.grey.g1};
          width: unset;
          height: unset;
          padding: 7px 20px;
          font-size: 14px;
        }
      }
    }

    p {
      margin-top: 10px;
      height: 50px;
      max-height: 50px;
      overflow-y: clip;
    }
  }

  @media (max-width: 715px) {
    .ulAdversiment {
      margin: 0 25px;
      display: flex;
      justify-content: unset;
      padding-left: 10px;
      /* flex-direction: column; */
      flex-wrap: nowrap;
      overflow-y: scroll;
    }
  }
`;
