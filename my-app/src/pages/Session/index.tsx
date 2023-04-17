import Footer from "../../components/Footer";
import { Button } from "../../components/button/style.button";
import { Input } from "../../components/input/style.input";
import { Header } from "../../components/header";
// import Form from "../Register/form";
import LoginStyle from "./loginStyle";
import { Link, useNavigate } from "react-router-dom";
import schemaLogin from "./loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";


export interface iUserLogin {
    email: string;
    password: string;
  }
  const userLogin = ()=>console.log("ta Funfando")

const LoginPage = ()=>{
    const navigate = useNavigate();
    // const { userLogin } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("WorkMatch:token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({ resolver: yupResolver(schemaLogin) });

    return(<>
    <Header/>
    <LoginStyle>
    <div className="container">
<h2>Login</h2>
<form onSubmit={()=>handleSubmit(userLogin)}>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            font="regular-input"
            type="text"
            placeholder="Digite seu email"
            {...register("email")}
          />
           {errors.email ? <p className="error">{errors.email.message}</p> : ""} 
          <label htmlFor="password">Senha </label>
          <Input
            id="password"
            font="regular-input"
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          {errors.password ? (
            <p className="error">{errors.password.message}</p>
          ) : (
            ""
          )}
          <span onClick={()=>{console.log("teste")}}>Esqueci minha senha</span>
          <Button font="brand-0-1" type="submit">Login</Button>
          <h4>Ainda não possui conta?</h4>
          <Link className="otherButton" to={"/register"}>
            Cadastrar
          </Link>

        </form>
    </div>
    </LoginStyle>
    <Footer/>
    </>
    )
}

export default LoginPage