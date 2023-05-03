import { createContext, useState } from "react";
import { iFiltersContextProps, iFiltersProviderProps } from "../../interface/adversiments";

export const FiltersContext = createContext({} as iFiltersContextProps);

const FiltersProvider = ({ children }: iFiltersProviderProps) => {
  const [activeGenerals, setActiveGenerals] = useState(false);
  const [activeFiat, setActiveFiat] = useState(false);
  const [activeFord, setActiveFord] = useState(false);
  const [activeHonda, setActiveHonda] = useState(false);
  const [activePorsche, setActivePorsche] = useState(false);
  const [activeVolswagen, setActiveVolswagen] = useState(false);
  const [activeCivic, setActiveCivic] = useState(false);
  const [activeCorolla, setActiveCorolla] = useState(false);
  const [activeCruze, setActiveCruze] = useState(false);
  const [activeFit, setActiveFit] = useState(false);
  const [activeGol, setActiveGol] = useState(false);
  const [activeKa, setActiveKa] = useState(false);
  const [activeOnix, setActiveOnix] = useState(false);
  const [activePorscheModel, setActivePorscheModel] = useState(false);
  const [activeAzul, setActiveAzul] = useState(false);
  const [activeBranca, setActiveBranca] = useState(false);
  const [activeCinza, setActiveCinza] = useState(false);
  const [activePrata, setActivePrata] = useState(false);
  const [activePreta, setActivePreta] = useState(false);
  const [activeVerde, setActiveVerde] = useState(false);
  const [active2022, setActive2022] = useState(false);
  const [active2021, setActive2021] = useState(false);
  const [active2018, setActive2018] = useState(false);
  const [active2015, setActive2015] = useState(false);
  const [active2013, setActive2013] = useState(false);
  const [active2012, setActive2012] = useState(false);
  const [active2010, setActive2010] = useState(false);
  const [activeDiesel, setActiveDiesel] = useState(false);
  const [activeEtanol, setActiveEtanol] = useState(false);
  const [activeGasolina, setActiveGasolina] = useState(false);
  const [activeFlex, setActiveFlex] = useState(false);
  const [activeKmMax, setActiveKmMax] = useState(false);
  const [activeKmMin, setActiveKmMin] = useState(false);
  const [activePriceMax, setActivePriceMax] = useState(false);
  const [activePriceMin, setActivePriceMin] = useState(false);

  return (
    <FiltersContext.Provider
      value={{
        activeGenerals,
        activeFiat,
        activeFord,
        activeHonda,
        activePorsche,
        activeVolswagen,
        activeCivic,
        activeCorolla,
        activeCruze,
        activeFit,
        activeGol,
        activeKa,
        activeOnix,
        activePorscheModel,
        activeAzul,
        activeBranca,
        activeCinza,
        activePrata,
        activePreta,
        activeVerde,
        active2022,
        active2021,
        active2018,
        active2015,
        active2013,
        active2012,
        active2010,
        activeDiesel,
        activeEtanol,
        activeGasolina,
        activeFlex,
        activeKmMax,
        activeKmMin,
        activePriceMin,
        activePriceMax,
        setActiveFord,
        setActiveHonda,
        setActiveKa,
        setActiveOnix,
        setActivePorscheModel,
        setActiveAzul,
        setActiveBranca,
        setActiveCinza,
        setActivePrata,
        setActivePreta,
        setActiveVerde,
        setActive2022,
        setActiveFiat,
        setActive2021,
        setActiveGenerals,
        setActive2018,
        setActiveDiesel,
        setActivePorsche,
        setActive2015,
        setActiveVolswagen,
        setActiveCruze,
        setActiveCorolla,
        setActiveCivic,
        setActive2013,
        setActive2012,
        setActiveFit,
        setActiveGol,
        setActive2010,
        setActiveEtanol,
        setActiveGasolina,
        setActiveFlex,
        setActiveKmMax,
        setActiveKmMin,
        setActivePriceMax,
        setActivePriceMin,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
