import motorShop from "../../assets/motorsShop.png";
import { Button } from "../button/style.button";
import { StyledHeader } from "./style.header";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const navigate = useNavigate();

  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
  const isSmallScreen = useMediaQuery({ minWidth: "900px" });
  return (
    <StyledHeader className="headerMobile">
      <img src={motorShop} onClick={() => navigate("/")} alt="logo MotorShop" />
      {window.location.pathname === "/" ? (
        <>
          {isSmallScreen ? (
            <div>
              <Button className="login" font="grey-7-8" onClick={() => navigate("/login")}>
                Fazer login
              </Button>
              <Button font="grey-7-8" onClick={() => navigate("/register")}>
                Cadastrar
              </Button>
            </div>
          ) : (
            <>
              {sideBar ? (
                <>
                  <div className="divIcon">
                    <HiOutlineMenu onClick={showSideBar} />
                  </div>
                  <div className="showBtnsOn">
                    <Button className="login" font="grey-7-8" onClick={() => navigate("/login")}>
                      Fazer login
                    </Button>
                    <Button font="grey-7-8" onClick={() => navigate("/register")}>
                      Cadastrar
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="divIcon">
                    <HiOutlineMenu onClick={showSideBar} />
                  </div>
                  <div className="showBtnsOff">
                    <Button className="login" onClick={() => navigate("/login")} font="grey-7-8">
                      Fazer login
                    </Button>
                    <Button font="grey-7-8" onClick={() => navigate("/register")}>
                      Cadastrar
                    </Button>
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
                    {/* <Link to={"/login"}> Fazer Login</Link> */}
                    <Button className="login" onClick={() => navigate("/login")} font="grey-7-8">
                      Fazer login
                    </Button>
                    <Button font="grey-7-8" onClick={() => navigate("/register")}>
                      Cadastrar
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="divIcon">
                    <HiOutlineMenu onClick={showSideBar} />
                  </div>
                  <div className="showBtnsOff">
                    <Button className="login" onClick={() => navigate("/login")} font="grey-7-8">
                      Fazer login
                    </Button>
                    <Button font="grey-7-8" onClick={() => navigate("/register")}>
                      Cadastrar
                    </Button>
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
