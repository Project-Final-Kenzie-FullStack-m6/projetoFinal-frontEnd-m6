import { useContext } from "react";
import { AdversimentContext } from "../../contexts/adversimentContext";
import { iAdversimentDataResponse } from "../../interface/adversiments";
import { Button } from "../button/style.button";

export const CardAdversiment = ({ owner }: any) => {
  const { filterAdversiments } = useContext(AdversimentContext);

  return (
    <>
      {filterAdversiments?.map((data: iAdversimentDataResponse, index: number) => {
        const arrayName = data.user.name?.split(" ");
        let initials = "";
        if (arrayName) {
          initials = `${arrayName[0][0]}${arrayName[arrayName.length - 1][0]}`;
        }

        return (
          <>
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
                    <div className="divMileAgePrice">
                      <div>
                        <span>{data.mileAge}</span>
                        <span>{data.age}</span>
                      </div>
                      <span>R${data.price}</span>
                    </div>
                    <div className="divAdm">
                      <Button font="grey-3-4">Editar</Button>
                      <Button font="grey-3-4">Ver detalhes</Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="divNameUser">
                      <Button font="ball-0-2">{initials}</Button>
                      <span>{data.user.name}</span>
                    </div>

                    <div className="divMileAgePrice">
                      <div>
                        <span>{`${data.mileAge}KM`}</span>
                        <span>{data.age}</span>
                      </div>
                      <span className="price">R${data.price}</span>
                    </div>
                  </>
                )}
              </div>
            </li>
          </>
        );
      })}
    </>
  );
};
