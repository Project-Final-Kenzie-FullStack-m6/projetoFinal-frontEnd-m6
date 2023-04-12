import { AiOutlineLoading3Quarters } from "react-icons/all"
import Container from "./atyle.loadingPage"


const LoadingPage = () => {
    return(
        <>
        <Container>

            <div className="animationLoading">{<AiOutlineLoading3Quarters/>}</div>

        </Container>
        </>
    )
}

export default LoadingPage