import styled from "styled-components";

const LoginStyle = styled.div`
    width: 100vw;
    height: 76vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.grey.g8};
    padding: 16px;

h2{
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;

}
button{
    margin-top: 10%;
    width: 100%;
}
input{
    margin-top: 0;
}
h4{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.grey.g2};
    align-self: center;
    margin-top: 5%;
}
.otherButton{
    height: 48px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.grey.g10};
    border: 1px solid ${({ theme }) => theme.colors.grey.g5};
    transition: all 0.8s ease 0s;
    color: ${({ theme }) => theme.colors.grey.g0};
    font-size: 16px;
    font-weight: 600;
    align-content: center;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 0px;
}
label{
    margin-top: 25px;
    margin-bottom: 5px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: ${({ theme }) => theme.colors.grey.g1}

}
span{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    margin-left: 55%;
    color: ${({ theme }) => theme.colors.grey.g2};
    margin-top: 3%;
}
span:hover{cursor: pointer;}

.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 44px 48px;
    gap: 15px;
    background: white;
    border-radius: 4px; 
}
form{
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.grey.whiteFixed};
}
`



export default LoginStyle