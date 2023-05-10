import { Header } from "../../components/header";
import Adversiment from "./adversiment";
import AdversimentMobile from "./adversimentMobile";
import { StyledDetailsPage } from "./style.detailsAdversiment";
import { useMediaQuery } from "react-responsive";

const DetailsAdversiment = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: "1200px" });

  const searchParams = new URLSearchParams(window.location.search);
  const userId = searchParams.get("id");

  return (
    <>
      {isSmallScreen ? (
        <StyledDetailsPage>
          <Header />
          <AdversimentMobile id={userId} />
        </StyledDetailsPage>
      ) : (
        <StyledDetailsPage>
          <Header />
          <Adversiment id={userId} />
        </StyledDetailsPage>
      )}
    </>
  );
};

export default DetailsAdversiment;
