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
// const userId = props.match.params.id;
const token:any = localStorage.getItem("token");

useEffect(() => {
  if (!token) {
      navigate("/");
    }
  }, [navigate,token]);
  const [showModal, setShowModal] = useState(false);
  

  const decodedToken:any = jwtDecode(token);
  const searchParams = new URLSearchParams(window.location.search);
  const userId = searchParams.get("id");

  const teste = decodedToken.sub === userId
  console.log(teste)



  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <StyledPageAdvertiser>
      {showModal ? <CreateAdversimentModal handleShowModal={handleShowModal} /> : <></>}
      <Header />
      <HeaderAdvertiser owner={teste} showModal={showModal} handleShowModal={handleShowModal} />
      <CardAdversiment owner={teste}/>
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
