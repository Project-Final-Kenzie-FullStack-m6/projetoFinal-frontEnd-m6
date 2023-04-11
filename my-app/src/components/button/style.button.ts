import styled, {css} from "styled-components"
import { iStyleProps } from "../../interface/styled"

const Button = styled.button`

    ${({font}: iStyleProps) => {
        switch(font) {
            //COLOR - TYPE - ID
            //COLOR BACK
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
                        filter: brightness(0.9);
                    }
                `
            case 'black-1-2':
                return css`
                    width: 146px;
                    height: 48px;
                    padding: 12px 28px 12px 28px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.grey.g1};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.grey.whiteFixed};
                    font-size: ${({theme}) => theme.typography.fontSize.size16px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                    }
                `
            case 'black-2-3':
                return css`
                    width: 146px;
                    height: 48px;
                    padding: 12px 28px 12px 28px;
                    border-radius: 4px;
                    border: solid 2px solid ${({theme}) => theme.colors.grey.g1};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.grey.g0};
                    font-size: ${({theme}) => theme.typography.fontSize.size16px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                        background-color: ${({theme}) => theme.colors.grey.g1};
                        color: ${({theme}) => theme.colors.grey.g10};
                    }
                `

            case 'black-3-4':
                return css`
                    width: 146px;
                    height: 48px;
                    padding: 12px 28px 12px 28px;
                    border-radius: 4px;
                    border: solid 2px solid ${({theme}) => theme.colors.grey.g5};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.grey.g0};
                    font-size: ${({theme}) => theme.typography.fontSize.size16px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                        background-color: ${({theme}) => theme.colors.grey.g1};
                        color: ${({theme}) => theme.colors.grey.g10};
                    }
                `
            
            case 'black-4-5':
                return css`
                    width: 119px;
                    height: 38px;
                    padding: 12px 20px 12px 20px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.grey.g0};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.grey.whiteFixed};
                    font-size: ${({theme}) => theme.typography.fontSize.size14px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                    }
                `

            case 'black-5-6':
                return css`
                    width: 119px;
                    height: 38px;
                    padding: 12px 20px 12px 20px;
                    border-radius: 4px;
                    border: solid 2px solid ${({theme}) => theme.colors.grey.g1};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.grey.g0};
                    font-size: ${({theme}) => theme.typography.fontSize.size14px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                        background-color: ${({theme}) => theme.colors.grey.g1};
                        color: ${({theme}) => theme.colors.grey.g10};
                    }
                `

            case 'black-6-7':
                return css`
                    width: 119px;
                    height: 38px;
                    padding: 12px 20px 12px 20px;
                    border-radius: 4px;
                    border: solid 2px solid ${({theme}) => theme.colors.grey.g5};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.grey.g0};
                    font-size: ${({theme}) => theme.typography.fontSize.size14px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                        background-color: ${({theme}) => theme.colors.grey.g1};
                        color: ${({theme}) => theme.colors.grey.g10};
                    }
                `

            case 'black-8-9':
                return css`
                    width: 119px;
                    height: 38px;
                    padding: 12px 20px 12px 20px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.grey.g1};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.grey.whiteFixed};
                    font-size: ${({theme}) => theme.typography.fontSize.size14px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                    }
                `
            //COLOR - TYPE - ID
            //COLOR GREY
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
                        filter: brightness(0.9);
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
                        filter: brightness(0.9);
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
                    color: ${({theme}) => theme.colors.grey.whiteFixed};
                    font-size: ${({theme}) => theme.typography.fontSize.size16px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                    }
                `
            case 'grey-3-4':
                return css`
                    width: 146px;
                    height: 48px;
                    padding: 12px 28px 12px 28px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.grey.g10};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.grey.g1};
                    font-size: ${({theme}) => theme.typography.fontSize.size16px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                    }
                `
            case 'grey-4-5':
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
                        filter: brightness(0.9);
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
                    color: ${({theme}) => theme.colors.grey.g2};
                    font-size: ${({theme}) => theme.typography.fontSize.size14px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                    }
                `
            case 'grey-6-7':
                return css`
                    width: 119px;
                    height: 38px;
                    padding: 12px 20px 12px 20px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.grey.g5};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.grey.whiteFixed};
                    font-size: ${({theme}) => theme.typography.fontSize.size14px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                    }
                `
            case 'grey-7-8':
                return css`
                    width: 119px;
                    height: 38px;
                    padding: 12px 20px 12px 20px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.grey.g10};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.grey.g1};
                    font-size: ${({theme}) => theme.typography.fontSize.size14px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                    }
                `
            //COLOR - TYPE - ID
            //Color BRAND
            case 'brand-0-1':
                return css`
                    width: 146px;
                    height: 48px;
                    padding: 12px 28px 12px 28px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.brand.b1};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.grey.whiteFixed};
                    font-size: ${({theme}) => theme.typography.fontSize.size16px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                    }
                `
            case 'brand-1-2':
                return css`
                    width: 146px;
                    height: 48px;
                    padding: 12px 28px 12px 28px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.brand.b2};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.whiteFixed};
                    font-size: ${({theme}) => theme.typography.fontSize.size16px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                    }
                `
            case 'brand-2-3':
                return css`
                    width: 146px;
                    height: 48px;
                    padding: 12px 28px 12px 28px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.brand.b4};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.brand.b1};
                    font-size: ${({theme}) => theme.typography.fontSize.size16px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                    }
                `

            case 'brand-3-4':
                return css`
                    width: 146px;
                    height: 48px;
                    padding: 12px 28px 12px 28px;
                    border-radius: 4px;
                    border: solid 2px solid ${({theme}) => theme.colors.brand.b1};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.brand.b1};
                    font-size: ${({theme}) => theme.typography.fontSize.size16px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                        background-color: ${({theme}) => theme.colors.brand.b4};
                    }
                `
            
            case 'brand-4-5':
                return css`
                    width: 119px;
                    height: 38px;
                    padding: 12px 20px 12px 20px;
                    border-radius: 4px;
                    border: solid 2px solid ${({theme}) => theme.colors.brand.b1};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.brand.b1};
                    font-size: ${({theme}) => theme.typography.fontSize.size14px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                        background-color: ${({theme}) => theme.colors.brand.b4};
                    }
                `
            case 'brand-6-7':
                return css`
                    width: 119px;
                    height: 38px;
                    padding: 12px 20px 12px 20px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.brand.b1};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.grey.whiteFixed};
                    font-size: ${({theme}) => theme.typography.fontSize.size14px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                    }
                `
            case 'brand-8-9':
                return css`
                    width: 119px;
                    height: 38px;
                    padding: 12px 20px 12px 20px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.brand.b2};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.whiteFixed};
                    font-size: ${({theme}) => theme.typography.fontSize.size14px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                    }
                `
            case 'brand-10-11':
                return css`
                    width: 119px;
                    height: 38px;
                    padding: 12px 20px 12px 20px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.brand.b4};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.brand.b1};
                    font-size: ${({theme}) => theme.typography.fontSize.size14px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                    }
                `
            //COLOR - TYPE - ID
            //Color RED

            case 'red-0-1':
                return css`
                    width: 146px;
                    height: 48px;
                    padding: 12px 28px 12px 28px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.feedBack.alert3};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.feedBack.alert1};
                    font-size: ${({theme}) => theme.typography.fontSize.size16px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                        background-color: ${({theme}) => theme.colors.feedBack.alert2};
                    }
                `
            
            case 'red-1-2':
                return css`
                    width: 119px;
                    height: 38px;
                    padding: 12px 20px 12px 20px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.feedBack.alert3};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.feedBack.alert1};
                    font-size: ${({theme}) => theme.typography.fontSize.size14px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                        background-color: ${({theme}) => theme.colors.feedBack.alert2};
                    }
                `
            //COLOR - TYPE - ID
            //Color GREEN
            case 'green-0-1':
                return css`
                    width: 146px;
                    height: 48px;
                    padding: 12px 28px 12px 28px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.feedBack.success3};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.feedBack.success1};
                    font-size: ${({theme}) => theme.typography.fontSize.size16px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                        background-color: ${({theme}) => theme.colors.feedBack.success2};
                    }
                `
            
            case 'green-1-2':
                return css`
                    width: 119px;
                    height: 38px;
                    padding: 12px 20px 12px 20px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.feedBack.success3};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.feedBack.success1};
                    font-size: ${({theme}) => theme.typography.fontSize.size14px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                        background-color: ${({theme}) => theme.colors.feedBack.success2};
                    }
                `

            //COLOR - TYPE - ID
            //Color PURPLE

            case 'purple-0-1':
                return css`
                    width: 146px;
                    height: 48px;
                    padding: 12px 28px 12px 28px;
                    border-radius: 4px;
                    background-color: ${({theme}) => theme.colors.brand.b3};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.brand.b4};
                    font-size: ${({theme}) => theme.typography.fontSize.size16px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight600};

                    &:hover {
                        filter: brightness(0.9);
                    }
            `

            //COLOR - TYPE - ID
            //BOTÃO REDONDO
            //Color BRAND

            case 'ball-0-1':
                return css`
                    width: 32px;
                    height: 32px;
                    padding: 0px;
                    border-radius: 150px;
                    background-color: ${({theme}) => theme.colors.brand.b2};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.grey.whiteFixed};
                    font-size: ${({theme}) => theme.typography.fontSize.size14px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight500};

                    &:hover {
                        filter: brightness(0.9);
                    }
            `

            case 'ball-0-2':
                return css`
                    width: 32px;
                    height: 32px;
                    padding: 0px;
                    border-radius: 150px;
                    background-color: ${({theme}) => theme.colors.brand.b5};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.grey.whiteFixed};
                    font-size: ${({theme}) => theme.typography.fontSize.size14px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight500};

                    &:hover {
                        filter: brightness(0.9);
                    }
            `

            //COLOR - TYPE - ID
            //BOTÃO DETALHES

            case 'detail':
                return css`
                    width: 55px;
                    height: 32px;
                    padding: 0px;
                    border-radius: 150px;
                    background-color: ${({theme}) => theme.colors.brand.b4};
                    transition: 0.8s;
                    margin-top: 1rem;
                    color: ${({theme}) => theme.colors.brand.b1};
                    font-size: ${({theme}) => theme.typography.fontSize.size14px};
                    font-weight: ${({theme}) => theme.typography.fontWeight.weight500};

                    &:hover {
                        filter: brightness(0.9);
                    }
            `
        }
    }}
`

export {Button}