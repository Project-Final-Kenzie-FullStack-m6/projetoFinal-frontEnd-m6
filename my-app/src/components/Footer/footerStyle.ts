import styled from "styled-components";
import typography from "../../styles/typography";
import colors from "../../styles/colors";

const FooterStyle = styled.footer`

background: #0B0D0D;
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
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
}

div{
    color:white;
    display:flex
}
a{
    background: #212529;
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