import { createContext, useEffect, useState } from "react";
import { Api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import {
  iAdversimentContextProps,
  iAdversimentDataRegister,
  iAdversimentDataResponse,
  iAdversimentDataUpdate,
  iAdversimentProviderProps,
  iImageResponse,
} from "../../interface/adversiments";
import { iCommentDataRequest } from "../../interface/comments";
import Swal from "sweetalert2";

export const AdversimentContext = createContext({} as iAdversimentContextProps);

const AdversimentProvider = ({ children }: iAdversimentProviderProps) => {
  const [adversimentData, setAdversimentData] = useState([] as iAdversimentDataResponse[]);
  const [filterAdversiments, setFilterAdversiments] = useState([] as iAdversimentDataResponse[]);
  const [filterBrand, setFilterBrand] = useState("");
  const [filterModel, setFilterModel] = useState("");
  const [filterColor, setFilterColor] = useState("");
  const [imageBase64, setImageBase64] = useState([] as iImageResponse[]);
  const [filterAge, setFilterAge] = useState(0);
  const [filterFuel, setFilterFuel] = useState("");
  const [filterKM, setFilterKM] = useState(false);
  const [filterPrice, setFilterPrice] = useState(false);
  const [ModalAddOpen, setModalAddOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState(false);
  const [listBrands, setListBrands] = useState([]);
  const [detailsAds, setDetailsAds] = useState({} as iAdversimentDataUpdate);
  const [isActive, setIsActive] = useState(true);
  const [retrieveIds, setRetrieveIds] = useState([] as any);
  const [dataInfoPagination, setDataInfoPagination] = useState({} as any);
  const [current, setCurrent] = useState(1);

  const navigate = useNavigate();

  const loadAdversiment = async () => {
    try {
      const { data } = await Api.get(`/adversiments?page=${current}?limit=12`);
      console.log(current);
      setDataInfoPagination(data);
      const dataOrderMin = orderMinPrice(orderMinKM(data.advertisements));
      setAdversimentData(dataOrderMin);
      setFilterAdversiments(dataOrderMin);

      if (filterBrand) {
        if (activeFilter) {
          const listFilter = adversimentData.filter((data) => data.brand === filterBrand);
          setFilterAdversiments(listFilter);
        } else {
          setAdversimentData(dataOrderMin);
          setFilterBrand("");
        }
      } else if (filterModel) {
        if (activeFilter) {
          const listFilter = adversimentData.filter((data) => data.model === filterModel);
          setFilterAdversiments(listFilter);
        } else {
          setAdversimentData(dataOrderMin);
          setFilterModel("");
        }
      } else if (filterColor) {
        if (activeFilter) {
          const listFilter = adversimentData.filter((data) => data.color === filterColor);
          setFilterAdversiments(listFilter);
        } else {
          setAdversimentData(dataOrderMin);
          setFilterColor("");
        }
      } else if (filterAge) {
        if (activeFilter) {
          const listFilter = adversimentData.filter((data) => data.age === filterAge);
          setFilterAdversiments(listFilter);
        } else {
          setAdversimentData(dataOrderMin);
          setFilterAge(0);
        }
      } else if (filterFuel) {
        if (activeFilter) {
          const listFilter = adversimentData.filter((data) => data.fuelType === filterFuel);
          setFilterAdversiments(listFilter);
        } else {
          setAdversimentData(dataOrderMin);
          setFilterFuel("");
        }
      } else if (filterKM) {
        const dataOrderMax = orderMaxKM(filterAdversiments);
        setFilterAdversiments(dataOrderMax);
      } else if (filterPrice) {
        const dataOrderMax = orderMaxPrice(filterAdversiments);
        setFilterAdversiments(dataOrderMax);
      } else {
      }

      setLoading(true);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const compareNum = (a: any, b: any) => {
    if (a === b) return 0;
    if (a < b) return -1;
    if (a > b) return 1;
  };

  const orderMinKM = (listAdd: any) => {
    const arrOfKM: any = [];
    const arrExtra: any = [];
    const minOrderKM: any = [];

    listAdd.map((item: any) => {
      if (!arrOfKM.includes(item.mileAge)) {
        arrOfKM.push(item.mileAge);
      }
    });

    arrOfKM.sort(compareNum);

    for (let i = 0; i < arrOfKM.length; i++) {
      listAdd.map((item: any) => {
        if (item.mileAge === arrOfKM[i]) {
          minOrderKM.push(item);
        }
      });
    }

    return minOrderKM;
  };

  const orderMaxKM = (listAdd: any) => {
    const arrOfKM: any = [];
    const maxOrderKM: any = [];

    listAdd.map((item: any) => {
      if (!arrOfKM.includes(item.mileAge)) {
        arrOfKM.push(item.mileAge);
      }
    });
    arrOfKM.sort(compareNum).reverse();

    for (let i = 0; i < arrOfKM.length; i++) {
      listAdd.map((item: any) => {
        if (item.mileAge === arrOfKM[i]) {
          maxOrderKM.push(item);
        }
      });
    }

    return maxOrderKM;
  };

  const orderMinPrice = (listAdd: any) => {
    const arrOfPrice: any = [];
    const minOrderPrice: any = [];

    listAdd.map((item: any) => {
      if (!arrOfPrice.includes(item.price)) {
        arrOfPrice.push(item.price);
      }
    });
    arrOfPrice.sort();

    for (let i = 0; i < arrOfPrice.length; i++) {
      listAdd.map((item: any) => {
        if (item.price === arrOfPrice[i]) {
          minOrderPrice.push(item);
        }
      });
    }

    return minOrderPrice;
  };

  const orderMaxPrice = (listAdd: any) => {
    const arrOfPrice: any = [];
    const maxOrderPrice: any = [];

    listAdd.map((item: any) => {
      if (!arrOfPrice.includes(item.price)) {
        arrOfPrice.push(item.price);
      }
    });
    arrOfPrice.sort().reverse();

    for (let i = 0; i < arrOfPrice.length; i++) {
      listAdd.map((item: any) => {
        if (item.price === arrOfPrice[i]) {
          maxOrderPrice.push(item);
        }
      });
    }

    return maxOrderPrice;
  };

  const handleIdComment = (data: any) => {
    const response = data.id;
    setRetrieveIds(response);
  };

  useEffect(() => {
    loadAdversiment();
  }, [
    filterBrand,
    filterModel,
    filterColor,
    filterAge,
    filterFuel,
    filterKM,
    filterPrice,
    activeFilter,
    current,
    detailsAds,
  ]);

  const getDetailsAdversiment = async (id: string | undefined) => {
    try {
      const { data } = await Api.get(`/adversiments/${id}`);
      setDetailsAds(data);
    } catch (error) {
      console.error(error);
    }
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    width: "400px",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const postNewAdversiment = async (data: iAdversimentDataRegister) => {
    const newData = { ...data, images: imageBase64 };
    console.log(imageBase64);
    try {
      const response = await Api.post("/adversiments", newData);
      loadAdversiment();
      //falta toast
      setModalAddOpen(false);
      Toast.fire({
        icon: "success",
        title: "Anuncio Criado com Sucesso",
      });
    } catch (error: any) {
      Toast.fire({
        icon: "error",
        title: error,
      });
    }
  };

  const updateAdversiment = async (data: iAdversimentDataUpdate) => {
    const token = localStorage.getItem("token");
    const newData = { ...data, isActive: isActive };

    try {
      const response = await Api.patch(`/adversiments/${detailsAds?.id}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Toast.fire({
        icon: "success",
        title: "Anuncio Atualizado com Sucesso",
      });
      window.location.reload();
    } catch (error: any) {
      Toast.fire({
        icon: "error",
        title: error,
      });
    }
  };

  const createCommentUser = async (data: iCommentDataRequest) => {
    const token = localStorage.getItem("token");
    try {
      await Api.post(`/comments/${detailsAds.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Toast.fire({
        icon: "success",
        title: "Comentário criado com Sucesso",
      });
      setTimeout(() => {
        window.location.reload();
      }, 1900);
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: "Erro ao criar o comentário",
      });
    }
  };

  const updateCommentUser = async (data: iCommentDataRequest) => {
    const token = localStorage.getItem("token");
    try {
      await Api.patch(`/comments/${retrieveIds}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Toast.fire({
        icon: "success",
        title: "Comentário editado com Sucesso",
      });

      setTimeout(() => {
        window.location.reload();
      }, 1900);
    } catch (error: any) {
      Toast.fire({
        icon: "error",
        title: error,
      });
    }
  };

  const deleteCommentUser = async () => {
    const token = localStorage.getItem("token");
    try {
      await Api.delete(`/comments/${retrieveIds}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Toast.fire({
        icon: "success",
        title: "Comentário deletado com Sucesso",
      });
      setTimeout(() => {
        window.location.reload();
      }, 1900);
    } catch (error: any) {
      Toast.fire({
        icon: "error",
        title: error,
      });
    }
  };

  const deleteAdversiment = async () => {
    try {
      await Api.delete(`/adversiments/${detailsAds?.id}`);
      window.location.reload();
      Toast.fire({
        icon: "success",
        title: "Anuncio deletado com sucesso",
      });
    } catch (error: any) {
      Toast.fire({
        icon: "error",
        title: error,
      });
    }
  };

  return (
    <AdversimentContext.Provider
      value={{
        postNewAdversiment,
        getDetailsAdversiment,
        createCommentUser,
        updateAdversiment,
        deleteAdversiment,
        setAdversimentData,
        updateCommentUser,
        deleteCommentUser,
        handleIdComment,
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
        filterModel,
        filterColor,
        filterAge,
        filterFuel,
        filterKM,
        filterPrice,
        adversimentData,
        loading,
        ModalAddOpen,
        activeFilter,
        setActiveFilter,
        filterAdversiments,
        setFilterAdversiments,
        listBrands,
        isActive,
        setIsActive,
        imageBase64,
        setImageBase64,
        dataInfoPagination,
        current,
        setCurrent,
      }}
    >
      {children}
    </AdversimentContext.Provider>
  );
};

export default AdversimentProvider;
