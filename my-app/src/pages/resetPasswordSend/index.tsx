import Footer from "../../components/Footer";
import { Button } from "../../components/button/style.button";
import { Input } from "../../components/input/style.input";
import { Header } from "../../components/header";
// import Form from "../Register/form";
import LoginStyle from "./loginStyle";
import { Link } from "react-router-dom";
import schemaSendResetPassword from "./sendResetSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
	UserContext,
	iUserSendResetPassword,
} from "../../contexts/AuthUserContext/userContext";

const SendResetPasswordPage = () => {
	const { sendResetPassword } = useContext(UserContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<iUserSendResetPassword>({
		resolver: yupResolver(schemaSendResetPassword),
	});
	return (
		<>
			<Header />
			<LoginStyle>
				<div className="container">
					<h2>Reset your password</h2>
					<form onSubmit={handleSubmit(sendResetPassword)}>
						<label htmlFor="email">Email</label>
						<Input
							id="email"
							font="regular-input"
							type="text"
							placeholder="Type your Email"
							{...register("email")}
						/>
						{errors.email ? (
							<p className="error">{errors.email.message}</p>
						) : (
							""
						)}

						<Button font="brand-0-1" type="submit">
							Reset password
						</Button>
					</form>
				</div>
			</LoginStyle>
			<Footer />
		</>
	);
};

export default SendResetPasswordPage;
