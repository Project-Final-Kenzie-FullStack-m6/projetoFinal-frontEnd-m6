import motorShop from "../../assets/motorsShop.png";
import { Button } from "../button/style.button";
import { StyledHeader } from "./style.header";
import { HiOutlineMenu } from "react-icons/hi";

export const Header = () => {
  return (
    <StyledHeader className="headerMobile">
      <img src={motorShop} alt="logo MotorShop" />
      {window.innerWidth > 900 ? (
        <div>
          <Button className="login" font="grey-7-8">
            Fazer login
          </Button>
          <Button font="grey-7-8">Cadastrar</Button>
        </div>
      ) : (
        <div className="divIcon">
          <HiOutlineMenu className="ola" />
        </div>
      )}
    </StyledHeader>
  );
};
