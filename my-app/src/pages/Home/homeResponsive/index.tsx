import { useMediaQuery } from "react-responsive";
import { Header } from "../../../components/header";
import { HeaderImage } from "../../../components/headerImage";
import { MainHome } from "../mainHome";
import Footer from "../../../components/Footer";
import { StyledHomePageMobile } from "./style";
import HomepageDesktop from "..";

const HomePage = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: "900px" });

  return (
    <>
      {isSmallScreen ? (
        <StyledHomePageMobile>
          <Header />
          <HeaderImage />
          <MainHome />
          <Footer />
        </StyledHomePageMobile>
      ) : (
        <HomepageDesktop />
      )}
    </>
  );
};

export default HomePage;
