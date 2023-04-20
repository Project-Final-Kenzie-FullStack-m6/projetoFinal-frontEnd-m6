import { createContext, useContext, useEffect, useState } from "react";
import { Api, Api2 } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { iAdversimentContextProps, iAdversimentDataRegister, iAdversimentDataResponse, iAdversimentProviderProps} from "../../interface/adversiments";


export const AdversimentContext = createContext({} as iAdversimentContextProps);

const AdversimentProvider = ({children}: iAdversimentProviderProps) => {
    const [adversimentData, setAdversimentData] = useState([] as iAdversimentDataResponse[])
    const [ModalAddOpen, setModalAddOpen] = useState<boolean>(false) 
    const [loading, setLoading] = useState<boolean>(false)

    const loadAdversiment = async () => {
        try {
            const {data} = await Api.get("/adversiments")
            setAdversimentData(data)
            setLoading(true)
        } catch (error) {
            console.error(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        loadAdversiment()
    }, [])


    const postNewAdversiment= async (data:iAdversimentDataRegister) => {
        try {
            await Api.post("/adversiments", data)
            loadAdversiment()
            //falta toast
            setModalAddOpen(false)
        } catch (error) {
            //falta toast
            console.error(error)
        }
    }

    return (
        <AdversimentContext.Provider value={{

            postNewAdversiment,
            setAdversimentData, 
            setLoading, 
            setModalAddOpen,
            adversimentData,
            loading,
            ModalAddOpen,
            
        }}>
        {children}
        </AdversimentContext.Provider>
    )
}

export default AdversimentProvider