import { Button } from "../../../components/button/style.button";
import { CardAdversiment } from "../../../components/cardAdverstiment";
import { AdversimentContext } from "../../../contexts/adversimentContext";
import { StyledMain } from "../style";
import { useContext, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import * as S from "../../../components/cardAdverstiment/style.cardAdversiment";
import { FiltersContext } from "../../../contexts/filtersContext";

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
    activeFilter,
    setActiveFilter,
    adversimentData,
    setFilterAdversiments,
    // listBrands,
  } = useContext(AdversimentContext);

  const {
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
  } = useContext(FiltersContext);

  // const sdad = () => {
  //   console.log(filterBrand);
  //   setFilterBrand("Ford");
  // };
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
            {/* <ul>
              {listBrands.map((data) => {
                return <li>{data}</li>;
              })}
            </ul> */}
            <ul>
              <li
                className={activeFilter ? "bold" : ""}
                onClick={() => {
                  setFilterBrand("General Motors");
                  // setActiveGenerals(!activeGenerals);
                  setActiveFilter(!activeFilter);
                }}
              >
                General Motors
              </li>
              <li
                className={activeFiat ? "bold" : ""}
                onClick={() => {
                  setFilterBrand("Fiat");
                  // setActiveFiat(!activeFiat);
                  setActiveFilter(!activeFilter);
                }}
              >
                Fiat
              </li>
              <li
                onClick={() => {
                  setFilterBrand("Ford");
                  setActiveFilter(!activeFilter);
                }}
              >
                Ford
              </li>
              <li
                onClick={() => {
                  setFilterBrand("Honda");
                  setActiveFilter(!activeFilter);
                }}
              >
                Honda
              </li>
              <li
                onClick={() => {
                  setFilterBrand("Porsche");
                  setActiveFilter(!activeFilter);
                }}
              >
                Porsche
              </li>
              <li
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
                onClick={() => {
                  setFilterModel("Civic");
                  setActiveFilter(!activeFilter);
                }}
              >
                Civic
              </li>
              <li
                onClick={() => {
                  setFilterModel("Corolla");
                  setActiveFilter(!activeFilter);
                }}
              >
                Corolla
              </li>
              <li
                onClick={() => {
                  setFilterModel("Cruze");
                  setActiveFilter(!activeFilter);
                }}
              >
                Cruze
              </li>
              <li
                onClick={() => {
                  setFilterModel("Fit");
                  setActiveFilter(!activeFilter);
                }}
              >
                Fit
              </li>
              <li
                onClick={() => {
                  setFilterModel("Gol");
                  setActiveFilter(!activeFilter);
                }}
              >
                Gol
              </li>
              <li
                onClick={() => {
                  setFilterModel("Ka");
                  setActiveFilter(!activeFilter);
                }}
              >
                Ka
              </li>
              <li
                onClick={() => {
                  setFilterModel("Onix");
                  setActiveFilter(!activeFilter);
                }}
              >
                Onix
              </li>
              <li
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
                onClick={() => {
                  setFilterColor("Azul");
                  setActiveFilter(!activeFilter);
                }}
              >
                Azul
              </li>
              <li
                onClick={() => {
                  setFilterColor("Branca");
                  setActiveFilter(!activeFilter);
                }}
              >
                Branca
              </li>
              <li
                onClick={() => {
                  setFilterColor("Cinza");
                  setActiveFilter(!activeFilter);
                }}
              >
                Cinza
              </li>
              <li
                onClick={() => {
                  setFilterColor("Prata");
                  setActiveFilter(!activeFilter);
                }}
              >
                Prata
              </li>
              <li
                onClick={() => {
                  setFilterColor("Preta");
                  setActiveFilter(!activeFilter);
                }}
              >
                Preta
              </li>
              <li
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
                onClick={() => {
                  setFilterAge(2022);
                  setActiveFilter(!activeFilter);
                }}
              >
                2022
              </li>
              <li
                onClick={() => {
                  setFilterAge(2021);
                  setActiveFilter(!activeFilter);
                }}
              >
                2021
              </li>
              <li
                onClick={() => {
                  setFilterAge(2018);
                  setActiveFilter(!activeFilter);
                }}
              >
                2018
              </li>
              <li
                onClick={() => {
                  setFilterAge(2015);
                  setActiveFilter(!activeFilter);
                }}
              >
                2015
              </li>
              <li
                onClick={() => {
                  setFilterAge(2013);
                  setActiveFilter(!activeFilter);
                }}
              >
                2013
              </li>
              <li
                onClick={() => {
                  setFilterAge(2012);
                  setActiveFilter(!activeFilter);
                }}
              >
                2012
              </li>
              <li
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
                onClick={() => {
                  setFilterFuel("Diesel");
                  setActiveFilter(!activeFilter);
                }}
              >
                Diesel
              </li>
              <li
                onClick={() => {
                  setFilterFuel("Etanol");
                  setActiveFilter(!activeFilter);
                }}
              >
                Etanol
              </li>
              <li
                onClick={() => {
                  setFilterFuel("Gasolina");
                  setActiveFilter(!activeFilter);
                }}
              >
                Gasolina
              </li>
              <li
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
              {/* <Button
                onClick={() => {
                  setFilterKM(false);
                  setActiveFilter(!activeFilter);
                }}
                font="grey-0-1"
              >
                Mínima
              </Button> */}
              <Button onClick={() => setFilterAdversiments(adversimentData)} font="grey-0-1">
                Mínima
              </Button>
              <Button
                onClick={() => {
                  setFilterKM(false);
                  setActiveFilter(!activeFilter);
                }}
                font="grey-0-1"
              >
                Máxima
              </Button>
            </div>
            <h2>Preço</h2>
            <div className="divButton">
              <Button
                onClick={() => {
                  setFilterPrice(false);
                  setActiveFilter(!activeFilter);
                }}
                font="grey-0-1"
              >
                Mínimo
              </Button>
              <Button
                onClick={() => {
                  setFilterPrice(true);
                  setActiveFilter(!activeFilter);
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
          {/* <ul>
              {listBrands.map((data) => {
                return <li>{data}</li>;
              })}
            </ul> */}
          <ul>
            <li
              className={activeGenerals ? "bold" : ""}
              onClick={() => {
                setFilterBrand("General Motors");
                setActiveGenerals(!activeGenerals);
                setActiveFilter(!activeFilter);
              }}
            >
              General Motors
            </li>
            <li
              className={activeFiat ? "bold" : ""}
              onClick={() => {
                setFilterBrand("Fiat");
                // setActiveFiat(!activeFiat);
                setActiveFilter(!activeFilter);
              }}
            >
              Fiat
            </li>
            <li
              onClick={() => {
                setFilterBrand("Ford");
                setActiveFilter(!activeFilter);
              }}
            >
              Ford
            </li>
            <li
              onClick={() => {
                setFilterBrand("Honda");
                setActiveFilter(!activeFilter);
              }}
            >
              Honda
            </li>
            <li
              onClick={() => {
                setFilterBrand("Porsche");
                setActiveFilter(!activeFilter);
              }}
            >
              Porsche
            </li>
            <li
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
              onClick={() => {
                setFilterModel("Civic");
                setActiveFilter(!activeFilter);
              }}
            >
              Civic
            </li>
            <li
              onClick={() => {
                setFilterModel("Corolla");
                setActiveFilter(!activeFilter);
              }}
            >
              Corolla
            </li>
            <li
              onClick={() => {
                setFilterModel("Cruze");
                setActiveFilter(!activeFilter);
              }}
            >
              Cruze
            </li>
            <li
              onClick={() => {
                setFilterModel("Fit");
                setActiveFilter(!activeFilter);
              }}
            >
              Fit
            </li>
            <li
              onClick={() => {
                setFilterModel("Gol");
                setActiveFilter(!activeFilter);
              }}
            >
              Gol
            </li>
            <li
              onClick={() => {
                setFilterModel("Ka");
                setActiveFilter(!activeFilter);
              }}
            >
              Ka
            </li>
            <li
              onClick={() => {
                setFilterModel("Onix");
                setActiveFilter(!activeFilter);
              }}
            >
              Onix
            </li>
            <li
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
              onClick={() => {
                setFilterColor("Azul");
                setActiveFilter(!activeFilter);
              }}
            >
              Azul
            </li>
            <li
              onClick={() => {
                setFilterColor("Branca");
                setActiveFilter(!activeFilter);
              }}
            >
              Branca
            </li>
            <li
              onClick={() => {
                setFilterColor("Cinza");
                setActiveFilter(!activeFilter);
              }}
            >
              Cinza
            </li>
            <li
              onClick={() => {
                setFilterColor("Prata");
                setActiveFilter(!activeFilter);
              }}
            >
              Prata
            </li>
            <li
              onClick={() => {
                setFilterColor("Preta");
                setActiveFilter(!activeFilter);
              }}
            >
              Preta
            </li>
            <li
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
              onClick={() => {
                setFilterAge(2022);
                setActiveFilter(!activeFilter);
              }}
            >
              2022
            </li>
            <li
              onClick={() => {
                setFilterAge(2021);
                setActiveFilter(!activeFilter);
              }}
            >
              2021
            </li>
            <li
              onClick={() => {
                setFilterAge(2018);
                setActiveFilter(!activeFilter);
              }}
            >
              2018
            </li>
            <li
              onClick={() => {
                setFilterAge(2015);
                setActiveFilter(!activeFilter);
              }}
            >
              2015
            </li>
            <li
              onClick={() => {
                setFilterAge(2013);
                setActiveFilter(!activeFilter);
              }}
            >
              2013
            </li>
            <li
              onClick={() => {
                setFilterAge(2012);
                setActiveFilter(!activeFilter);
              }}
            >
              2012
            </li>
            <li
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
              onClick={() => {
                setFilterFuel("Diesel");
                setActiveFilter(!activeFilter);
              }}
            >
              Diesel
            </li>
            <li
              onClick={() => {
                setFilterFuel("Etanol");
                setActiveFilter(!activeFilter);
              }}
            >
              Etanol
            </li>
            <li
              onClick={() => {
                setFilterFuel("Gasolina");
                setActiveFilter(!activeFilter);
              }}
            >
              Gasolina
            </li>
            <li
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
            {/* <Button
              onClick={() => {
                setFilterKM(false);
                setActiveFilter(!activeFilter);
              }}
              font="grey-0-1"
            >
              Mínima
            </Button> */}
            <Button onClick={() => setFilterAdversiments(adversimentData)} font="grey-0-1">
              Mínima
            </Button>
            <Button
              onClick={() => {
                setFilterKM(false);
                setActiveFilter(!activeFilter);
              }}
              font="grey-0-1"
            >
              Máxima
            </Button>
          </div>
          <h2>Preço</h2>
          <div className="divButton">
            <Button
              onClick={() => {
                setFilterPrice(false);
                setActiveFilter(!activeFilter);
              }}
              font="grey-0-1"
            >
              Mínimo
            </Button>
            <Button
              onClick={() => {
                setFilterPrice(true);
                setActiveFilter(!activeFilter);
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
