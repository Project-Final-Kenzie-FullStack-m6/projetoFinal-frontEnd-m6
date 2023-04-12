import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Home";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
  </Routes>
);

export default RoutesMain;
