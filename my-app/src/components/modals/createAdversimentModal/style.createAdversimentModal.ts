import styled from "styled-components";

export const StyledContainer = styled.div`

    width: auto;
    height: auto;
    margin-top: 150px;
    padding: 18px 24px 18px 30px;
    background-color: ${({theme}) => theme.colors.grey.whiteFixed};
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
`

export const StyledBtnClose = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 17px;

    h1 {
        font-size: ${({theme}) => theme.typography.fontSize.size16px};
        color: ${({theme}) => theme.colors.grey.g1};
        font-weight: ${({theme}) => theme.typography.fontWeight.weight600};
    }

    button {
        color: ${({theme}) => theme.colors.grey.g4};
        background-color: transparent;
        font-size: ${({theme}) => theme.typography.fontSize.size16px};
    }

`

export const StyledTitle = styled.div`
    margin-bottom: 24px;
    h1{
        font-size: ${({theme}) => theme.typography.fontSize.size14px};
        color: ${({theme}) => theme.colors.grey.g1};
        font-weight: ${({theme}) => theme.typography.fontWeight.weight600};
    }
`

export const StyledFormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`

export const StyledForm = styled.form`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;

    label {
        display: flex;
        flex-direction: column;
        font-size: ${({theme}) => theme.typography.fontSize.size14px};
        color: ${({theme}) => theme.colors.grey.g1};
        font-weight: ${({theme}) => theme.typography.fontWeight.weight600};
    }

    .sideDivContainer {
        display: flex;
        width: 100%;
        margin-top: 24px;

        .sideOne{
            width: 50%;
        }

        .sideTwo{
            width: 50%;
        }
    }

    .divDescription {
        margin-top: 24px;
        margin-bottom: 24px;
    }
    //ADICIONAR COMPONENT TEXTAREA

    .btnAdd {
        width: 70%;
        height: 38px;
        margin-top: 24px;
        background-color: ${({ theme }) => theme.colors.brand.b4};
        font-size: ${({theme}) => theme.typography.fontSize.size14px};
        font-weight: ${({theme}) => theme.typography.fontWeight.weight600};
        color: ${({ theme }) => theme.colors.brand.b1};
    }

    .btnEvent {
        display: flex;
        justify-content: end;
        margin-top: 24px;
        gap: 10px;
    }

`

export const StyledDivErrors = styled.div`
    border: 1px transparent solid;
    width: 100%;
    height: 15px;
    span{
        font-size: ${({theme}) => theme.typography.fontSize.size12px};
    }

`