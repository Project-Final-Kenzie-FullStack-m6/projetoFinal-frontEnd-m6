import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Home/homeResponsive/index";
import DetailsAdversiment from "../pages/detailsAdversiment";
import LoginPage from "../pages/Session";
import RegisterPage from "../pages/Register";

const RoutesMain = () => (
  <Routes>
    <Route path="/home" element={<Homepage />} />
    <Route path="/details" element={<DetailsAdversiment />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
  </Routes>
);

export default RoutesMain;
