import { Button } from "../../../components/button/style.button";
import { UserContext } from "../../../contexts/AuthUserContext/userContext";
import { iUser } from "../../../interface/users";
import { StyledHeaderAdvertiser } from "./style";
import {useContext} from "react"

const HeaderAdvertiser = ({owner, handleShowModal }: any) => {
  const {userData} = useContext(UserContext)
  return (
    <StyledHeaderAdvertiser>
      <div className="background"></div>
      <div className="divCard">
        <div>
          <Button className="profile" font="ball-0-1">
            SL
          </Button>
          <h2>
            {userData.name} <strong>anunciante</strong>
          </h2>
          <p>
            {userData.description}
          </p>{owner?
          (<Button onClick={handleShowModal} className="createAd" font="brand-10-11">
            Criar Anuncio
          </Button>):
          ("")}
        </div>
      </div>
    </StyledHeaderAdvertiser>
  );
};

export default HeaderAdvertiser;
