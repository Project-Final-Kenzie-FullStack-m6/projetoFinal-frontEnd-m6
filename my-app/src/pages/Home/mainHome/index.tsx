import { Button } from "../../../components/button/style.button";
import { CardAdversiment } from "../../../components/cardAdverstiment";
import { StyledMain } from "../style";
import { useState } from "react";
import { GrFormClose } from "react-icons/gr";

export const MainHome = () => {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
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
