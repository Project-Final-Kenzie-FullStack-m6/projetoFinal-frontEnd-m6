import { Button } from "../../../components/button/style.button";
import { CardAdversiment } from "../../../components/cardAdverstiment";
import { AdversimentContext } from "../../../contexts/adversimentContext";
import { StyledMain } from "../style";
import { useContext, useState } from "react";
import { GrFormClose } from "react-icons/gr";

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
            <ul>
              <li onClick={() => setFilterBrand("General Motors")}>General Motors</li>
              <li onClick={() => setFilterBrand("Fiat")}>Fiat</li>
              <li onClick={sdad}>Ford</li>
              <li onClick={() => setFilterBrand("Honda")}>Honda</li>
              <li onClick={() => setFilterBrand("Porsche")}>Porsche</li>
              <li onClick={() => setFilterBrand("Volswagen")}>Volswagen</li>
            </ul>
            <h2>Modelo</h2>
            <ul>
              <li onClick={() => setFilterModel("Civic")}>Civic</li>
              <li onClick={() => setFilterModel("Corolla")}>Corolla</li>
              <li onClick={() => setFilterModel("Cruze")}>Cruze</li>
              <li onClick={() => setFilterModel("Fit")}>Fit</li>
              <li onClick={() => setFilterModel("Gol")}>Gol</li>
              <li onClick={() => setFilterModel("Ka")}>Ka</li>
              <li onClick={() => setFilterModel("Onix")}>Onix</li>
              <li onClick={() => setFilterModel("Porsche 718")}>Porsche 718</li>
            </ul>
            <h2>Cor</h2>
            <ul>
              <li onClick={() => setFilterColor("Azul")}>Azul</li>
              <li onClick={() => setFilterColor("Branca")}>Branca</li>
              <li onClick={() => setFilterColor("Cinza")}>Cinza</li>
              <li onClick={() => setFilterColor("Prata")}>Prata</li>
              <li onClick={() => setFilterColor("Preta")}>Preta</li>
              <li onClick={() => setFilterColor("Verde")}>Verde</li>
            </ul>
            <h2>Ano</h2>
            <ul>
              <li onClick={() => setFilterAge(2022)}>2022</li>
              <li onClick={() => setFilterAge(2021)}>2021</li>
              <li onClick={() => setFilterAge(2018)}>2018</li>
              <li onClick={() => setFilterAge(2015)}>2015</li>
              <li onClick={() => setFilterAge(2013)}>2013</li>
              <li onClick={() => setFilterAge(2012)}>2012</li>
              <li onClick={() => setFilterAge(2010)}>2010</li>
            </ul>
            <h2>Combustível</h2>
            <ul>
              <li onClick={() => setFilterFuel("Diesel")}>Diesel</li>
              <li onClick={() => setFilterFuel("Etanol")}>Etanol</li>
              <li onClick={() => setFilterFuel("Gasolina")}>Gasolina</li>
              <li onClick={() => setFilterFuel("Flex")}>Flex</li>
            </ul>
            <h2>KM</h2>
            <div className="divButton">
              <Button onClick={() => setFilterKM(false)} font="grey-0-1">
                Mínima
              </Button>
              <Button onClick={() => setFilterKM(true)} font="grey-0-1">
                Máxima
              </Button>
            </div>
            <h2>Preço</h2>
            <div className="divButton">
              <Button onClick={() => setFilterPrice(false)} font="grey-0-1">
                Mínimo
              </Button>
              <Button onClick={() => setFilterPrice(true)} font="grey-0-1">
                Máximo
              </Button>
            </div>
            <div className="divView">
              <Button onClick={showSideBar} font="brand-1-2">
                Ver anúncios
              </Button>
            </div>
          </section>
        </>
      ) : (
        <section className="filters sideBarOff">
          <h2>Marca</h2>
          <ul>
            <li>General Motors</li>
            <li>Fiat</li>
            <li>Ford</li>
            <li>Honda</li>
            <li>Porsche</li>
            <li>Volswagen</li>
          </ul>
          <h2>Modelo</h2>
          <ul>
            <li>Civic</li>
            <li>Corolla</li>
            <li>Cruze</li>
            <li>Fit</li>
            <li>Gol</li>
            <li>Ka</li>
            <li>Onix</li>
            <li>Porsche 718</li>
          </ul>
          <h2>Cor</h2>
          <ul>
            <li>Azul</li>
            <li>Branca</li>
            <li>Cinza</li>
            <li>Prata</li>
            <li>Preta</li>
            <li>Verde</li>
          </ul>
          <h2>Ano</h2>
          <ul>
            <li>2022</li>
            <li>2021</li>
            <li>2018</li>
            <li>2015</li>
            <li>2013</li>
            <li>2012</li>
            <li>2010</li>
          </ul>
          <h2>Combustível</h2>
          <ul>
            <li>Diesel</li>
            <li>Etanol</li>
            <li>Gasolina</li>
            <li>Flex</li>
          </ul>
          <h2>KM</h2>
          <div className="divButton">
            <Button font="grey-0-1">Mínima</Button>
            <Button font="grey-0-1">Máxima</Button>
          </div>
          <h2>Preço</h2>
          <div className="divButton">
            <Button font="grey-0-1">Mínimo</Button>
            <Button font="grey-0-1">Máximo</Button>
          </div>
        </section>
      )}
      <section className="cardList">
        <CardAdversiment />
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
