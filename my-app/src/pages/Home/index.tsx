import Footer from "../../components/Footer";
import { Header } from "../../components/header";
import { HeaderImage } from "../../components/headerImage";
import { MainHome } from "./mainHome";
import { StyledHomePage } from "./style";

const HomepageDesktop = () => {
  return (
    <StyledHomePage>
      <Header />
      <HeaderImage />
      <MainHome />
      <Footer />
    </StyledHomePage>
  );
};

export default HomepageDesktop;
