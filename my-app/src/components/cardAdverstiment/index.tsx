import { useContext, useState } from "react";
import { AdversimentContext } from "../../contexts/adversimentContext";
import { iAdversimentDataResponse } from "../../interface/adversiments";
import { Button } from "../button/style.button";
import UpdateAdversimentModal from "../modals/adversiments/updateAdversimentModal";
import { Link } from "react-router-dom";
import * as S from './style.cardAdversiment'


export const CardAdversiment = (owner:any) => {
  const { filterAdversiments, getDetailsAdversiment, adversimentData } = useContext(AdversimentContext);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const handleOpenModal = () => {
    setOpenModalUpdate(true)
  }

  const handleAdsId = (data: string) => {
    getDetailsAdversiment(data)
  }

  const formatPrice = (value: any) =>{
    return value?.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  }


  const formatKms = (value: any) =>{
    return value?.toLocaleString('pt-BR') + ' km';
  }

  const userAdversiments = adversimentData.filter((data) => data.user.id == owner.id)
  
  
    return (
      <>
        {openModalUpdate && <UpdateAdversimentModal setOpenModalUpdate={setOpenModalUpdate} />}

        {filterAdversiments.length === 0 ? (
          <>
            <S.Details>
              <p className="textAdversiment">Não há nenhum anúncio para exibir.</p>
            </S.Details>
          </>
        ) : (<>{window.location.pathname === "/advertiser"?(<>{userAdversiments?.map((data: iAdversimentDataResponse, index: number) => {
          const arrayName = data.user.name?.split(" ");
          let initials = "";
          if (arrayName) {
            initials = `${arrayName[0][0]}${arrayName[arrayName.length - 1][0]}`;
          }

          const allEvent = () => {
            handleOpenModal()
            handleAdsId(data.id)
          }

          const eventDetails = () => {
            handleAdsId(data.id)
          }
          return (
            <>
              <S.Details>
                <div>
                  <li className="liAdversiment" id={`${data.id}`} key={`${data.id}`}>
                    <div className="divImg">
                      <img src={`${data.images[0].imageUrl}`} alt="car" />
                    </div>
                    <div className="divInfos">
                      <div className="divModelDescription">
                        <h3>{data.model}</h3>
                        <p>{data.description}</p>
                      </div>

                      {owner.owner ? (
                        <>
                          {data.isActive ? (
                            <>
                              <div className="divMileAgePrice">
                                <span className="spanActive">Ativo</span>
                                <div>
                                  <div>
                                    <span>{formatKms(data.mileAge)}</span>
                                    <span>{data.age}</span>
                                  </div>
                                  <span>{formatPrice(data.price)}</span>
                                </div>
                              </div>
                              <div className="divAdm">
                                <Button
                                  font="grey-3-4"
                                  onClick={allEvent}
                                >Editar</Button>
                                <Link to={`/details?id=${data.id}`} onClick={eventDetails} className="btnProfile">Ver detalhes do anúncio</Link>
                              </div>
                            </>
                          ) :
                            <>
                              <div className="divMileAgePrice">
                                <span className="spanInactive">Inativo</span>
                                <div>
                                  <div>
                                    <span>{formatKms(data.mileAge)}</span>
                                    <span>{data.age}</span>
                                  </div>
                                  <span>{formatPrice(data.price)}</span>
                                </div>
                              </div>
                              <div className="divAdm">
                                <Button
                                  font="grey-3-4"
                                  onClick={allEvent}
                                >Editar</Button>
                                <Link to={`/details?id=${data.id}`} onClick={eventDetails} className="btnProfile">Ver detalhes do anúncio</Link>
                              </div>
                            </>
                          }
                        </>
                      ) : (
                        <>
                          {data.isActive ? (
                            <>
                              <div className="divNameUser">
                                <Button font="ball-0-2">{initials}</Button>
                                <span>{data.user.name}</span>
                              </div>

                              <div className="divMileAgePrice">
                                <span className="spanActive">Ativo</span>
                                <div>
                                  <div>
                                    <span>{formatKms(data.mileAge)}</span>
                                    <span>{data.age}</span>
                                  </div>
                                  <span className="price">{formatPrice(data.price)}</span>
                                </div>
                              </div>
                              <div className="divAdm">
                                <Link to={`/details?id=${data.id}`} onClick={eventDetails} className="btn">Ver detalhes do anúncio</Link>
                              </div>
                            </>
                          ) : (<>
                            <div className="divNameUser">
                              <Button font="ball-0-2">{initials}</Button>
                              <span>{data.user.name}</span>
                            </div>

                            <div className="divMileAgePrice">
                              <span className="spanInactive">Inativo</span>
                              <div>
                                <div>
                                  <span>{formatKms(data.mileAge)}</span>
                                  <span>{data.age}</span>
                                </div>
                                <span className="price">{formatPrice(data.price)}</span>
                              </div>
                            </div>
                            <div className="divAdm">
                              <Link to={`/details?id=${data.id}`} onClick={eventDetails} className="btn">Ver detalhes do anúncio</Link>
                            </div>
                          </>)}
                        </>
                      )}
                    </div>
                  </li>
                </div>
              </S.Details>
            </>
          );
        })}</>):(<>{filterAdversiments?.map((data: iAdversimentDataResponse, index: number) => {
          const arrayName = data.user.name?.split(" ");
          let initials = "";
          if (arrayName) {
            initials = `${arrayName[0][0]}${arrayName[arrayName.length - 1][0]}`;
          }

          const allEvent = () => {
            handleOpenModal()
            handleAdsId(data.id)
          }

          const eventDetails = () => {
            handleAdsId(data.id)
          }
          return (
            <>
              <S.Details>
                <div>
                  <li className="liAdversiment" id={`${data.id}`} key={`${data.id}`}>
                    <div className="divImg">
                      <img src={`${data.images[0].imageUrl}`} alt="car" />
                    </div>
                    <div className="divInfos">
                      <div className="divModelDescription">
                        <h3>{data.model}</h3>
                        <p>{data.description}</p>
                      </div>

                      {owner.owner ? (
                        <>
                          {data.isActive ? (
                            <>
                              <div className="divMileAgePrice">
                                <span className="spanActive">Ativo</span>
                                <div>
                                  <div>
                                    <span>{formatKms(data.mileAge)}</span>
                                    <span>{data.age}</span>
                                  </div>
                                  <span>{formatPrice(data.price)}</span>
                                </div>
                              </div>
                              <div className="divAdm">
                                <Button
                                  font="grey-3-4"
                                  onClick={allEvent}
                                >Editar</Button>
                                <Link to={`/details?id=${data.id}`} onClick={eventDetails} className="btnProfile">Ver detalhes do anúncio</Link>
                              </div>
                            </>
                          ) :
                            <>
                              <div className="divMileAgePrice">
                                <span className="spanInactive">Este anúncio esta Inativo</span>
                                <div>
                                  <div>
                                    <span>{formatKms(data.mileAge)}</span>
                                    <span>{data.age}</span>
                                  </div>
                                  <span>{formatPrice(data.price)}</span>
                                </div>
                              </div>
                              <div className="divAdm">
                                <Button
                                  font="grey-3-4"
                                  onClick={allEvent}
                                >Editar</Button>
                                <Link to={`/details?id=${data.id}`} onClick={eventDetails} className="btnProfile">Ver detalhes do anúncio</Link>
                              </div>
                            </>
                          }
                        </>
                      ) : (
                        <>
                          {data.isActive ? (
                            <>
                              <div className="divNameUser">
                                <Button font="ball-0-2">{initials}</Button>
                                <span>{data.user.name}</span>
                              </div>

                              <div className="divMileAgePrice">
                                <span className="spanActive">Ativo</span>
                                <div>
                                  <div>
                                    <span>{formatKms(data.mileAge)}</span>
                                    <span>{data.age}</span>
                                  </div>
                                  <span className="price">{formatPrice(data.price)}</span>
                                </div>
                              </div>
                              <div className="divAdm">
                                <Link to={`/details?id=${data.id}`} onClick={eventDetails} className="btn">Ver detalhes do anúncio</Link>
                              </div>
                            </>
                          ) : (<>
                            <div className="divNameUser">
                              <Button font="ball-0-2">{initials}</Button>
                              <span>{data.user.name}</span>
                            </div>

                            <div className="divMileAgePrice">
                              <span className="spanInactive">Este anúncio esta Inativo</span>
                              <div>
                                <div>
                                  <span>{formatKms(data.mileAge)}</span>
                                  <span>{data.age}</span>
                                </div>
                                <span className="price">{formatPrice(data.price)}</span>
                              </div>
                            </div>
                            <div className="divAdm">
                              <Link to={`/details?id=${data.id}`} onClick={eventDetails} className="btn">Ver detalhes do anúncio</Link>
                            </div>
                          </>)}
                        </>
                      )}
                    </div>
                  </li>
                </div>
              </S.Details>
            </>
          );
        })}</>)}
          
        </>)}
      </>
    );
};
