import { iUser } from "../users";

interface iImageResponse {
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

interface iAdversimentDataResponse {
  id: string;
  brand: string;
  model: string;
  age: number;
  fuelType: string;
  mileAge: number;
  price: number;
  color: string;
  description: string;
  images: [iImageResponse];
  user: iUser;
}

interface iAdversimentProviderProps {
  children: React.ReactNode;
}

interface iAdversimentContextProps {
  //post adversiment
  postNewAdversiment: (data: any) => Promise<void>;

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
  filterBrand: any;
  renderFilter: boolean;
  setRenderFilter: React.Dispatch<React.SetStateAction<boolean>>;
  listBrands: string[];
}

export type {
  iAdversimentContextProps,
  iAdversimentProviderProps,
  iAdversimentDataResponse,
  iAdversimentDataRegister,
};
