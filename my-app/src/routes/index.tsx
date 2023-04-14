import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Home/homeResponsive/index";
import DetailsAdversiment from "../pages/detailsAdversiment";

const RoutesMain = () => (
  <Routes>
    <Route path="/home" element={<Homepage />} />
    <Route path="/details" element={<DetailsAdversiment />} />
  </Routes>
);

export default RoutesMain;
