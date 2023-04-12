import styled from "styled-components";

export const Container = styled.div`

    width: 312px;
    height: 420px;
    display: flex;

    ul {

        li {
            display: flex;
            flex-direction: column;
            div{
                width: 100%;
            }
        }
    }

    .divImg {
        width: 100%;
        height: 152px;
        background-color: ${({ theme }) => theme.colors.grey.g7};
        img {
            width: 262px;
            height: 100%;
        }
    }

    .divModelDescription {
        display: flex;
        flex-direction: column;

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
        span{
            font-size: ${({ theme }) => theme.typography.fontSize.size14px};
            color: ${({ theme }) => theme.colors.grey.g2};
            font-weight: ${({ theme }) => theme.typography.fontWeight.weight500};
        }
    }

    .divMileAgePrice {
        display: flex;
        justify-content: space-around;
        div {
            display: flex;
            gap: 10px;
            span{
                width: 51px;
                height: 32px;
                border-radius: 4px;
                background-color: ${({ theme }) => theme.colors.brand.b4};
                color: ${({ theme }) => theme.colors.brand.b1};
                font-weight: ${({ theme }) => theme.typography.fontWeight.weight500};
            }
        }

        span{
            font-size: ${({ theme }) => theme.typography.fontSize.size20px};
            color: ${({ theme }) => theme.colors.grey.g1};
            font-weight: ${({ theme }) => theme.typography.fontWeight.weight500};
        }
    }
`

