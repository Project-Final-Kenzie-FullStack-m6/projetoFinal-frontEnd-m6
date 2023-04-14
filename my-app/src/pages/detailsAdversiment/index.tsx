import Footer from "../../components/Footer"
import { Header } from "../../components/header"
import Adversiment from "./adversiment"
import AdversimentMobile from "./adversimentMobile"
import { StyledDetailsPage } from "./style.detailsAdversiment"
import { useMediaQuery } from "react-responsive"

const DetailsAdversiment = () => {
    const isSmallScreen = useMediaQuery({maxWidth:'1200px'});
    
    return (
        <>

            {isSmallScreen ? 
            
            <StyledDetailsPage>
            <Header/>
            <AdversimentMobile/>
            </StyledDetailsPage>  

            : 
            
            <StyledDetailsPage>
            <Header/>
            <Adversiment/>
            </StyledDetailsPage>  
            
            }
        </>
       
    )
}

export default DetailsAdversiment
