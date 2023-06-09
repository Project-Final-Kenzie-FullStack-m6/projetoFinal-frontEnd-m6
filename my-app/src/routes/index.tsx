import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Home/homeResponsive/index";
import DetailsAdversiment from "../pages/detailsAdversiment";
import LoginPage from "../pages/Session";
import CreateAdversimentModal from "../components/modals/adversiments/createAdversimentModal";
import PageAdvertiser from "../pages/PageAdvertiser";
import RegisterPage from "../pages/Register";
import UpdateUserModal from "../components/modals/user/updateUserModal";
import UpdateAddressModal from "../components/modals/user/updateAddressUserModal";
import DeleteUserModal from "../components/modals/user/deleteUserModal";
import SendResetPasswordPage from "../pages/resetPasswordSend";
import ResetPasswordPage from "../pages/resetPassword";
import UpdateAdversimentModal from "../components/modals/adversiments/updateAdversimentModal";

const RoutesMain = () => (
	<Routes>
		<Route path="/" element={<Homepage />} />
		<Route path="/details" element={<DetailsAdversiment />} />
		<Route path="/createAds" element={<CreateAdversimentModal />} />
		<Route path="/updateUser" element={<UpdateUserModal />} />
		<Route path="/updateAddress" element={<UpdateAddressModal />} />
		<Route path="/deleteUser" element={<DeleteUserModal />} />
		<Route path="/advertiser" element={<PageAdvertiser />} />
		<Route path="/advertiserUpdate" element={<UpdateAdversimentModal />} />
		<Route path="/login" element={<LoginPage />} />
		<Route path="/register" element={<RegisterPage />} />
		<Route path="/sendResetPassword" element={<SendResetPasswordPage />} />
		<Route path="/resetPassword" element={<ResetPasswordPage />} />
	</Routes>
);

export default RoutesMain;
