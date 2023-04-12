import { Header } from "../../components/header";
import { HeaderImage } from "../../components/headerImage";
import { MainHome } from "./mainHome";
import { StyledHomePage } from "./style";

const Homepage = () => {
  return (
    <StyledHomePage>
      <Header />
      <HeaderImage />
      <MainHome />
    </StyledHomePage>
  );
};

export default Homepage;
