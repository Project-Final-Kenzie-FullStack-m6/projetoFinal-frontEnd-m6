import { useEffect } from "react";
import Footer from "../../components/Footer";
import { CardAdversiment } from "../../components/cardAdverstiment";
import { Header } from "../../components/header";
import HeaderAdvertiser from "./headerAdvertiser";
import { StyledPageAdvertiser } from "./style";
import { useNavigate } from "react-router-dom";

const PageAdvertiser = () => {
const navigate= useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
        navigate("/");
    }
}, [navigate]);
  return (
    <StyledPageAdvertiser>
      <Header />
      <HeaderAdvertiser />
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
