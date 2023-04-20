import { createContext, useState, useEffect, ReactNode } from "react";
import { Api } from "../../services/api";
import { useNavigate } from "react-router-dom";


export interface iUserLogin {
  email: string;
  password: string;
}

export interface iUserRegister {
  name: string
  email: string
  cpf: number
  phone: number
  birthDate: Date
  description: string
  password: string
  confirmPassword: string
  cep: number
  state: string
  city: string
  street: string
  number: string
  complement: string
}

interface iUserProviderChildren {
  children: ReactNode
}

interface iUserContext {
  userLogin: (info: iUserLogin) => void;
  userRegister: (info: iUserRegister) => void;
  activeButton: boolean;
  setActiveButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

function UserProvider({ children }: iUserProviderChildren) {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      if (token) {
        try {

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
      localStorage.setItem("token", response.data.body);

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
      isSeller:activeButton,
      address: {
        cep: info.cep,
        state: info.state,
        city: info.city,
        street: info.street,
        number: info.number,
        complement: info.complement,
      }
    };
    try {
      const response = await Api.post("/users", newInfo);

      localStorage.setItem("token", response.data.token);
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (<UserContext.Provider value={{ userLogin, userRegister, activeButton, setActiveButton }}>{children}</UserContext.Provider>)

}

export default UserProvider;