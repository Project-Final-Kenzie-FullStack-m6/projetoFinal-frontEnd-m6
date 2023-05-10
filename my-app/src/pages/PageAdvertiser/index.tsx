import { useState,useEffect, useContext } from "react";
import Footer from "../../components/Footer";
import { CardAdversiment } from "../../components/cardAdverstiment";
import { Header } from "../../components/header";
import HeaderAdvertiser from "./headerAdvertiser";
import { StyledPageAdvertiser } from "./style";
import { useNavigate } from "react-router-dom";
import CreateAdversimentModal from "../../components/modals/adversiments/createAdversimentModal";
import * as S from "../../components/cardAdverstiment/style.cardAdversiment";
import { UserContext } from "../../contexts/AuthUserContext/userContext";

const PageAdvertiser = () => {
  const {userData}= useContext(UserContext)
const navigate= useNavigate()
const logeedId:any = localStorage.getItem("userId");
const searchParams = new URLSearchParams(window.location.search);
const userId = searchParams.get("id");
const owner = logeedId === userId

useEffect(() => {
  if (!userId) {
    navigate("/");
  }else if(userData.id === userId&&userData.isSeller !==true){
    navigate("/")
  }
}, [navigate,userId, userData]);
const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <StyledPageAdvertiser>
      {showModal ? <CreateAdversimentModal handleShowModal={handleShowModal} /> : <></>}
      <Header />
      <HeaderAdvertiser owner={owner} showModal={showModal} handleShowModal={handleShowModal} />
      <div className="divAdversiment">
        <section className="cardList">
          <S.Container className="mobileVersion">
            <ul className="ulAdversiment" style={{marginLeft: 50}}>
              <CardAdversiment owner={owner} id={userId}/>
            </ul>
          </S.Container>
        </section>
      </div>
      <div className="pagination">
        <h4>
          <strong>1</strong> de 2
        </h4>
        <h3>{"Seguinte >"}</h3>
      </div>
      <Footer />
    </StyledPageAdvertiser>
  );
};

export default PageAdvertiser;
