import { createContext, useContext, useEffect, useState } from "react";
import { Api, Api2 } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import {
  iAdversimentContextProps,
  iAdversimentDataRegister,
  iAdversimentDataResponse,
  iAdversimentProviderProps,
} from "../../interface/adversiments";

export const AdversimentContext = createContext({} as iAdversimentContextProps);

const AdversimentProvider = ({ children }: iAdversimentProviderProps) => {
  const [adversimentData, setAdversimentData] = useState([] as iAdversimentDataResponse[]);
  const [filterBrand, setFilterBrand] = useState("");
  const [filterModel, setFilterModel] = useState("");
  const [filterColor, setFilterColor] = useState("");
  const [filterAge, setFilterAge] = useState(0);
  const [filterFuel, setFilterFuel] = useState("");
  const [filterKM, setFilterKM] = useState(false);
  const [filterPrice, setFilterPrice] = useState(false);
  const [ModalAddOpen, setModalAddOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const loadAdversiment = async () => {
    try {
      if (filterBrand) {
        const listFilter = adversimentData.filter((data) => data.brand === filterBrand);
        setAdversimentData(listFilter);
      } else if (filterModel) {
        const listFilter = adversimentData.filter((data) => data.model === filterModel);
        setAdversimentData(listFilter);
      } else if (filterColor) {
        const listFilter = adversimentData.filter((data) => data.color === filterColor);
        setAdversimentData(listFilter);
      } else if (filterAge) {
        const listFilter = adversimentData.filter((data) => data.age === filterAge);
        setAdversimentData(listFilter);
      } else if (filterFuel) {
        const listFilter = adversimentData.filter((data) => data.fuelType === filterFuel);
        setAdversimentData(listFilter);
      } else if (filterKM) {
      } else if (filterPrice) {
      } else {
        const { data } = await Api.get("/adversiments");
        setAdversimentData(data);
      }
      setLoading(true);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  //   const loadAdversiment = async () => {
  //     try {
  //       const { data } = await Api.get("/adversiments");
  //       setAdversimentData(data);
  //       setLoading(true);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //     setLoading(false);
  //   };

  useEffect(() => {
    loadAdversiment();
  }, []);

  // const loadOnlyMyAdversiment = async () => {
  //     try {
  //         const {data} = await Api.get("/adversiments")
  //         setAdversimentData(data)
  //         setLoading(true)
  //     } catch (error) {
  //         console.error(error)
  //     }
  //     setLoading(false)
  // }

  const postNewAdversiment = async (data: iAdversimentDataRegister) => {
    try {
      await Api.post("/adversiments", data);
      loadAdversiment();
      //falta toast
      setModalAddOpen(false);
    } catch (error) {
      //falta toast
      console.error(error);
    }
  };

  return (
    <AdversimentContext.Provider
      value={{
        postNewAdversiment,
        setAdversimentData,
        setLoading,
        setModalAddOpen,
        setFilterBrand,
        setFilterModel,
        setFilterColor,
        setFilterAge,
        setFilterFuel,
        setFilterKM,
        setFilterPrice,
        filterBrand,
        adversimentData,
        loading,
        ModalAddOpen,
      }}
    >
      {children}
    </AdversimentContext.Provider>
  );
};

export default AdversimentProvider;
