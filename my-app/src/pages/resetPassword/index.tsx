import Footer from "../../components/Footer";
import { Button } from "../../components/button/style.button";
import { Input } from "../../components/input/style.input";
import { Header } from "../../components/header";
// import Form from "../Register/form";
import LoginStyle from "./loginStyle";
import { Link, useNavigate } from "react-router-dom";
import schemaResetPassword from "./resetSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
	UserContext,
	iUserResetPassword,
} from "../../contexts/AuthUserContext/userContext";

const ResetPasswordPage = () => {
	const navigate = useNavigate();
	const { resetPassword } = useContext(UserContext);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			navigate("/");
		}
	}, [navigate]);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<iUserResetPassword>({
		resolver: yupResolver(schemaResetPassword),
	});
	const password = watch(["password"]);
	const password1 = watch(["password1"]);
	const [passwordMatch, setPasswordsMatch] = useState<boolean>(false);

	useEffect(() => {
		if (password[0] === password1[0]) {
			setPasswordsMatch(true);
		} else {
			setPasswordsMatch(false);
		}
	}, [watch, setPasswordsMatch, password, password1, passwordMatch]);

	return (
		<>
			<Header />
			<LoginStyle>
				<div className="container">
					<h2>Reset your password</h2>
					<form onSubmit={handleSubmit(resetPassword)}>
						<label htmlFor="password">New password</label>
						<Input
							id="password"
							font="regular-input"
							type="password"
							placeholder="New password"
							{...register("password")}
						/>
						{errors.password ? (
							<p className="error">{errors.password.message}</p>
						) : (
							""
						)}
						<label htmlFor="password">
							Re-type your new password
						</label>
						<Input
							id="password2"
							font="regular-input"
							type="password"
							placeholder="Re-type your new password"
							{...register("password1")}
						/>

						{errors.password1 ? (
							<p className="error">{errors.password1.message}</p>
						) : (
							""
						)}
						{passwordMatch === false ? (
							<p className="error">Passwords do not match</p>
						) : (
							""
						)}

						<Button
							font="brand-0-1"
							type="submit"
							disabled={!passwordMatch}
						>
							Reset password
						</Button>
					</form>
				</div>
			</LoginStyle>
			<Footer />
		</>
	);
};

export default ResetPasswordPage;
