import { createContext, useContext, useEffect, useState } from "react";
import { Api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { iAdversimentContextProps, iAdversimentDataResponse, iAdversimentProviderProps } from "../../interface/adversiments";


export const adversimentContext = createContext({} as iAdversimentContextProps);

const AdversimentProvider = ({children}: iAdversimentProviderProps) => {
    const [adversimentData, setAdversimentData] = useState([] as iAdversimentDataResponse[])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        async function loadAdversiment() {

            try {
                const {data} = await Api.get("/adversiments")

                setAdversimentData(data)
                setLoading(true)
            } catch (error) {
                console.error(error)
            }
            setLoading(false)
        }
        loadAdversiment()
    }, [])

    return (
        <adversimentContext.Provider value={{

                setAdversimentData, 
                setLoading, 
                adversimentData,
                loading
            
            }}>
                {children}
            </adversimentContext.Provider>
    )
}

export default AdversimentProvider