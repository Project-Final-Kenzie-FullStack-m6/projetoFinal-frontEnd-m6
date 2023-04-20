import styled from "styled-components";

export const StyledPageAdvertiser = styled.main`
  background-color: ${({ theme }) => theme.colors.grey.g8};
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
`;
