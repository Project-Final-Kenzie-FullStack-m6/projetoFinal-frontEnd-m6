import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Home/homeResponsive/index";
import DetailsAdversiment from "../pages/detailsAdversiment";
import LoginPage from "../pages/Session";
import CreateAdversimentModal from "../components/modals/createAdversimentModal";
import PageAdvertiser from "../pages/PageAdvertiser";
import RegisterPage from "../pages/Register";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/details" element={<DetailsAdversiment />} />
    <Route path="/createAds" element={<CreateAdversimentModal />} />
    <Route path="/advertiser" element={<PageAdvertiser />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
  </Routes>
);

export default RoutesMain;
