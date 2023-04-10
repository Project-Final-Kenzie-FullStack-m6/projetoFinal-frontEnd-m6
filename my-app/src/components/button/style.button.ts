import styled, {css} from "styled-components"
import { iStyleProps } from "../../interface/styled"

const Button = styled.button`

    ${({font}: iStyleProps) => {
        switch(font) {
            //COLOR - TYPE - ID
            case 'black-0-1':
                return css`
                    width: 146px;
                    height: 48px;
                    padding: 12px 28px 12px 28px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.grey.g0};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.whiteFixed};
                    font-size: ${({theme}) => theme.typography.fontSize.size16px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9)
                    }
                `
            case 'black-1-2':
                return css`
                    width: 119px;
                    height: 38px;
                    padding: 12px 20px 12px 20px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.grey.g0};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.whiteFixed};
                    font-size: ${({theme}) => theme.typography.fontSize.size14px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9)
                    }
                `
            case 'grey-0-1':
                return css`
                    width: 146px;
                    height: 48px;
                    padding: 12px 28px 12px 28px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.grey.g6};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.grey.g2};
                    font-size: ${({theme}) => theme.typography.fontSize.size16px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9)
                    }
                `
            case 'grey-1-2':
                return css`
                    width: 146px;
                    height: 48px;
                    padding: 12px 28px 12px 28px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.grey.g5};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.grey.g2};
                    font-size: ${({theme}) => theme.typography.fontSize.size16px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9)
                    }
                `
            case 'grey-2-3':
                return css`
                    width: 146px;
                    height: 48px;
                    padding: 12px 28px 12px 28px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.grey.g5};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.whiteFixed};
                    font-size: ${({theme}) => theme.typography.fontSize.size16px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9)
                    }
                `
            case 'grey-3-4':
                return css`
                    width: 119px;
                    height: 38px;
                    padding: 12px 20px 12px 20px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.grey.g6};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.grey.g2};
                    font-size: ${({theme}) => theme.typography.fontSize.size14px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9)
                    }
                `
            case 'grey-4-5':
                return css`
                    width: 119px;
                    height: 38px;
                    padding: 12px 20px 12px 20px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.grey.g5};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.grey.g2};
                    font-size: ${({theme}) => theme.typography.fontSize.size14px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9)
                    }
                `
            case 'grey-5-6':
                return css`
                    width: 119px;
                    height: 38px;
                    padding: 12px 20px 12px 20px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.grey.g5};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.whiteFixed};
                    font-size: ${({theme}) => theme.typography.fontSize.size14px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9)
                    }
                `
        }
    }}
`

export {Button}