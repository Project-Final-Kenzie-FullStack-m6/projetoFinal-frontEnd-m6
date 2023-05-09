import { Button } from "../../../components/button/style.button";
import { CardAdversiment } from "../../../components/cardAdverstiment";
import { AdversimentContext } from "../../../contexts/adversimentContext";
import { StyledMain } from "../style";
import { useContext, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import * as S from "../../../components/cardAdverstiment/style.cardAdversiment";

export const MainHome = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);
  const {
    setFilterBrand,
    setFilterModel,
    setFilterColor,
    setFilterAge,
    setFilterFuel,
    setFilterKM,
    setFilterPrice,
    filterBrand,
    filterModel,
    filterColor,
    filterAge,
    filterFuel,
    filterKM,
    filterPrice,
    activeFilter,
    setActiveFilter,
    // adversimentData,
    // setFilterAdversiments,
    // listBrands,
  } = useContext(AdversimentContext);
  return (
    <StyledMain>
      {sideBar ? (
        <>
          <section className="filters sideBarOn">
            <div className="divClose">
              <h3>Filtro</h3>
              <GrFormClose onClick={showSideBar} />
            </div>
            <h2>Marca</h2>
            <ul>
              <li
                className={filterBrand === "General Motors" ? "bold" : ""}
                onClick={() => {
                  setFilterBrand("General Motors");
                  setActiveFilter(!activeFilter);
                }}
              >
                General Motors
              </li>
              <li
                className={filterBrand === "Fiat" ? "bold" : ""}
                onClick={(e) => {
                  setFilterBrand("Fiat");
                  setActiveFilter(!activeFilter);
                  e.target.addEventListener("click", () => {});
                }}
              >
                Fiat
              </li>
              <li
                className={filterBrand === "Ford" ? "bold" : ""}
                onClick={(e) => {
                  setFilterBrand("Ford");
                  setActiveFilter(!activeFilter);
                  console.log(e.target);
                }}
              >
                Ford
              </li>
              <li
                className={filterBrand === "Honda" ? "bold" : ""}
                onClick={() => {
                  setFilterBrand("Honda");
                  setActiveFilter(!activeFilter);
                }}
              >
                Honda
              </li>
              <li
                className={filterBrand === "Porsche" ? "bold" : ""}
                onClick={() => {
                  setFilterBrand("Porsche");
                  setActiveFilter(!activeFilter);
                }}
              >
                Porsche
              </li>
              <li
                className={filterBrand === "Volswagen" ? "bold" : ""}
                onClick={() => {
                  setFilterBrand("Volswagen");
                  setActiveFilter(!activeFilter);
                }}
              >
                Volswagen
              </li>
            </ul>
            <h2>Modelo</h2>
            <ul>
              <li
                className={filterModel === "Civic" ? "bold" : ""}
                onClick={() => {
                  setFilterModel("Civic");
                  setActiveFilter(!activeFilter);
                }}
              >
                Civic
              </li>
              <li
                className={filterModel === "Corolla" ? "bold" : ""}
                onClick={() => {
                  setFilterModel("Corolla");
                  setActiveFilter(!activeFilter);
                }}
              >
                Corolla
              </li>
              <li
                className={filterModel === "Cruze" ? "bold" : ""}
                onClick={() => {
                  setFilterModel("Cruze");
                  setActiveFilter(!activeFilter);
                }}
              >
                Cruze
              </li>
              <li
                className={filterModel === "Fit" ? "bold" : ""}
                onClick={() => {
                  setFilterModel("Fit");
                  setActiveFilter(!activeFilter);
                }}
              >
                Fit
              </li>
              <li
                className={filterModel === "Gol" ? "bold" : ""}
                onClick={() => {
                  setFilterModel("Gol");
                  setActiveFilter(!activeFilter);
                }}
              >
                Gol
              </li>
              <li
                className={filterModel === "Ka" ? "bold" : ""}
                onClick={() => {
                  setFilterModel("Ka");
                  setActiveFilter(!activeFilter);
                }}
              >
                Ka
              </li>
              <li
                className={filterModel === "Onix" ? "bold" : ""}
                onClick={() => {
                  setFilterModel("Onix");
                  setActiveFilter(!activeFilter);
                }}
              >
                Onix
              </li>
              <li
                className={filterModel === "Porsche 718" ? "bold" : ""}
                onClick={() => {
                  setFilterModel("Porsche 718");
                  setActiveFilter(!activeFilter);
                }}
              >
                Porsche 718
              </li>
            </ul>
            <h2>Cor</h2>
            <ul>
              <li
                className={filterColor === "Azul" ? "bold" : ""}
                onClick={() => {
                  setFilterColor("Azul");
                  setActiveFilter(!activeFilter);
                }}
              >
                Azul
              </li>
              <li
                className={filterColor === "Branca" ? "bold" : ""}
                onClick={() => {
                  setFilterColor("Branca");
                  setActiveFilter(!activeFilter);
                }}
              >
                Branca
              </li>
              <li
                className={filterColor === "Cinza" ? "bold" : ""}
                onClick={() => {
                  setFilterColor("Cinza");
                  setActiveFilter(!activeFilter);
                }}
              >
                Cinza
              </li>
              <li
                className={filterColor === "Prata" ? "bold" : ""}
                onClick={() => {
                  setFilterColor("Prata");
                  setActiveFilter(!activeFilter);
                }}
              >
                Prata
              </li>
              <li
                className={filterColor === "Preta" ? "bold" : ""}
                onClick={() => {
                  setFilterColor("Preta");
                  setActiveFilter(!activeFilter);
                }}
              >
                Preta
              </li>
              <li
                className={filterColor === "Verde" ? "bold" : ""}
                onClick={() => {
                  setFilterColor("Verde");
                  setActiveFilter(!activeFilter);
                }}
              >
                Verde
              </li>
            </ul>
            <h2>Ano</h2>
            <ul>
              <li
                className={filterAge === 2022 ? "bold" : ""}
                onClick={() => {
                  setFilterAge(2022);
                  setActiveFilter(!activeFilter);
                }}
              >
                2022
              </li>
              <li
                className={filterAge === 2021 ? "bold" : ""}
                onClick={() => {
                  setFilterAge(2021);
                  setActiveFilter(!activeFilter);
                }}
              >
                2021
              </li>
              <li
                className={filterAge === 2018 ? "bold" : ""}
                onClick={() => {
                  setFilterAge(2018);
                  setActiveFilter(!activeFilter);
                }}
              >
                2018
              </li>
              <li
                className={filterAge === 2015 ? "bold" : ""}
                onClick={() => {
                  setFilterAge(2015);
                  setActiveFilter(!activeFilter);
                }}
              >
                2015
              </li>
              <li
                className={filterAge === 2013 ? "bold" : ""}
                onClick={() => {
                  setFilterAge(2013);
                  setActiveFilter(!activeFilter);
                }}
              >
                2013
              </li>
              <li
                className={filterAge === 2012 ? "bold" : ""}
                onClick={() => {
                  setFilterAge(2012);
                  setActiveFilter(!activeFilter);
                }}
              >
                2012
              </li>
              <li
                className={filterAge === 2010 ? "bold" : ""}
                onClick={() => {
                  setFilterAge(2010);
                  setActiveFilter(!activeFilter);
                }}
              >
                2010
              </li>
            </ul>
            <h2>Combustível</h2>
            <ul>
              <li
                className={filterFuel === "Diesel" ? "bold" : ""}
                onClick={() => {
                  setFilterFuel("Diesel");
                  setActiveFilter(!activeFilter);
                }}
              >
                Diesel
              </li>
              <li
                className={filterFuel === "Etanol" ? "bold" : ""}
                onClick={() => {
                  setFilterFuel("Etanol");
                  setActiveFilter(!activeFilter);
                }}
              >
                Etanol
              </li>
              <li
                className={filterFuel === "Gasolina" ? "bold" : ""}
                onClick={() => {
                  setFilterFuel("Gasolina");
                  setActiveFilter(!activeFilter);
                }}
              >
                Gasolina
              </li>
              <li
                className={filterFuel === "Flex" ? "bold" : ""}
                onClick={() => {
                  setFilterFuel("Flex");
                  setActiveFilter(!activeFilter);
                }}
              >
                Flex
              </li>
            </ul>
            <h2>KM</h2>
            <div className="divButton">
              <Button
                className={!filterKM ? "btnActive" : ""}
                onClick={() => {
                  setFilterKM(false);
                }}
                font="grey-0-1"
              >
                Mínima
              </Button>
              <Button
                className={filterKM ? "btnActive" : ""}
                onClick={() => {
                  setFilterKM(true);
                }}
                font="grey-0-1"
              >
                Máxima
              </Button>
            </div>
            <h2>Preço</h2>
            <div className="divButton">
              <Button
                className={!filterPrice ? "btnActive" : ""}
                onClick={() => {
                  setFilterPrice(false);
                }}
                font="grey-0-1"
              >
                Mínimo
              </Button>
              <Button
                className={filterPrice ? "btnActive" : ""}
                onClick={() => {
                  setFilterPrice(true);
                }}
                font="grey-0-1"
              >
                Máximo
              </Button>
            </div>
          </section>
        </>
      ) : (
        <section className="filters sideBarOff">
          <h2>Marca</h2>
          <ul>
            <li
              className={filterBrand === "General Motors" ? "bold" : ""}
              onClick={() => {
                setFilterBrand("General Motors");
                setActiveFilter(!activeFilter);
              }}
            >
              General Motors
            </li>
            <li
              className={filterBrand === "Fiat" ? "bold" : ""}
              onClick={() => {
                setFilterBrand("Fiat");
                setActiveFilter(!activeFilter);
              }}
            >
              Fiat
            </li>
            <li
              className={filterBrand === "Ford" ? "bold" : ""}
              onClick={() => {
                setFilterBrand("Ford");
                setActiveFilter(!activeFilter);
              }}
            >
              Ford
            </li>
            <li
              className={filterBrand === "Honda" ? "bold" : ""}
              onClick={() => {
                setFilterBrand("Honda");
                setActiveFilter(!activeFilter);
              }}
            >
              Honda
            </li>
            <li
              className={filterBrand === "Porsche" ? "bold" : ""}
              onClick={() => {
                setFilterBrand("Porsche");
                setActiveFilter(!activeFilter);
              }}
            >
              Porsche
            </li>
            <li
              className={filterBrand === "Volswagen" ? "bold" : ""}
              onClick={() => {
                setFilterBrand("Volswagen");
                setActiveFilter(!activeFilter);
              }}
            >
              Volswagen
            </li>
          </ul>
          <h2>Modelo</h2>
          <ul>
            <li
              className={filterModel === "Civic" ? "bold" : ""}
              onClick={() => {
                setFilterModel("Civic");
                setActiveFilter(!activeFilter);
              }}
            >
              Civic
            </li>
            <li
              className={filterModel === "Corolla" ? "bold" : ""}
              onClick={() => {
                setFilterModel("Corolla");
                setActiveFilter(!activeFilter);
              }}
            >
              Corolla
            </li>
            <li
              className={filterModel === "Cruze" ? "bold" : ""}
              onClick={() => {
                setFilterModel("Cruze");
                setActiveFilter(!activeFilter);
              }}
            >
              Cruze
            </li>
            <li
              className={filterModel === "Fit" ? "bold" : ""}
              onClick={() => {
                setFilterModel("Fit");
                setActiveFilter(!activeFilter);
              }}
            >
              Fit
            </li>
            <li
              className={filterModel === "Gol" ? "bold" : ""}
              onClick={() => {
                setFilterModel("Gol");
                setActiveFilter(!activeFilter);
              }}
            >
              Gol
            </li>
            <li
              className={filterModel === "Ka" ? "bold" : ""}
              onClick={() => {
                setFilterModel("Ka");
                setActiveFilter(!activeFilter);
              }}
            >
              Ka
            </li>
            <li
              className={filterModel === "Onix" ? "bold" : ""}
              onClick={() => {
                setFilterModel("Onix");
                setActiveFilter(!activeFilter);
              }}
            >
              Onix
            </li>
            <li
              className={filterModel === "Porsche 718" ? "bold" : ""}
              onClick={() => {
                setFilterModel("Porsche 718");
                setActiveFilter(!activeFilter);
              }}
            >
              Porsche 718
            </li>
          </ul>
          <h2>Cor</h2>
          <ul>
            <li
              className={filterColor === "Azul" ? "bold" : ""}
              onClick={() => {
                setFilterColor("Azul");
                setActiveFilter(!activeFilter);
              }}
            >
              Azul
            </li>
            <li
              className={filterColor === "Branca" ? "bold" : ""}
              onClick={() => {
                setFilterColor("Branca");
                setActiveFilter(!activeFilter);
              }}
            >
              Branca
            </li>
            <li
              className={filterColor === "Cinza" ? "bold" : ""}
              onClick={() => {
                setFilterColor("Cinza");
                setActiveFilter(!activeFilter);
              }}
            >
              Cinza
            </li>
            <li
              className={filterColor === "Prata" ? "bold" : ""}
              onClick={() => {
                setFilterColor("Prata");
                setActiveFilter(!activeFilter);
              }}
            >
              Prata
            </li>
            <li
              className={filterColor === "Preta" ? "bold" : ""}
              onClick={() => {
                setFilterColor("Preta");
                setActiveFilter(!activeFilter);
              }}
            >
              Preta
            </li>
            <li
              className={filterColor === "Verde" ? "bold" : ""}
              onClick={() => {
                setFilterColor("Verde");
                setActiveFilter(!activeFilter);
              }}
            >
              Verde
            </li>
          </ul>
          <h2>Ano</h2>
          <ul>
            <li
              className={filterAge === 2022 ? "bold" : ""}
              onClick={() => {
                setFilterAge(2022);
                setActiveFilter(!activeFilter);
              }}
            >
              2022
            </li>
            <li
              className={filterAge === 2021 ? "bold" : ""}
              onClick={() => {
                setFilterAge(2021);
                setActiveFilter(!activeFilter);
              }}
            >
              2021
            </li>
            <li
              className={filterAge === 2018 ? "bold" : ""}
              onClick={() => {
                setFilterAge(2018);
                setActiveFilter(!activeFilter);
              }}
            >
              2018
            </li>
            <li
              className={filterAge === 2015 ? "bold" : ""}
              onClick={() => {
                setFilterAge(2015);
                setActiveFilter(!activeFilter);
              }}
            >
              2015
            </li>
            <li
              className={filterAge === 2013 ? "bold" : ""}
              onClick={() => {
                setFilterAge(2013);
                setActiveFilter(!activeFilter);
              }}
            >
              2013
            </li>
            <li
              className={filterAge === 2012 ? "bold" : ""}
              onClick={() => {
                setFilterAge(2012);
                setActiveFilter(!activeFilter);
              }}
            >
              2012
            </li>
            <li
              className={filterAge === 2010 ? "bold" : ""}
              onClick={() => {
                setFilterAge(2010);
                setActiveFilter(!activeFilter);
              }}
            >
              2010
            </li>
          </ul>
          <h2>Combustível</h2>
          <ul>
            <li
              className={filterFuel === "Diesel" ? "bold" : ""}
              onClick={() => {
                setFilterFuel("Diesel");
                setActiveFilter(!activeFilter);
              }}
            >
              Diesel
            </li>
            <li
              className={filterFuel === "Etanol" ? "bold" : ""}
              onClick={() => {
                setFilterFuel("Etanol");
                setActiveFilter(!activeFilter);
              }}
            >
              Etanol
            </li>
            <li
              className={filterFuel === "Gasolina" ? "bold" : ""}
              onClick={() => {
                setFilterFuel("Gasolina");
                setActiveFilter(!activeFilter);
              }}
            >
              Gasolina
            </li>
            <li
              className={filterFuel === "Flex" ? "bold" : ""}
              onClick={() => {
                setFilterFuel("Flex");
                setActiveFilter(!activeFilter);
              }}
            >
              Flex
            </li>
          </ul>
          <h2>KM</h2>
          <div className="divButton">
            <Button
              className={!filterKM ? "btnActive" : ""}
              onClick={() => {
                setFilterKM(false);
              }}
              font="grey-0-1"
            >
              Mínima
            </Button>
            <Button
              className={filterKM ? "btnActive" : ""}
              onClick={() => {
                setFilterKM(true);
              }}
              font="grey-0-1"
            >
              Máxima
            </Button>
          </div>
          <h2>Preço</h2>
          <div className="divButton">
            <Button
              className={!filterPrice ? "btnActive" : ""}
              onClick={() => {
                setFilterPrice(false);
              }}
              font="grey-0-1"
            >
              Mínimo
            </Button>
            <Button
              className={filterPrice ? "btnActive" : ""}
              onClick={() => {
                setFilterPrice(true);
              }}
              font="grey-0-1"
            >
              Máximo
            </Button>
          </div>
        </section>
      )}
      <section className="cardList">
        <S.Container className="mobileVersion">
          <ul className="ulAdversiment">
            <CardAdversiment />
          </ul>
        </S.Container>
        {window.innerWidth > 900 ? (
          <div className="pagination">
            <h4>
              <strong>1</strong> de 2
            </h4>
            <h3>{"Seguinte >"}</h3>
          </div>
        ) : (
          <div className="divMobileFilter">
            <Button onClick={showSideBar} font="brand-1-2">
              Filtros
            </Button>
            <div className="pagination">
              <h4>
                <strong>1</strong> de 2
              </h4>
              <h3>{"Seguinte >"}</h3>
            </div>
          </div>
        )}
      </section>
    </StyledMain>
  );
};
