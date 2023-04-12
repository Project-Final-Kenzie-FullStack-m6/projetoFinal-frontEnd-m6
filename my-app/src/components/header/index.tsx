import motorShop from "../../assets/motorsShop.png";
import { Button } from "../button/style.button";
import { StyledHeader } from "./style.header";

export const Header = () => {
  return (
    <StyledHeader>
      <img src={motorShop} alt="logo MotorShop" />
      <div>
        <Button className="login" font="grey-7-8">
          Fazer login
        </Button>
        <Button font="grey-7-8">Cadastrar</Button>
      </div>
    </StyledHeader>
  );
};
