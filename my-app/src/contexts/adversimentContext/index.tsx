import { createContext, useContext, useEffect, useState } from "react";
import { Api, Api2 } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import {
  iAdversimentContextProps,
  iAdversimentDataRegister,
  iAdversimentDataResponse,
  iAdversimentDataUpdate,
  iAdversimentProviderProps,
} from "../../interface/adversiments";

export const AdversimentContext = createContext({} as iAdversimentContextProps);

const AdversimentProvider = ({ children }: iAdversimentProviderProps) => {
  const [adversimentData, setAdversimentData] = useState([] as iAdversimentDataResponse[]);
  const [filterAdversiments, setFilterAdversiments] = useState([] as iAdversimentDataResponse[]);
  const [filterBrand, setFilterBrand] = useState("");
  const [filterModel, setFilterModel] = useState("");
  const [filterColor, setFilterColor] = useState("");
  const [filterAge, setFilterAge] = useState(0);
  const [filterFuel, setFilterFuel] = useState("");
  const [filterKM, setFilterKM] = useState(false);
  const [filterPrice, setFilterPrice] = useState(false);
  const [ModalAddOpen, setModalAddOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [renderFilter, setRenderFilter] = useState(false);
  const [listBrands, setListBrands] = useState([]);
  const [detailsAds, setDetailsAds] = useState([{}] as iAdversimentDataUpdate[])
  const [isActive, setIsActive] = useState(true);

  console.log(detailsAds, "aqui no contexto")

  const navigate = useNavigate();

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
        const listFilter = adversimentData.filter((data) => data.brand === filterBrand);
        setFilterAdversiments(listFilter);
      } else if (filterModel) {
        const listFilter = adversimentData.filter((data) => data.model === filterModel);
        setFilterAdversiments(listFilter);
      } else if (filterColor) {
        const listFilter = adversimentData.filter((data) => data.color === filterColor);
        setFilterAdversiments(listFilter);
      } else if (filterAge) {
        const listFilter = adversimentData.filter((data) => data.age === filterAge);
        setFilterAdversiments(listFilter);
      } else if (filterFuel) {
        const listFilter = adversimentData.filter((data) => data.fuelType === filterFuel);
        setFilterAdversiments(listFilter);
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
  }, [renderFilter]);

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

  const getDetailsAdversiment = async (id: string | undefined) => {
    try {
      const {data} = await Api.get(`/adversiments/${id}`)
      setDetailsAds(data)
    } catch (error) {
      console.error(error)
    }
  }

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

  const updateAdversiment = async (data: iAdversimentDataUpdate) => {
    const token = localStorage.getItem("token")
    const newData = {...data, isActive: isActive}
  
    try {
      const response = await Api.patch(`/adversiments/${detailsAds[0]?.id}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      window.location.reload()
      console.log(response.data)

    } catch (error) {
      console.error(error);
    }
  }


  const deleteAdversiment = async () => {
    
    try {
      await Api.delete(`/adversiments/${detailsAds[0]?.id}`);
      window.location.reload()
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <AdversimentContext.Provider
      value={{
        postNewAdversiment,
        getDetailsAdversiment,
        updateAdversiment,
        deleteAdversiment,
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
        detailsAds,
        filterBrand,
        adversimentData,
        loading,
        ModalAddOpen,
        renderFilter,
        setRenderFilter,
        filterAdversiments,
        setFilterAdversiments,
        listBrands,
        isActive, 
        setIsActive,
      }}
    >
      {children}
    </AdversimentContext.Provider>
  );
};

export default AdversimentProvider;
