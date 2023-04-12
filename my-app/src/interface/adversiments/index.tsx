import { iUser } from "../users";

interface iImageResponse {
    imageUrl: string;
}

interface iAdversimentDataResponse {
    id: string;
    brand: string;
    model: string;
    age: number;
    fuelType: string;
    mileAge: number;
    price: number;
    color: string;
    images: iImageResponse;
    user: iUser
}


interface iAdversimentProviderProps {
    children: React.ReactNode
}

interface iAdversimentContextProps {


    //loading
    loading?: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>

    //globals
    adversimentData: iAdversimentDataResponse[]
    setAdversimentData: React.Dispatch<React.SetStateAction<iAdversimentDataResponse[]>>
    

}





export type {iAdversimentContextProps, iAdversimentProviderProps, iAdversimentDataResponse}