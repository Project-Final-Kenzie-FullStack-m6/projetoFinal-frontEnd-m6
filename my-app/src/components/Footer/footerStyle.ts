import styled from "styled-components";
const FooterStyle = styled.footer`

background:  ${({theme}) => theme.colors.grey.g0};
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 45px 59px;
gap: 10px;
display: flex;



div>img{
    width:153.02px;
    height:26.34px
}

p{
    font-family: ${({theme}) => theme.typography.fontFamily};;
    font-style: normal;
    font-weight: ${({theme}) => theme.typography.fontWeight.weight400};
    font-size: ${({theme}) => theme.typography.fontSize.size14px};
    line-height: 24px;
    color:  ${({theme}) => theme.colors.grey.whiteFixed};
}

div{
    display:flex
}
a{
    background:  ${({theme}) => theme.colors.grey.g1};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    width: 53px;
    height: 50px;
}

@media (max-width: 640px) {
    & {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 45px 59px;
    gap: 60px;
    }
}
`


export default FooterStyle