import { createContext, useContext, useEffect, useState } from "react";
import { Api, Api2 } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import {
  iAdversimentContextProps,
  iAdversimentDataRegister,
  iAdversimentDataResponse,
  iAdversimentProviderProps,
  iImageResponse,
} from "../../interface/adversiments";

export const AdversimentContext = createContext({} as iAdversimentContextProps);

const AdversimentProvider = ({ children }: iAdversimentProviderProps) => {
  const [adversimentData, setAdversimentData] = useState([] as iAdversimentDataResponse[]);
  const [filterAdversiments, setFilterAdversiments] = useState([] as iAdversimentDataResponse[]);
  const [filterBrand, setFilterBrand] = useState("");
  const [filterModel, setFilterModel] = useState("");
  const [filterColor, setFilterColor] = useState("");
  const [imageBase64, setImageBase64] = useState<[]>([]);
  const [filterAge, setFilterAge] = useState(0);
  const [filterFuel, setFilterFuel] = useState("");
  const [filterKM, setFilterKM] = useState(false);
  const [filterPrice, setFilterPrice] = useState(false);
  const [ModalAddOpen, setModalAddOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState(false);
  const [listBrands, setListBrands] = useState([]);

  // const arrBrands: any = [];
  // adversimentData.map((data) => {
  //   if (!arrBrands.includes(data.brand)) {
  //     arrBrands.push(data.brand);
  //   }
  // });
  // setListBrands(arrBrands);

  const loadAdversiment = async () => {
    try {
      const { data } = await Api.get("/adversiments");
      setAdversimentData(data);
      setFilterAdversiments(data);
      if (filterBrand) {
        if (activeFilter) {
          const listFilter = adversimentData.filter((data) => data.brand === filterBrand);
          setFilterAdversiments(listFilter);
          console.log(filterBrand);
        } else {
          setAdversimentData(data);
          setFilterBrand("");
          console.log(filterBrand);
        }
      } else if (filterModel) {
        if (activeFilter) {
          const listFilter = adversimentData.filter((data) => data.model === filterModel);
          setFilterAdversiments(listFilter);
        } else {
          setAdversimentData(data);
          setFilterModel("");
        }
      } else if (filterColor) {
        if (activeFilter) {
          const listFilter = adversimentData.filter((data) => data.color === filterColor);
          setFilterAdversiments(listFilter);
        } else {
          setAdversimentData(data);
          setFilterColor("");
        }
      } else if (filterAge) {
        if (activeFilter) {
          const listFilter = adversimentData.filter((data) => data.age === filterAge);
          setFilterAdversiments(listFilter);
        } else {
          setAdversimentData(data);
          setFilterAge(0);
        }
      } else if (filterFuel) {
        if (activeFilter) {
          const listFilter = adversimentData.filter((data) => data.fuelType === filterFuel);
          setFilterAdversiments(listFilter);
        } else {
          setAdversimentData(data);
          setFilterFuel("");
        }
      } else if (filterKM) {
      } else if (filterPrice) {
      } else {
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
    // setListBrands(arrBrands);
    // }, []);
  }, [
    filterBrand,
    filterModel,
    filterColor,
    filterAge,
    filterFuel,
    filterKM,
    filterPrice,
    activeFilter,
  ]);

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
    const newData = {...data,images:imageBase64}
console.log(imageBase64)
    try {
      const response =await Api.post("/adversiments", newData);
      loadAdversiment();
      //falta toast
      setModalAddOpen(false);
      console.log(response.data)
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
        activeFilter,
        setActiveFilter,
        filterAdversiments,
        setFilterAdversiments,
        listBrands,
        imageBase64,
        setImageBase64
      }}
    >
      {children}
    </AdversimentContext.Provider>
  );
};

export default AdversimentProvider;
