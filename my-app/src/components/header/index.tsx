import motorShop from "../../assets/motorsShop.png";
import { Button } from "../button/style.button";
import { StyledHeader } from "./style.header";
import { HiOutlineMenu } from "react-icons/hi";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import jwt_decode from "jwt-decode";
import UpdateAddressModal from "../modals/user/updateAddressUserModal";
import UpdateUserModal from "../modals/user/updateUserModal";
import { UserContext } from "../../contexts/AuthUserContext/userContext";

export const Header = () => {
  const navigate = useNavigate();
  const { setEditAdress,setEditProfile,editAdress,editProfile,userData} = useContext(UserContext);
  const token = localStorage.getItem("token")
  const userId = localStorage.getItem("userId")
  let isSeller = false
  if(token){
    const decodedToken:any = jwt_decode(token)
    isSeller=decodedToken.isSeller
  }
  
  const showEditProfile = () => setEditProfile(!editProfile);
  const showEditAdress = () => setEditAdress(!editAdress);
  const myAdversiments = ()=> navigate(`/advertiser?id=${userId}`)
  const logout = () => {localStorage.clear()
  navigate("/login")}
let bolinha = ""
if(userData.name){
  const teste:any = userData.name?.split("")
  bolinha =teste[0]+teste[1]
}

  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
  const isSmallScreen = useMediaQuery({ minWidth: "900px" });
  return (<>
    <StyledHeader className="headerMobile">
      <img src={motorShop} onClick={() => navigate("/")} alt="logo MotorShop" />
      {window.localStorage.token ? (
        <>
          {isSmallScreen ? (<>
          {isSeller?(<>{sideBar ?(<>
            <div className="divNameUser" onClick={showSideBar}>
              <Button font="ball-0-2">{bolinha}</Button>
              <span>{userData.name}</span>
            </div>
            <div className="showBtnsOn">
            <ul className="menuLogin">
              <li onClick={showEditProfile}>Editar Perfil</li>
              <li onClick={showEditAdress}>Editar endereço</li>
              <li onClick={myAdversiments}>Meus Anúncios</li>
              <li onClick={logout}>Sair</li>
            </ul>
          </div></>
             ) :(
             <div className="divNameUser" onClick={showSideBar}>
              <Button font="ball-0-2">{bolinha}</Button>
              <span>{userData.name}</span>
            </div>)}</>):(<>{sideBar ?(<>
            <div className="divNameUser" onClick={showSideBar}>
              <Button font="ball-0-2">{bolinha}</Button>
              <span>{userData.name}</span>
            </div>
            <div className="showBtnsOn">
            <ul className="menuLogin">
              <li onClick={showEditProfile}>Editar Perfil</li>
              <li onClick={showEditAdress}>Editar endereço</li>
              <li onClick={logout}>Sair</li>
            </ul>
          </div></>
             ) :(
             <div className="divNameUser" onClick={showSideBar}>
              <Button font="ball-0-2">{bolinha}</Button>
              <span>{userData.name}</span>
            </div>)}</>)}
            
           </>
          ) : (
            <>
              {isSeller ? (
                <>
                  {sideBar ? (
                    <>
                      <div className="divIcon">
                        <HiOutlineMenu onClick={showSideBar} />
                      </div>
                      <div className="showBtnsOn">
                        <ul className="menuLogin">
                          <li onClick={showEditProfile}>Editar Perfil</li>
                          <li onClick={showEditAdress}>Editar endereço</li>
                          <li onClick={myAdversiments}>Meus Anúncios</li>
                          <li onClick={logout}>Sair</li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="divIcon">
                        <HiOutlineMenu onClick={showSideBar} />
                      </div>
                      <div className="showBtnsOff"></div>
                    </>
                  )}
                </>
              ) : (
                <>
                  {sideBar ? (
                    <>
                      <div className="divIcon">
                        <HiOutlineMenu onClick={showSideBar} />
                      </div>
                      <div className="showBtnsOn">
                        <ul className="menuLogin">
                          <li onClick={showEditProfile}>Editar Perfil</li>
                          <li onClick={showEditAdress}>Editar endereço</li>
                          <li onClick={logout}>Sair</li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="divIcon">
                        <HiOutlineMenu onClick={showSideBar} />
                      </div>
                      <div className="showBtnsOff"></div>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      ) : (
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
      )}
    </StyledHeader>
    {editAdress?(<UpdateAddressModal/>):(<></>)}
    {editProfile?(<UpdateUserModal/>):(<></>)}
    </>
  );
};
