import motorShop from "../../assets/motorsShop.png";
import { Button } from "../button/style.button";
import { StyledHeader } from "./style.header";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
  const isSmallScreen = useMediaQuery({ maxWidth: "900px" });
  return (
    <StyledHeader className="headerMobile">
      <img src={motorShop} alt="logo MotorShop" />
      {window.location.pathname === "/home" ? (
        <>
          {isSmallScreen ? (
            <div>
              <Button className="login" font="grey-7-8">
                Fazer login
              </Button>
              <Button font="grey-7-8">Cadastrar</Button>
            </div>
          ) : (
            <>
              {sideBar ? (
                <>
                  <div className="divIcon">
                    <HiOutlineMenu onClick={showSideBar} />
                  </div>
                  <div className="showBtnsOn">
                    <Button className="login" font="grey-7-8">
                      Fazer login
                    </Button>
                    <Button font="grey-7-8">Cadastrar</Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="divIcon">
                    <HiOutlineMenu onClick={showSideBar} />
                  </div>
                  <div className="showBtnsOff">
                    <Button className="login" font="grey-7-8">
                      Fazer login
                    </Button>
                    <Button font="grey-7-8">Cadastrar</Button>
                  </div>
                </>
              )}
            </>
          )}
        </>
      ) : (
        <>
          {isSmallScreen ? (
            <div className="divNameUser">
              <Button font="ball-0-2">SL</Button>
              <span>Samuel Leão</span>
            </div>
          ) : (
            <>
              {sideBar ? (
                <>
                  <div className="divIcon">
                    <HiOutlineMenu onClick={showSideBar} />
                  </div>
                  <div className="showBtnsOn">
                    <Button className="login" font="grey-7-8">
                      Fazer login
                    </Button>
                    <Button font="grey-7-8">Cadastrar</Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="divIcon">
                    <HiOutlineMenu onClick={showSideBar} />
                  </div>
                  <div className="showBtnsOff">
                    <Button className="login" font="grey-7-8">
                      Fazer login
                    </Button>
                    <Button font="grey-7-8">Cadastrar</Button>
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}
    </StyledHeader>
  );
};
