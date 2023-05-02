import {useContext} from "react"
import { Outlet } from "react-router-dom"
import LoadingPage from "../loadingPage"
import { AdversimentContext } from "../../contexts/adversimentContext"

const ProtectedRoutes = () => {
    
    const {loading} = useContext(AdversimentContext)

    if(loading){
        return <LoadingPage/>
    }

    return <Outlet/>
}


export default ProtectedRoutes