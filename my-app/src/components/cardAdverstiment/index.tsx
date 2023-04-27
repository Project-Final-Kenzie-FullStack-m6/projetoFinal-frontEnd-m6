import { useContext } from "react";
import { AdversimentContext } from "../../contexts/adversimentContext";
import * as S from "./style.cardAdversiment";
import { iAdversimentDataResponse } from "../../interface/adversiments";
import { Button } from "../button/style.button";
import bmw from "../../assets/bmw.png";

export const CardAdversiment = ({ owner }: any) => {
  const { adversimentData } = useContext(AdversimentContext);

  return (
    <>
      <S.Container className="mobileVersion" id={`1`} key={`1`}>
        <ul className="ulAdversiment">
          <li className="liAdversiment">
            <div className="divImg">
              <img src={bmw} alt="cars" />
            </div>

            <div className="divInfos">
              <div className="divModelDescription">
                <h3>modelo 1</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem...
                </p>
              </div>

              {owner ? (
                <>
                  <div className="divMileAgePrice">
                    <div>
                      <span>0 KM</span>
                      <span>2019</span>
                    </div>
                    <span>R$ 00.000,00</span>
                  </div>
                  <div className="divAdm">
                    <Button font="grey-3-4">Editar</Button>
                    <Button font="grey-3-4">Ver detalhes</Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="divNameUser">
                    <Button font="ball-0-2">SL</Button>
                    <span>Samuel Leão</span>
                  </div>

                  <div className="divMileAgePrice">
                    <div>
                      <span>0 KM</span>
                      <span>2019</span>
                    </div>
                    <span>R$ 00.000,00</span>
                  </div>
                </>
              )}
            </div>
          </li>
          <li className="liAdversiment">
            <div className="divImg">
              <img src={bmw} alt="cars" />
            </div>

            <div className="divInfos">
              <div className="divModelDescription">
                <h3>modelo 1</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem...
                </p>
              </div>

              {owner ? (
                <>
                  <div className="divMileAgePrice">
                    <div>
                      <span>0 KM</span>
                      <span>2019</span>
                    </div>
                    <span>R$ 00.000,00</span>
                  </div>
                  <div className="divAdm">
                    <Button font="grey-3-4">Editar</Button>
                    <Button font="grey-3-4">Ver detalhes</Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="divNameUser">
                    <Button font="ball-0-2">SL</Button>
                    <span>Samuel Leão</span>
                  </div>

                  <div className="divMileAgePrice">
                    <div>
                      <span>0 KM</span>
                      <span>2019</span>
                    </div>
                    <span>R$ 00.000,00</span>
                  </div>
                </>
              )}
            </div>
          </li>
          <li className="liAdversiment">
            <div className="divImg">
              <img src={bmw} alt="cars" />
            </div>

            <div className="divInfos">
              <div className="divModelDescription">
                <h3>modelo 1</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem...
                </p>
              </div>

              {owner ? (
                <>
                  <div className="divMileAgePrice">
                    <div>
                      <span>0 KM</span>
                      <span>2019</span>
                    </div>
                    <span>R$ 00.000,00</span>
                  </div>
                  <div className="divAdm">
                    <Button font="grey-3-4">Editar</Button>
                    <Button font="grey-3-4">Ver detalhes</Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="divNameUser">
                    <Button font="ball-0-2">SL</Button>
                    <span>Samuel Leão</span>
                  </div>

                  <div className="divMileAgePrice">
                    <div>
                      <span>0 KM</span>
                      <span>2019</span>
                    </div>
                    <span>R$ 00.000,00</span>
                  </div>
                </>
              )}
            </div>
          </li>
          <li className="liAdversiment">
            <div className="divImg">
              <img src={bmw} alt="cars" />
            </div>

            <div className="divInfos">
              <div className="divModelDescription">
                <h3>modelo 1</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem...
                </p>
              </div>

              {owner ? (
                <>
                  <div className="divMileAgePrice">
                    <div>
                      <span>0 KM</span>
                      <span>2019</span>
                    </div>
                    <span>R$ 00.000,00</span>
                  </div>
                  <div className="divAdm">
                    <Button font="grey-3-4">Editar</Button>
                    <Button font="grey-3-4">Ver detalhes</Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="divNameUser">
                    <Button font="ball-0-2">SL</Button>
                    <span>Samuel Leão</span>
                  </div>

                  <div className="divMileAgePrice">
                    <div>
                      <span>0 KM</span>
                      <span>2019</span>
                    </div>
                    <span>R$ 00.000,00</span>
                  </div>
                </>
              )}
            </div>
          </li>
          <li className="liAdversiment">
            <div className="divImg">
              <img src={bmw} alt="cars" />
            </div>

            <div className="divInfos">
              <div className="divModelDescription">
                <h3>modelo 1</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem...
                </p>
              </div>

              {owner ? (
                <>
                  <div className="divMileAgePrice">
                    <div>
                      <span>0 KM</span>
                      <span>2019</span>
                    </div>
                    <span>R$ 00.000,00</span>
                  </div>
                  <div className="divAdm">
                    <Button font="grey-3-4">Editar</Button>
                    <Button font="grey-3-4">Ver detalhes</Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="divNameUser">
                    <Button font="ball-0-2">SL</Button>
                    <span>Samuel Leão</span>
                  </div>

                  <div className="divMileAgePrice">
                    <div>
                      <span>0 KM</span>
                      <span>2019</span>
                    </div>
                    <span>R$ 00.000,00</span>
                  </div>
                </>
              )}
            </div>
          </li>
          <li className="liAdversiment">
            <div className="divImg">
              <img src={bmw} alt="cars" />
            </div>

            <div className="divInfos">
              <div className="divModelDescription">
                <h3>modelo 1</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem...
                </p>
              </div>

              {owner ? (
                <>
                  <div className="divMileAgePrice">
                    <div>
                      <span>0 KM</span>
                      <span>2019</span>
                    </div>
                    <span>R$ 00.000,00</span>
                  </div>
                  <div className="divAdm">
                    <Button font="grey-3-4">Editar</Button>
                    <Button font="grey-3-4">Ver detalhes</Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="divNameUser">
                    <Button font="ball-0-2">SL</Button>
                    <span>Samuel Leão</span>
                  </div>

                  <div className="divMileAgePrice">
                    <div>
                      <span>0 KM</span>
                      <span>2019</span>
                    </div>
                    <span>R$ 00.000,00</span>
                  </div>
                </>
              )}
            </div>
          </li>
          <li className="liAdversiment">
            <div className="divImg">
              <img src={bmw} alt="cars" />
            </div>

            <div className="divInfos">
              <div className="divModelDescription">
                <h3>modelo 1</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem...
                </p>
              </div>

              {owner ? (
                <>
                  <div className="divMileAgePrice">
                    <div>
                      <span>0 KM</span>
                      <span>2019</span>
                    </div>
                    <span>R$ 00.000,00</span>
                  </div>
                  <div className="divAdm">
                    <Button font="grey-3-4">Editar</Button>
                    <Button font="grey-3-4">Ver detalhes</Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="divNameUser">
                    <Button font="ball-0-2">SL</Button>
                    <span>Samuel Leão</span>
                  </div>

                  <div className="divMileAgePrice">
                    <div>
                      <span>0 KM</span>
                      <span>2019</span>
                    </div>
                    <span>R$ 00.000,00</span>
                  </div>
                </>
              )}
            </div>
          </li>
          <li className="liAdversiment">
            <div className="divImg">
              <img src={bmw} alt="cars" />
            </div>

            <div className="divInfos">
              <div className="divModelDescription">
                <h3>modelo 1</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem...
                </p>
              </div>

              {owner ? (
                <>
                  <div className="divMileAgePrice">
                    <div>
                      <span>0 KM</span>
                      <span>2019</span>
                    </div>
                    <span>R$ 00.000,00</span>
                  </div>
                  <div className="divAdm">
                    <Button font="grey-3-4">Editar</Button>
                    <Button font="grey-3-4">Ver detalhes</Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="divNameUser">
                    <Button font="ball-0-2">SL</Button>
                    <span>Samuel Leão</span>
                  </div>

                  <div className="divMileAgePrice">
                    <div>
                      <span>0 KM</span>
                      <span>2019</span>
                    </div>
                    <span>R$ 00.000,00</span>
                  </div>
                </>
              )}
            </div>
          </li>
          <li className="liAdversiment">
            <div className="divImg">
              <img src={bmw} alt="cars" />
            </div>

            <div className="divInfos">
              <div className="divModelDescription">
                <h3>modelo 1</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem...
                </p>
              </div>

              {owner ? (
                <>
                  <div className="divMileAgePrice">
                    <div>
                      <span>0 KM</span>
                      <span>2019</span>
                    </div>
                    <span>R$ 00.000,00</span>
                  </div>
                  <div className="divAdm">
                    <Button font="grey-3-4">Editar</Button>
                    <Button font="grey-3-4">Ver detalhes</Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="divNameUser">
                    <Button font="ball-0-2">SL</Button>
                    <span>Samuel Leão</span>
                  </div>

                  <div className="divMileAgePrice">
                    <div>
                      <span>0 KM</span>
                      <span>2019</span>
                    </div>
                    <span>R$ 00.000,00</span>
                  </div>
                </>
              )}
            </div>
          </li>
        </ul>
      </S.Container>
      {adversimentData?.map((data: iAdversimentDataResponse, index: number) => {
        const arrayName = data.user.name?.split(" ");
        let inicits = "";
        if (arrayName) {
          inicits = `${arrayName[0][0]}${arrayName[arrayName.length - 1][0]}`;
        }
        return (
          <>
            <S.Container id={`${data.id}`} key={`${data.id}`}>
              <ul className="ulAdversiment">
                <li className="liAdversiment">
                  <div className="divImg">
                    <img src={`${data.images.imageUrl}`} alt="cars" />
                  </div>

                  <div className="divInfos">
                    <div className="divModelDescription">
                      <h3>{data.model}</h3>
                      <p>{data.description}</p>
                    </div>

                    <div className="divNameUser">
                      <Button font="ball-0-2">{inicits.toUpperCase()}</Button>
                      <span>{data.user.name}</span>
                    </div>

                    <div className="divMileAgePrice">
                      <div>
                        <span>{data.mileAge}</span>
                        <span>{data.age}</span>
                      </div>
                      <span>{data.price}</span>
                    </div>
                    {owner ? (
                      <>
                        <div>
                          <Button font="grey-0-1">Editar</Button>
                          <Button font="grey-0-1">Ver detalhes</Button>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </li>
              </ul>
            </S.Container>
          </>
        );
      })}
    </>
  );
};
