import React, { Dispatch, createContext, useState } from "react";
import { iFiltersProviderProps } from "../../interface/adversiments";

interface iFilter {
  value: string;
  label: string;
}

interface iFilterContextProps {
  selectedBrands: string[];
  selectedcolors: string[];
  selectedModels: string[];
  selectedFuels: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedColors: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedModels: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedFuels: React.Dispatch<React.SetStateAction<string[]>>;
  brands: iFilter[];
  colors: iFilter[];
  models: iFilter[];
  fuels: iFilter[];
}

export const FiltersContext = createContext({} as iFilterContextProps);

const FiltersProvider = ({ children }: iFiltersProviderProps) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedcolors, setSelectedColors] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [selectedFuels, setSelectedFuels] = useState<string[]>([]);

  const brands = [
    { value: "General Motors", label: "General Motors" },
    { value: "Fiat", label: "Fiat" },
    { value: "Ford", label: "Ford" },
    { value: "Honda", label: "Honda" },
    { value: "Porshe", label: "Porshe" },
    { value: "Volkswagem", label: "Volkswagem" },
    //...
  ];

  const colors = [
    { value: "azul", label: "azul" },
    { value: "vermelho", label: "vermelho" },
    { value: "verde", label: "verde" },
    { value: "preto", label: "preto" },
    { value: "prata", label: "prata" },
    { value: "branco", label: "branco" },
    //...
  ];

  const models = [
    { value: "civic", label: "Civic" },
    { value: "corolla", label: "Corolla" },
    { value: "cruze", label: "Cruze" },
    { value: "fit", label: "Fit" },
    { value: "gol", label: "Gol" },
    { value: "ka", label: "Ka" },
    { value: "onix", label: "Onix" },
    //...
  ];

  const fuels = [
    { value: "gasoline", label: "Gasoline" },
    { value: "diesel", label: "Diesel" },
    { value: "hybrid", label: "Hybrid" },
    //n sei os numeros base dos combustiveis mas ai vc troca o value por eles,
    // mesma coisa com os de cima caso o value retornado pela api seja diferente
    // tu tb pode fazer uma logica pra deixar responsivo e nessas constantes usar oq ta vindo
  ];

  // <label>Brand:</label>
  // {brands.map((brand) => (
  //   <label key={brand.value}>
  //     <input
  //       type="checkbox"
  //       value={brand.value}
  //       checked={selectedBrands.includes(brand.value)}
  //       onChange={(event) => {
  //         if (event.target.checked) {
  //           setSelectedBrands([...selectedBrands, brand.value]);
  //         } else {
  //           setSelectedBrands(selectedBrands.filter((value) => value !== brand.value));
  //         }
  //       }}
  //     />
  //     {brand.label}
  //   </label>
  // ))}

  // TU PODE USAR ESSE CODIGO PRA RENDERIZAR A LISTA COMO CHECKBOX, ASSIM FICA BEM MELHOR
  // PRA VER OQ TA ATIVO OU N

  // ESSE STATE ABAIXO VC VAI USAR PRA TRAZER TODOS OS CARROS QUE SERAO LISTADOS
  // const cars= {*logica pra chamar os carros*}
  // const [filteredCars, setFilteredCars] = useState(cars);

  // ESSE USEEFFECT VC VAI USAR PRA FILTRAR OS CARROS QUE SERAO LISTADOS
  // useEffect(() => {
  //   const filtered = cars.filter((car) => {
  //     return (
  //       selectedBrands.includes(car.brand) &&
  //       selectedColors.includes(car.color) &&
  //       selectedModels.includes(car.model) &&
  //       selectedFuels.includes(car.fuel)
  //     );
  //   });
  //   setFilteredCars(filtered);
  // }, [selectedBrands, selectedColors, selectedModels, selectedFuels]);

  //AI NO FINAL SO VC PASSAR ESSE FILTERED CARS COMO PROPS PRO CARD FAZER O MAP E RENDERIZAR

  return (
    <FiltersContext.Provider
      value={{
        fuels,
        models,
        colors,
        brands,
        selectedFuels,
        selectedModels,
        selectedBrands,
        selectedcolors,
        setSelectedFuels,
        setSelectedModels,
        setSelectedColors,
        setSelectedBrands,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
