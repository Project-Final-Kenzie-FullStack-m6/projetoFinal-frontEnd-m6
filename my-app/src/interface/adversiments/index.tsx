import { iCommentDataRequest, iCommentDataResponse } from "../comments";
import { iUser } from "../users";

export interface iImageResponse {
  imageUrl: string;
}
interface iImageResponse1 {
  imageUrl: string;
}
interface iImageResponse2 {
  imageUrl: string;
}



interface iAdversimentDataRegister {
  id: string;
  brand: string;
  model: string;
  age: number;
  fipe: string;
  fuelType: string;
  mileAge: number;
  price: string;
  color: string;
  description: string;
  images: [iImageResponse];
  user: iUser;
}


interface iAdversimentDataUpdate {
  id?: string;
  brand?: string;
  model?: string;
  age?: number;
  fipe?: string;
  fuelType: string;
  mileAge?: number;
  price?: string;
  color?: string;
  description?: string;
  images?: [iImageResponse, iImageResponse1, iImageResponse2];
  isActive?: boolean;
  user?: iUser;
  comments?: [iCommentDataResponse]
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
  isActive: boolean;
  description: string;
  images: [iImageResponse];
  user: iUser;
}

interface iAdversimentProviderProps {
  children: React.ReactNode;
}
interface iFiltersProviderProps {
  children: React.ReactNode;
}

interface iAdversimentContextProps {
  //post adversiment
  postNewAdversiment: (data: iAdversimentDataRegister) => Promise<void>;

  //post comment
  createCommentUser: (data: iCommentDataRequest) => Promise<void>

  //update adversiment
  updateAdversiment: (data: iAdversimentDataUpdate) => Promise<void>

  //update comments
  updateCommentUser: (data: iCommentDataRequest) => Promise<void>

  //get unique adversiment
  getDetailsAdversiment: (id: string | undefined) => Promise<void>

  //delete adversiment
  deleteAdversiment: () => Promise<void>

  imageBase64:iImageResponse[]
  setImageBase64:React.Dispatch<React.SetStateAction<iImageResponse[]>>

  //delete comment
  deleteCommentUser: () => Promise<void>

  // retrieved comments Ids
  handleIdComment: (data: any) => void
  
  //globals

  loading?: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  adversimentData: iAdversimentDataResponse[];
  filterAdversiments: iAdversimentDataResponse[];
  setAdversimentData: React.Dispatch<React.SetStateAction<iAdversimentDataResponse[]>>;
  setFilterAdversiments: React.Dispatch<React.SetStateAction<iAdversimentDataResponse[]>>;

  ModalAddOpen?: boolean;
  setModalAddOpen: React.Dispatch<React.SetStateAction<boolean>>;

  setFilterBrand: React.Dispatch<React.SetStateAction<string>>;
  setFilterModel: React.Dispatch<React.SetStateAction<string>>;
  setFilterColor: React.Dispatch<React.SetStateAction<string>>;
  setFilterAge: React.Dispatch<React.SetStateAction<number>>;
  setFilterFuel: React.Dispatch<React.SetStateAction<string>>;
  setFilterKM: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterPrice: React.Dispatch<React.SetStateAction<boolean>>;
  filterBrand: string;
  filterModel: string;
  filterColor: string;
  filterAge: number;
  filterFuel: string;
  filterKM: boolean;
  filterPrice: boolean;
  activeFilter: boolean;
  setActiveFilter: React.Dispatch<React.SetStateAction<boolean>>;
  listBrands: string[];

  detailsAds: iAdversimentDataUpdate
  isActive: boolean
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export type {
  iAdversimentContextProps,
  iAdversimentProviderProps,
  iFiltersProviderProps,
  iAdversimentDataResponse,
  iAdversimentDataRegister,
  iAdversimentDataUpdate
};
