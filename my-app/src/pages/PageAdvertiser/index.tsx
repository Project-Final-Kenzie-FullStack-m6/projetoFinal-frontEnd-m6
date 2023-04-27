import { useState,useEffect } from "react";
import Footer from "../../components/Footer";
import { CardAdversiment } from "../../components/cardAdverstiment";
import { Header } from "../../components/header";
import HeaderAdvertiser from "./headerAdvertiser";
import { StyledPageAdvertiser } from "./style";
import { useNavigate } from "react-router-dom";
import CreateAdversimentModal from "../../components/modals/adversiments/createAdversimentModal";
import jwtDecode from "jwt-decode";

const PageAdvertiser = () => {
const navigate= useNavigate()
const token:any = localStorage.getItem("token");
const decodedToken:any = jwtDecode(token);
const searchParams = new URLSearchParams(window.location.search);
const userId = searchParams.get("id");
const owner = decodedToken.sub === userId
console.log(userId)
useEffect(() => {
  if (!token||!userId) {
    navigate("/");
  }
}, [navigate,token,userId]);
const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <StyledPageAdvertiser>
      {showModal ? <CreateAdversimentModal handleShowModal={handleShowModal} /> : <></>}
      <Header />
      <HeaderAdvertiser owner={owner} showModal={showModal} handleShowModal={handleShowModal} />
      <CardAdversiment owner={owner}/>
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
