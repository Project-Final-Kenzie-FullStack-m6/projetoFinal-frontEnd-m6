import { Button } from "../../../components/button/style.button";
import { StyledHeaderAdvertiser } from "./style";

const HeaderAdvertiser = ({owner, handleShowModal }: any) => {
  return (
    <StyledHeaderAdvertiser>
      <div className="background"></div>
      <div className="divCard">
        <div>
          <Button className="profile" font="ball-0-1">
            SL
          </Button>
          <h2>
            Samuel Leão <strong>anunciante</strong>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s
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
