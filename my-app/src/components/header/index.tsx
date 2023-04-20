import motorShop from "../../assets/motorsShop.png";
import { Button } from "../button/style.button";
import { StyledHeader } from "./style.header";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate()

  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
  return (
    <StyledHeader className="headerMobile">
      <img src={motorShop}onClick={()=>navigate("/")} alt="logo MotorShop" />
      {window.location.pathname === "/home" ? (
        <>
          {window.innerWidth > 900 ? (
            <div>
              <Button className="login" font="grey-7-8" onClick={()=>navigate("/login")}>
                Fazer login
              </Button>
              <Button font="grey-7-8" onClick={()=>navigate("/register")}>Cadastrar</Button>
            </div>
          ) : (
            <>
              {sideBar ? (
                <>
                  <div className="divIcon">
                    <HiOutlineMenu onClick={showSideBar} />
                  </div>
                  <div className="showBtnsOn">
                    <Button className="login" font="grey-7-8" onClick={()=>navigate("/login")}>
                      Fazer login
                    </Button>
                    <Button font="grey-7-8"onClick={()=>navigate("/register")}>Cadastrar</Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="divIcon">
                    <HiOutlineMenu onClick={showSideBar} />
                  </div>
                  <div className="showBtnsOff">
                    <Button className="login" onClick={()=>navigate("/login")} font="grey-7-8"
                    >
                      Fazer login
                    </Button>
                    <Button font="grey-7-8"onClick={()=>navigate("/register")}>Cadastrar</Button>
                  </div>
                </>
              )}
            </>
          )}
        </>
      ) : (
        <>
          {window.innerWidth > 900 ? (
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
                    <Button className="login" onClick={()=>navigate("/login")} font="grey-7-8">
                      Fazer login
                    </Button>
                    <Button font="grey-7-8"onClick={()=>navigate("/register")}>Cadastrar</Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="divIcon">
                    <HiOutlineMenu onClick={showSideBar} />
                  </div>
                  <div className="showBtnsOff">
                    <Button className="login" onClick={()=>navigate("/login")} font="grey-7-8">
                      Fazer login
                    </Button>
                    <Button font="grey-7-8"onClick={()=>navigate("/register")}>Cadastrar</Button>
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
