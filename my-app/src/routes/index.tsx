import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Home/homeResponsive/index";
import DetailsAdversiment from "../pages/detailsAdversiment";
import LoginPage from "../pages/Session";
import CreateAdversimentModal from "../components/modals/createAdversimentModal";

const RoutesMain = () => (
  <Routes>
    <Route path="/home" element={<Homepage />} />
    <Route path="/details" element={<DetailsAdversiment />} />
    <Route path="/createAds" element={<CreateAdversimentModal />} />
  </Routes>
);

export default RoutesMain;
