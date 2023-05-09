import { createContext, useState, useEffect, ReactNode } from "react";
import { Api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { iUser, iUserUpdate } from "../../interface/users";

export interface iUserLogin {
	email: string;
	password: string;
}

export interface iUserRegister {
	name: string;
	email: string;
	cpf: number;
	phone: number;
	birthDate: Date;
	description: string;
	password: string;
	confirmPassword: string;
	cep: number;
	state: string;
	city: string;
	street: string;
	number: string;
	complement: string;
}

export interface iUserSendResetPassword {
	email: string;
}

export interface iUserResetPassword {
	password: string;
	password1: string;
}

interface iUserProviderChildren {
	children: ReactNode;
}

interface iUserContext {
	userLogin: (info: iUserLogin) => void;
	userRegister: (info: iUserRegister) => void;
	activeButton: boolean;
	setActiveButton: React.Dispatch<React.SetStateAction<boolean>>;
	setEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
	setEditAdress: React.Dispatch<React.SetStateAction<boolean>>;
	editAdress:boolean;
	editProfile:boolean;
	deleteUser: () => void;
	updateUser: (data: iUserUpdate) => void;
	userData: iUser;
	setUserData: React.Dispatch<React.SetStateAction<{}>>;
	sendResetPassword: (data: iUserSendResetPassword) => void;
	resetPassword: (data: iUserResetPassword) => void;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

function UserProvider({ children }: iUserProviderChildren) {
	const navigate = useNavigate();
	const [activeButton, setActiveButton] = useState(true);
	const [editProfile, setEditProfile] = useState(false);
  const [editAdress, setEditAdress] = useState(false);
	const [userData, setUserData] = useState({} as iUser);

	useEffect(() => {
		async function loadUser() {
			const token = localStorage.getItem("token");
			const userId = localStorage.getItem("userId");
			if (token) {
				try {
					Api.defaults.headers.authorization = `Bearer ${token}`;
					const { data } = await Api.get("/users");
					setUserData(data);
				} catch (error) {
					localStorage.clear();
					navigate("/");
				}
			}
		}
		loadUser();
	}, [navigate]);

	async function userLogin(info: iUserLogin) {
		try {
			const response = await Api.post("/login", info);
			localStorage.setItem("token", response.data.token);
			localStorage.setItem("userId", response.data.userId);
			navigate("/")
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	async function userRegister(info: iUserRegister) {
		const newInfo = {
			email: info.email,
			password: info.password,
			cpf: info.cpf,
			name: info.name,
			phone: info.phone,
			birthDate: info.birthDate,
			description: info.description,
			isSeller: activeButton,
			address: {
				cep: info.cep,
				state: info.state,
				city: info.city,
				street: info.street,
				number: info.number,
				complement: info.complement,
			},
		};
		try {
			const response = await Api.post("/users", newInfo);
			navigate("/login")
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	async function updateUser(data: iUserUpdate) {
		const token = localStorage.getItem("token");

		try {
			const response = await Api.patch(`/users`, data, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log(response.data);
			navigate("/advertiser");
		} catch (error) {
			console.error(error);
		}
	}

	async function deleteUser() {
		try {
			await Api.delete(`/users`);
			localStorage.clear();
			navigate("/");
		} catch (error) {
			console.error(error);
		}
	}

	async function sendResetPassword(data: iUserSendResetPassword) {
		try {
			const response = await Api.post("/users/resetPassword", data);
			navigate("/");
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	async function resetPassword(data: iUserResetPassword) {
		const searchParams = new URLSearchParams(window.location.search);
		const userToken = searchParams.get("token");
		try {
			const response = await Api.patch(
				`/users/resetPassword/${userToken}`,
				data
			);
			navigate("/");

			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<UserContext.Provider
			value={{
				userLogin,
				userRegister,
				activeButton,
				setActiveButton,
				editProfile,
				editAdress,
				setEditAdress,
				setEditProfile,
				deleteUser,
				updateUser,
				userData,
				setUserData,
				sendResetPassword,
				resetPassword,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}

export default UserProvider;
