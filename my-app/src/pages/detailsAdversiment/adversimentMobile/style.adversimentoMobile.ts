import styled from "styled-components";

const StyledContainer = styled.main`
    display: flex;
    flex-direction: column;
    
    .divMain {
        width: 100%;
        gap: 46px;
        display: flex;
        background: linear-gradient(to bottom, 
            ${({ theme }) => theme.colors.brand.b1} 55%, 
            ${({ theme }) => theme.colors.grey.g8} 90%);
    
        .divSideOne{
            width: 80%;
            margin-top: 40px;
            margin: 0 auto;
            margin-top: 40px;
            display: flex;
            flex-direction: column;
            gap: 16px;

            .divImagePrimary{
                height: 355px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: ${({ theme }) => theme.colors.grey.g10};
                border-radius: 4px;
                img {
                    padding: 10px;
                    width: 50%;
                    max-width: 100%;
                    height: auto;
                    border-radius: 15px;
                }
            }

            .divDetails{
                height: 239.39px;
                border-radius: 4px;
                background-color: ${({ theme }) => theme.colors.grey.g10};
                padding: 44px;

                h1{
                    margin-bottom: 46px;
                    font-size: ${({ theme }) => theme.typography.fontSize.size20px};
                    color: ${({ theme }) => theme.colors.grey.g1};
                    font-weight: ${({ theme }) => theme.typography.fontWeight.weight600};
                    }

                    .divAgePrice{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 28px;
                    
                    div{
                        display: flex;
                        gap: 10px;
                        span {
                            width: auto;
                            padding: 5px;
                            width: 51px;
                            height: 32px;
                            border-radius: 4px;
                            background-color: ${({ theme }) => theme.colors.brand.b4};
                            color: ${({ theme }) => theme.colors.brand.b1};
                            font-weight: ${({ theme }) => theme.typography.fontWeight.weight600};
                            font-size: ${({ theme }) => theme.typography.fontSize.size14px};
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                    span {
                        color: ${({ theme }) => theme.colors.grey.g1};
                        font-weight: ${({ theme }) => theme.typography.fontWeight.weight500};
                        font-weight: 500;
                        font-size: ${({ theme }) => theme.typography.fontSize.size20px};
                        line-height: 20px;
                        width: 140px;
                    }
                    }
            }

            .divDescription {

                padding: 36px 44px;
                height: 213px;
                border-radius: 4px;
                background-color: ${({ theme }) => theme.colors.grey.g10};

                h1 {
                    margin-bottom: 32px;
                    color: ${({ theme }) => theme.colors.grey.g1};
                    font-size: ${({ theme }) => theme.typography.fontSize.size20px};
                    font-weight: ${({ theme }) => theme.typography.fontWeight.weight600};
                }

                p { 
                    color: ${({ theme }) => theme.colors.grey.g2};
                    font-size: ${({ theme }) => theme.typography.fontSize.size16px};
                    font-weight: ${({ theme }) => theme.typography.fontWeight.weight400};
                }

    
            }

            .divCommentsBox {
                height: 557px;
                border-radius: 4px;
                background-color: ${({ theme }) => theme.colors.grey.g10};
                padding: 36px 44px;
                height: auto;
                max-height: 700px;

                h1 {
                    margin-bottom: 28px;
                    color: ${({ theme }) => theme.colors.grey.g1};
                    font-size: ${({ theme }) => theme.typography.fontSize.size20px};
                    font-weight: ${({ theme }) => theme.typography.fontWeight.weight600};
                }

                .divComments{
                    display: flex;
                    flex-direction: column;
                    max-width: 663px;
                    gap: 20px;

                    div{
                        display: flex;
                        align-items: center;
                        gap: 16px;
                        //adicionar a esfera aqui nessa div
                        .span1 {
                            color: ${({ theme }) => theme.colors.grey.g1};
                            font-size: ${({ theme }) => theme.typography.fontSize.size14px};
                            font-weight: ${({ theme }) => theme.typography.fontWeight.weight600};
                        }
                        .span2 {
                            margin-bottom: 6px;
                            color: ${({ theme }) => theme.colors.grey.g3};
                            font-size: ${({ theme }) => theme.typography.fontSize.size12px};
                            font-weight: ${({ theme }) => theme.typography.fontWeight.weight600};
                        }
                    }
                    p {
                        margin-bottom: 48px;
                        color: ${({ theme }) => theme.colors.grey.g3};
                        font-size: ${({ theme }) => theme.typography.fontSize.size12px};
                        font-weight: ${({ theme }) => theme.typography.fontWeight.weight400};
                    }

                    .divBoxInfoUserComments {
                        display: flex;
                        justify-content: space-between;
                    }

                    .divBtnEvent{
                        display: flex;
                        gap: 10px;
                        z-index: 0;
                    }
                }

                @media screen and (min-height: 700px) {
                    overflow: auto;

                    ::-webkit-scrollbar{
                        width: 10px;
                    }

                    ::-webkit-scrollbar-track {

                        box-shadow: inset 0 0 5px ${({ theme }) => theme.colors.grey.g3};
                        border-radius: 0px;
                    }

                    ::-webkit-scrollbar-thumb {
                        background: ${({ theme }) => theme.colors.brand.b2}; 
                        border-radius: 4px;
                    }

                    ::-webkit-scrollbar-thumb:hover {
                        background: ${({ theme }) => theme.colors.brand.b1};
                    }
                }
            }

            .divPostComment {
                height: 289px;
                padding: 36px 44px;
                border-radius: 4px;
                margin-bottom: 30px;
                background-color: ${({ theme }) => theme.colors.grey.g10};

                div{
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 19px;
                    //adicionar UM COMPONENTE esfera aqui nessa div
                    span {
                        color: ${({ theme }) => theme.colors.grey.g1};
                        font-size: ${({ theme }) => theme.typography.fontSize.size14px};
                        font-weight: ${({ theme }) => theme.typography.fontWeight.weight500};
                    }
                }

                //ADICIONAR UM COMPONENTE TEXTAREA
                textarea{
                    width: 90%;
                    height: 130px;
                    border-radius: 4px;
                    border: 1px solid ${({ theme }) => theme.colors.brand.b3};
                    color: ${({ theme }) => theme.colors.brand.b2};
                    font-size: ${({ theme }) => theme.typography.fontSize.size16px};
                    padding: 10px;
                    &::placeholder {
                        color: ${({ theme }) => theme.colors.grey.g3};
                    }
                    &:focus {
                        border: 1px solid ${({ theme }) => theme.colors.brand.b2};
                    }
                    &:hover {
                        filter: brightness(0.95);
                    }
                }

                .divBtnEvent {
                    display: flex;
                    margin-top: 10px;
                    .btn1 {
                        width: 101px;
                        height: 24px;
                        background-color: ${({ theme }) => theme.colors.grey.g7};
                        font-size: ${({ theme }) => theme.typography.fontSize.size12px};
                        border-radius: 24px;
                        color: ${({ theme }) => theme.colors.grey.g3};
                        
                    }
                    .btn2 {
                        width: 66px;
                        height: 24px;
                        background-color: ${({ theme }) => theme.colors.grey.g7};
                        font-size: ${({ theme }) => theme.typography.fontSize.size12px};
                        border-radius: 24px;
                        color: ${({ theme }) => theme.colors.grey.g3};
                    }
                    .btn3 {
                        width: 218px;
                        height: 24px;
                        background-color: ${({ theme }) => theme.colors.grey.g7};
                        font-size: ${({ theme }) => theme.typography.fontSize.size12px};
                        border-radius: 24px;
                        color: ${({ theme }) => theme.colors.grey.g3};
                    }
                }
            }

            .divImagesSecondary {
                width: 100%;
                height: 377px;
                border-radius: 4px;
                background-color: ${({ theme }) => theme.colors.grey.g10};
                padding: 44px;
                
                .divTitle {
    
                    h1 {
                        color: ${({ theme }) => theme.colors.grey.g1};
                        font-size: ${({ theme }) => theme.typography.fontSize.size20px};
                        font-weight: ${({ theme }) => theme.typography.fontWeight.weight600};
                    }
                }
    
                .divImages {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: start;
                    margin-top: 32px;
                    gap: 14px;
                    
                    div {
                        background-color: ${({ theme }) => theme.colors.grey.g7};
                        width: 30%;
                        max-width: 100%;
                        height: auto;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        img{
                            border-radius: 4px;
                            width: 100%;
                            max-width: 100%;
                            height: auto;
                        }
                    }

                    @media screen and (max-width: 1652px) {
                            width: 100%;
                            justify-content: center;   
                    }
                }
            }
        
            .divDetailsUser {
                height: 426px;
                border-radius: 4px;
                background-color: ${({ theme }) => theme.colors.grey.g10};
                padding: 37px 44px;
    
                div{
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    align-items: center;
                    justify-content: center;
                    //adicionar UM COMPONENTE esfera aqui nessa div
                    span {
                        color: ${({ theme }) => theme.colors.grey.g1};
                        font-size: ${({ theme }) => theme.typography.fontSize.size20px};
                        font-weight: ${({ theme }) => theme.typography.fontWeight.weight600};

                        @media screen and (max-width: 1200px) {
                            font-size: 2.5vmin;
                        }
                        @media screen and (max-width: 768px) {
                            font-size: 2.1vmin;
                        }
                        @media screen and (max-width: 414px) {
                            font-size: 3.8vmin;
                        }
                    }
    
                    p {
                        text-align: center;
                        max-width: 352px;
                        color: ${({ theme }) => theme.colors.grey.g2};
                        font-size: ${({ theme }) => theme.typography.fontSize.size16px};
                        font-weight: ${({ theme }) => theme.typography.fontWeight.weight400};

                        @media screen and (max-width: 1200px) {
                            font-size: 2vmin;
                        }
                        @media screen and (max-width: 768px) {
                            font-size: 2.1vmin;
                        }
                        @media screen and (max-width: 414px) {
                            font-size: 3.8vmin;
                        }
                    }
    
                    .button2{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 60%;
                        height: 48px;
                        border-radius: 4px;
                        background-color: ${({ theme }) => theme.colors.grey.g0};
                        color: ${({ theme }) => theme.colors.grey.whiteFixed};
                        font-size: ${({ theme }) => theme.typography.fontSize.size16px};
                        font-weight: ${({ theme }) => theme.typography.fontWeight.weight600};

                        @media screen and (max-width: 1200px) {
                            font-size: 3vmin;
                            width: 60%;
                        }
                        @media screen and (max-width: 768px) {
                            font-size: 2.1vmin;
                        }
                        @media screen and (max-width: 414px) {
                            font-size: 3.8vmin;
                            height: 11vmin;
                        }
                    }
                }
            }
        }
    }
`
export default StyledContainer;