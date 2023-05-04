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

  //get unique adversiment
  getDetailsAdversiment: (id: string | undefined) => Promise<void>

  //delete adversiment
  deleteAdversiment: () => Promise<void>

  imageBase64:iImageResponse[]
  setImageBase64:React.Dispatch<React.SetStateAction<iImageResponse[]>>
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

// interface iFiltersContextProps {
//   activeGenerals: boolean;
//   activeFiat: boolean;
//   activeFord: boolean;
//   activeHonda: boolean;
//   activePorsche: boolean;
//   activeVolswagen: boolean;
//   activeCivic: boolean;
//   activeCorolla: boolean;
//   activeCruze: boolean;
//   activeFit: boolean;
//   activeGol: boolean;
//   activeKa: boolean;
//   activeOnix: boolean;
//   activePorscheModel: boolean;
//   activeAzul: boolean;
//   activeBranca: boolean;
//   activeCinza: boolean;
//   activePrata: boolean;
//   activePreta: boolean;
//   activeVerde: boolean;
//   active2022: boolean;
//   active2021: boolean;
//   active2018: boolean;
//   active2015: boolean;
//   active2013: boolean;
//   active2012: boolean;
//   active2010: boolean;
//   activeDiesel: boolean;
//   activeEtanol: boolean;
//   activeGasolina: boolean;
//   activeFlex: boolean;
//   activeKmMax: boolean;
//   activeKmMin: boolean;
//   activePriceMin: boolean;
//   activePriceMax: boolean;
//   setActiveGenerals: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveFiat: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveFord: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveHonda: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveKa: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveVolswagen: React.Dispatch<React.SetStateAction<boolean>>;
//   setActivePorsche: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveOnix: React.Dispatch<React.SetStateAction<boolean>>;
//   setActivePorscheModel: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveAzul: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveBranca: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveCinza: React.Dispatch<React.SetStateAction<boolean>>;
//   setActivePrata: React.Dispatch<React.SetStateAction<boolean>>;
//   setActivePreta: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveVerde: React.Dispatch<React.SetStateAction<boolean>>;
//   setActive2022: React.Dispatch<React.SetStateAction<boolean>>;
//   setActive2021: React.Dispatch<React.SetStateAction<boolean>>;
//   setActive2018: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveDiesel: React.Dispatch<React.SetStateAction<boolean>>;
//   setActive2015: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveCruze: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveCorolla: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveCivic: React.Dispatch<React.SetStateAction<boolean>>;
//   setActive2013: React.Dispatch<React.SetStateAction<boolean>>;
//   setActive2012: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveFit: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveGol: React.Dispatch<React.SetStateAction<boolean>>;
//   setActive2010: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveEtanol: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveGasolina: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveFlex: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveKmMax: React.Dispatch<React.SetStateAction<boolean>>;
//   setActiveKmMin: React.Dispatch<React.SetStateAction<boolean>>;
//   setActivePriceMax: React.Dispatch<React.SetStateAction<boolean>>;
//   setActivePriceMin: React.Dispatch<React.SetStateAction<boolean>>;
// }

export type {
  iAdversimentContextProps,
  // iFiltersContextProps,
  iAdversimentProviderProps,
  iFiltersProviderProps,
  iAdversimentDataResponse,
  iAdversimentDataRegister,
  iAdversimentDataUpdate
};
