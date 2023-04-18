import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Home/homeResponsive/index";
import DetailsAdversiment from "../pages/detailsAdversiment";
import CreateAdversimentModal from "../components/modals/createAdversimentModal";
import LoginPage from "../pages/Session";
import PageAdvertiser from "../pages/PageAdvertiser";

const RoutesMain = () => (
  <Routes>
    <Route path="/home" element={<Homepage />} />
    <Route path="/details" element={<DetailsAdversiment />} />
    <Route path="/createAds" element={<CreateAdversimentModal />} />
    <Route path="/advertiser" element={<PageAdvertiser />} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
);

export default RoutesMain;
