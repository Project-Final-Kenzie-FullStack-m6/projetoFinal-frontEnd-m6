import { useState,useEffect } from "react";
import Footer from "../../components/Footer";
import { CardAdversiment } from "../../components/cardAdverstiment";
import { Header } from "../../components/header";
import HeaderAdvertiser from "./headerAdvertiser";
import { StyledPageAdvertiser } from "./style";
import { useNavigate } from "react-router-dom";
import CreateAdversimentModal from "../../components/modals/createAdversimentModal";

const PageAdvertiser = () => {
const navigate= useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
        navigate("/");
    }
}, [navigate]);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <StyledPageAdvertiser>
      {showModal ? <CreateAdversimentModal handleShowModal={handleShowModal} /> : <></>}
      <Header />
      <HeaderAdvertiser showModal={showModal} handleShowModal={handleShowModal} />
      <CardAdversiment />
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
