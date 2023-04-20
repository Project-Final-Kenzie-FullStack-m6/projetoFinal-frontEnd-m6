

interface iApiFipeDataResponse{
    name: string;
}

interface iApiFipeProviderProps {
    children: React.ReactNode
}


interface iApifipeContextProps {

    ApiFipeData: iApiFipeDataResponse[]
    setApiFipeData: React.Dispatch<React.SetStateAction<iApiFipeDataResponse[]>>
    DataCars: any
    DataModelCar: any
    Brand: any
    searchBrand: (event: any) => Promise<void>
    searchModel: (event: any) => Promise<void>
}
    

export type {iApiFipeDataResponse, iApiFipeProviderProps, iApifipeContextProps}