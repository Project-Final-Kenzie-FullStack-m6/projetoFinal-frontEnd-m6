import { useEffect, useState } from "react";
import { createContext } from "react";
import { Api2 } from "../../services/api";
import { iApiFipeDataResponse, iApiFipeProviderProps, iApifipeContextProps } from "../../interface/ApiFipe";


export const ApiFipeContext = createContext({} as iApifipeContextProps);

const ApiFipeProvider = ({children}: iApiFipeProviderProps) => {
    
    const [ApiFipeData, setApiFipeData] = useState([] as iApiFipeDataResponse[])
    const [DataCars, setDataCars] = useState([] as any)
    const [DataModelCar, setDataModelCar] = useState([] as any)
    
    const [Brand, setBrand] = useState([] as any)

    const loadApiFipe = async () => {
        try {
            const {data} = await Api2.get("/cars")
            setApiFipeData(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        loadApiFipe()
    }, [])
    
    const searchBrand = async (event: any) => {
        const inviteCar = event.target.value
        try {
            const {data} = await Api2.get(`/cars/?brand=${inviteCar}`)
            setDataCars(data)
        } catch (error) {
            console.error(error)
        }
        setBrand(inviteCar)
    }

    const searchModel = async (event: any) => {
        const inviteModel = event.target.value
        const filter = DataCars.map((data:any) => data).filter((data: any) => data.name === inviteModel)
        setDataModelCar(filter)
    } 

    
    return (
        <ApiFipeContext.Provider value={{
            setApiFipeData,
            searchBrand,
            searchModel,
            DataModelCar,
            Brand,
            ApiFipeData,
            DataCars
        }}>
            {children}
        </ApiFipeContext.Provider>
    )
} 

export default ApiFipeProvider;