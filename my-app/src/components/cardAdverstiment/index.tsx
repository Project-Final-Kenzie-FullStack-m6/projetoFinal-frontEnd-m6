import { useContext, useState } from "react";
import { AdversimentContext } from "../../contexts/adversimentContext";
import { iAdversimentDataResponse } from "../../interface/adversiments";
import { Button } from "../button/style.button";
import UpdateAdversimentModal from "../modals/adversiments/updateAdversimentModal";
import { Link } from "react-router-dom";
import * as S from './style.cardAdversiment'

export const CardAdversiment = ({ owner }: any) => {
  const { filterAdversiments, getDetailsAdversiment } = useContext(AdversimentContext);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);


  const handleOpenModal = () => {
    setOpenModalUpdate(true)
  }

  const handleAdsId = (data: string) => {
    getDetailsAdversiment(data)
  }

  return (
    <>
      {openModalUpdate && <UpdateAdversimentModal setOpenModalUpdate={setOpenModalUpdate}/>}
      {filterAdversiments?.map((data: iAdversimentDataResponse, index: number) => {
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

                  {owner ? (
                    <>
                    {data.isActive? (
                      <>
                      <div className="divMileAgePrice">
                        <span className="spanActive">Ativo</span>
                        <div>
                          <div>
                            <span>{data.mileAge}</span>
                            <span>{data.age}</span>
                          </div>
                          <span>R${data.price}</span>
                        </div>
                      </div>
                      <div className="divAdm">
                        <Button
                        font="grey-3-4"
                        onClick={allEvent}
                        >Editar</Button>
                        <Link to="/details" onClick={eventDetails} className="btnProfile">Ver detalhes do anúncio</Link>
                      </div>
                      </>
                    ):
                    <>                    
                      <div className="divMileAgePrice">
                        <span className="spanInactive">Inativo</span>
                        <div>
                          <div>
                            <span>{data.mileAge}</span>
                            <span>{data.age}</span>
                          </div>
                          <span>R${data.price}</span>
                        </div>
                      </div>
                      <div className="divAdm">
                        <Button 
                        font="grey-3-4"
                        onClick={allEvent}
                        >Editar</Button>
                        <Link to="/details" onClick={eventDetails} className="btnProfile">Ver detalhes do anúncio</Link>
                      </div>
                    </>
                    }
                    </>
                  ) : (
                    <>
                    {data.isActive? (
                      <>
                      <div className="divNameUser">
                        <Button font="ball-0-2">{initials}</Button>
                        <span>{data.user.name}</span>
                      </div>

                      <div className="divMileAgePrice">
                        <span className="spanActive">Ativo</span>
                        <div>
                          <div>
                            <span>{`${data.mileAge}KM`}</span>
                            <span>{data.age}</span>
                          </div>
                          <span className="price">R${data.price}</span>
                        </div>
                      </div>
                        <div className="divAdm">
                        <Link to="/details" onClick={eventDetails} className="btn">Ver detalhes do anúncio</Link>
                        </div>
                      </>
                    ):(<>
                      <div className="divNameUser">
                        <Button font="ball-0-2">{initials}</Button>
                        <span>{data.user.name}</span>
                      </div>

                      <div className="divMileAgePrice">
                        <span className="spanInactive">Inativo</span>
                        <div>
                          <div>
                            <span>{`${data.mileAge}KM`}</span>
                            <span>{data.age}</span>
                          </div>
                          <span className="price">R${data.price}</span>
                        </div>
                      </div>
                        <div className="divAdm">
                        <Link to="/details" onClick={eventDetails} className="btn">Ver detalhes do anúncio</Link>
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
      })}
    </>
  );
};
