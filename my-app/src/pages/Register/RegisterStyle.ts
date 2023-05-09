import styled from "styled-components";

const RegisterStyle = styled.div`
    width: 100vw;
    height: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.grey.g8};
    padding: 16px;

button{
    margin-top: 10%;
    width: 100%;
}
input{
    margin-top: 0;
}
h3{
    margin-top: 30px;
}
.error{
    font-size: 13px;
    color:${({ theme }) => theme.colors.feedBack.alert1};
}
.birthDate{
    width: 315px;
          height: 48px;
          padding: 0px 16px 0px 16px;
          border-radius: 4px;
          background-color: ${({ theme }) => theme.colors.grey.g9};
          transition: 0.5s;
          margin-top: 1rem;
          color: ${({ theme }) => theme.colors.whiteFixed};
          font-size: ${({ theme }) => theme.typography.fontSize.size16px};
          font-weight: ${({ theme }) => theme.typography.fontWeight.weight400};
          border: 1px solid ${({ theme }) => theme.colors.grey.g5};
}
.doisInputs>button{

width: 152px;
height: 48px;
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
#desc{
    width: 282px;
}
.doisInputs{
display: flex;
flex-direction: row;
gap: 20px;
}
.posicionamento{
    display: flex;
    flex-direction: column;
    width: 148px;
}
.posicionamento>input{
    width: 100%;
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

export default RegisterStyle