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
    renderFilter,
    setRenderFilter,
    adversimentData,
    setFilterAdversiments,
    // listBrands,
  } = useContext(AdversimentContext);

  const sdad = () => {
    console.log(filterBrand);
    setFilterBrand("Ford");
  };
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
                onClick={() => {
                  setFilterBrand("General Motors");
                  setRenderFilter(!renderFilter);
                }}
              >
                General Motors
              </li>
              <li
                onClick={() => {
                  setFilterBrand("Fiat");
                  setRenderFilter(!renderFilter);
                }}
              >
                Fiat
              </li>
              <li
                onClick={() => {
                  setFilterBrand("Ford");
                  setRenderFilter(!renderFilter);
                }}
              >
                Ford
              </li>
              <li
                onClick={() => {
                  setFilterBrand("Honda");
                  setRenderFilter(!renderFilter);
                }}
              >
                Honda
              </li>
              <li
                onClick={() => {
                  setFilterBrand("Porsche");
                  setRenderFilter(!renderFilter);
                }}
              >
                Porsche
              </li>
              <li
                onClick={() => {
                  setFilterBrand("Volswagen");
                  setRenderFilter(!renderFilter);
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
                  setRenderFilter(!renderFilter);
                }}
              >
                Civic
              </li>
              <li
                onClick={() => {
                  setFilterModel("Corolla");
                  setRenderFilter(!renderFilter);
                }}
              >
                Corolla
              </li>
              <li
                onClick={() => {
                  setFilterModel("Cruze");
                  setRenderFilter(!renderFilter);
                }}
              >
                Cruze
              </li>
              <li
                onClick={() => {
                  setFilterModel("Fit");
                  setRenderFilter(!renderFilter);
                }}
              >
                Fit
              </li>
              <li
                onClick={() => {
                  setFilterModel("Gol");
                  setRenderFilter(!renderFilter);
                }}
              >
                Gol
              </li>
              <li
                onClick={() => {
                  setFilterModel("Ka");
                  setRenderFilter(!renderFilter);
                }}
              >
                Ka
              </li>
              <li
                onClick={() => {
                  setFilterModel("Onix");
                  setRenderFilter(!renderFilter);
                }}
              >
                Onix
              </li>
              <li
                onClick={() => {
                  setFilterModel("Porsche 718");
                  setRenderFilter(!renderFilter);
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
                  setRenderFilter(!renderFilter);
                }}
              >
                Azul
              </li>
              <li
                onClick={() => {
                  setFilterColor("Branca");
                  setRenderFilter(!renderFilter);
                }}
              >
                Branca
              </li>
              <li
                onClick={() => {
                  setFilterColor("Cinza");
                  setRenderFilter(!renderFilter);
                }}
              >
                Cinza
              </li>
              <li
                onClick={() => {
                  setFilterColor("Prata");
                  setRenderFilter(!renderFilter);
                }}
              >
                Prata
              </li>
              <li
                onClick={() => {
                  setFilterColor("Preta");
                  setRenderFilter(!renderFilter);
                }}
              >
                Preta
              </li>
              <li
                onClick={() => {
                  setFilterColor("Verde");
                  setRenderFilter(!renderFilter);
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
                  setRenderFilter(!renderFilter);
                }}
              >
                2022
              </li>
              <li
                onClick={() => {
                  setFilterAge(2021);
                  setRenderFilter(!renderFilter);
                }}
              >
                2021
              </li>
              <li
                onClick={() => {
                  setFilterAge(2018);
                  setRenderFilter(!renderFilter);
                }}
              >
                2018
              </li>
              <li
                onClick={() => {
                  setFilterAge(2015);
                  setRenderFilter(!renderFilter);
                }}
              >
                2015
              </li>
              <li
                onClick={() => {
                  setFilterAge(2013);
                  setRenderFilter(!renderFilter);
                }}
              >
                2013
              </li>
              <li
                onClick={() => {
                  setFilterAge(2012);
                  setRenderFilter(!renderFilter);
                }}
              >
                2012
              </li>
              <li
                onClick={() => {
                  setFilterAge(2010);
                  setRenderFilter(!renderFilter);
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
                  setRenderFilter(!renderFilter);
                }}
              >
                Diesel
              </li>
              <li
                onClick={() => {
                  setFilterFuel("Etanol");
                  setRenderFilter(!renderFilter);
                }}
              >
                Etanol
              </li>
              <li
                onClick={() => {
                  setFilterFuel("Gasolina");
                  setRenderFilter(!renderFilter);
                }}
              >
                Gasolina
              </li>
              <li
                onClick={() => {
                  setFilterFuel("Flex");
                  setRenderFilter(!renderFilter);
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
                  setRenderFilter(!renderFilter);
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
                  setRenderFilter(!renderFilter);
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
                  setRenderFilter(!renderFilter);
                }}
                font="grey-0-1"
              >
                Mínimo
              </Button>
              <Button
                onClick={() => {
                  setFilterPrice(true);
                  setRenderFilter(!renderFilter);
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
              onClick={() => {
                setFilterBrand("General Motors");
                setRenderFilter(!renderFilter);
              }}
            >
              General Motors
            </li>
            <li
              onClick={() => {
                setFilterBrand("Fiat");
                setRenderFilter(!renderFilter);
              }}
            >
              Fiat
            </li>
            <li
              onClick={() => {
                setFilterBrand("Ford");
                setRenderFilter(!renderFilter);
              }}
            >
              Ford
            </li>
            <li
              onClick={() => {
                setFilterBrand("Honda");
                setRenderFilter(!renderFilter);
              }}
            >
              Honda
            </li>
            <li
              onClick={() => {
                setFilterBrand("Porsche");
                setRenderFilter(!renderFilter);
              }}
            >
              Porsche
            </li>
            <li
              onClick={() => {
                setFilterBrand("Volswagen");
                setRenderFilter(!renderFilter);
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
                setRenderFilter(!renderFilter);
              }}
            >
              Civic
            </li>
            <li
              onClick={() => {
                setFilterModel("Corolla");
                setRenderFilter(!renderFilter);
              }}
            >
              Corolla
            </li>
            <li
              onClick={() => {
                setFilterModel("Cruze");
                setRenderFilter(!renderFilter);
              }}
            >
              Cruze
            </li>
            <li
              onClick={() => {
                setFilterModel("Fit");
                setRenderFilter(!renderFilter);
              }}
            >
              Fit
            </li>
            <li
              onClick={() => {
                setFilterModel("Gol");
                setRenderFilter(!renderFilter);
              }}
            >
              Gol
            </li>
            <li
              onClick={() => {
                setFilterModel("Ka");
                setRenderFilter(!renderFilter);
              }}
            >
              Ka
            </li>
            <li
              onClick={() => {
                setFilterModel("Onix");
                setRenderFilter(!renderFilter);
              }}
            >
              Onix
            </li>
            <li
              onClick={() => {
                setFilterModel("Porsche 718");
                setRenderFilter(!renderFilter);
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
                setRenderFilter(!renderFilter);
              }}
            >
              Azul
            </li>
            <li
              onClick={() => {
                setFilterColor("Branca");
                setRenderFilter(!renderFilter);
              }}
            >
              Branca
            </li>
            <li
              onClick={() => {
                setFilterColor("Cinza");
                setRenderFilter(!renderFilter);
              }}
            >
              Cinza
            </li>
            <li
              onClick={() => {
                setFilterColor("Prata");
                setRenderFilter(!renderFilter);
              }}
            >
              Prata
            </li>
            <li
              onClick={() => {
                setFilterColor("Preta");
                setRenderFilter(!renderFilter);
              }}
            >
              Preta
            </li>
            <li
              onClick={() => {
                setFilterColor("Verde");
                setRenderFilter(!renderFilter);
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
                setRenderFilter(!renderFilter);
              }}
            >
              2022
            </li>
            <li
              onClick={() => {
                setFilterAge(2021);
                setRenderFilter(!renderFilter);
              }}
            >
              2021
            </li>
            <li
              onClick={() => {
                setFilterAge(2018);
                setRenderFilter(!renderFilter);
              }}
            >
              2018
            </li>
            <li
              onClick={() => {
                setFilterAge(2015);
                setRenderFilter(!renderFilter);
              }}
            >
              2015
            </li>
            <li
              onClick={() => {
                setFilterAge(2013);
                setRenderFilter(!renderFilter);
              }}
            >
              2013
            </li>
            <li
              onClick={() => {
                setFilterAge(2012);
                setRenderFilter(!renderFilter);
              }}
            >
              2012
            </li>
            <li
              onClick={() => {
                setFilterAge(2010);
                setRenderFilter(!renderFilter);
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
                setRenderFilter(!renderFilter);
              }}
            >
              Diesel
            </li>
            <li
              onClick={() => {
                setFilterFuel("Etanol");
                setRenderFilter(!renderFilter);
              }}
            >
              Etanol
            </li>
            <li
              onClick={() => {
                setFilterFuel("Gasolina");
                setRenderFilter(!renderFilter);
              }}
            >
              Gasolina
            </li>
            <li
              onClick={() => {
                setFilterFuel("Flex");
                setRenderFilter(!renderFilter);
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
                setRenderFilter(!renderFilter);
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
                setRenderFilter(!renderFilter);
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
                setRenderFilter(!renderFilter);
              }}
              font="grey-0-1"
            >
              Mínimo
            </Button>
            <Button
              onClick={() => {
                setFilterPrice(true);
                setRenderFilter(!renderFilter);
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
