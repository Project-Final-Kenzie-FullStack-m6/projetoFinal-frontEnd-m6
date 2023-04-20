import Footer from "../../components/Footer";
import { Button } from "../../components/button/style.button";
import { Input } from "../../components/input/style.input";
import { Header } from "../../components/header";
import RegisterStyle from "./RegisterStyle";
import { useNavigate } from "react-router-dom";
import { TextArea } from "../../components/input/style.input";
import { useContext, useEffect } from "react"
import { yupResolver } from "@hookform/resolvers/yup";
import schemaRegister from "./registerSchema";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/AuthUserContext/userContext";

interface iUserRegister {
    name: string
    email: string
    cpf: number
    phone: number
    birthDate:Date
    description:string
    password:string
    confirmPassword:string
    cep:number
    state:string
    city:string
    street:string
    number:string
    complement:string
}


const RegisterPage = () => {
    const navigate = useNavigate();
    const { userRegister,activeButton,setActiveButton } = useContext(UserContext);

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
    } = useForm<iUserRegister>({ resolver: yupResolver(schemaRegister) });

    const handleButton1Click = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setActiveButton(true);
    };

    const handleButton2Click = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setActiveButton(false);
    };

    return (<>
        <Header />
        <RegisterStyle>
            <div className="container">
                <h2>Cadastro</h2>
                <form onSubmit={handleSubmit(userRegister)}>
                    <h3>informações pessoais</h3>
                    <label htmlFor="name">Nome</label>
                    <Input id="name" font="regular-input" placeholder="Ex: Rafael Soares"
                        {...register("name")}></Input>
                    {errors.name ? <p className="error">{errors.name.message}</p> : ""}
                    <label htmlFor="email">Email</label>
                    <Input
                        id="email"
                        font="regular-input"
                        type="text"
                        placeholder="Digite seu email"
                        {...register("email")}
                    />
                    {errors.email ? <p className="error">{errors.email.message}</p> : ""}
                    <label htmlFor="cpf">CPF</label>
                    <Input
                        id="cpf"
                        font="regular-input"
                        type="text"
                        placeholder="000.000.000-11"
                        {...register("cpf")}
                    />
                    {errors.cpf ? <p className="error">{errors.cpf.message}</p> : ""}
                    <label htmlFor="celular">Celular</label>
                    <Input
                        id="celular"
                        font="regular-input"
                        type="text"
                        placeholder="(DDD)12345-6789"
                        {...register("phone")}
                    />
                    {errors.phone ? <p className="error">{errors.phone.message}</p> : ""}
                    <label htmlFor="Data de nascimento">Data de nascimento</label>
                    <input className="birthDate" type="date" {
                        ...register("birthDate")} />
                    <label htmlFor="desc">Descrição</label>
                    <TextArea
                        id="desc"
                        font="text-area"
                        placeholder="digitar descrição"
                        {...register("description")}
                    />
                    {errors.description ? <p className="error">{errors.description.message}</p> : ""}
                    <h3>Informações de endereço</h3>
                    <label htmlFor="CEP">CEP</label>
                    <Input
                        id="CEP"
                        font="regular-input"
                        type="text"
                        placeholder="12345678"
                        {...register("cep")}
                    />
                    {errors.cep ? <p className="error">{errors.cep.message}</p> : ""}
                    <div className="doisInputs">
                        <div className="posicionamento">
                            <label htmlFor="estado">Estado</label>
                            <Input
                                id="estado"
                                font="regular-input"
                                type="text"
                                placeholder="Digitar estado"
                                {...register("state")}
                            />
                            {errors.state ? <p className="error">{errors.state.message}</p> : ""}
                        </div><div className="posicionamento">
                            <label htmlFor="cidade">Cidade</label>
                            <Input
                                id="cidade"
                                font="regular-input"
                                type="text"
                                placeholder="Digitar cidade"
                                {...register("city")}
                            />
                            {errors.city ? <p className="error">{errors.city.message}</p> : ""}</div>

                    </div>
                    <label htmlFor="rua">Rua</label>
                    <Input id="rua"
                        font="regular-input"
                        type="text"
                        placeholder="Digitar Rua" {...register("street")} />
                    {errors.street ? <p className="error">{errors.street.message}</p> : ""}
                    <div className="doisInputs">
                        <div className="posicionamento">

                            <label htmlFor="Numero">Numero</label>
                            <Input
                                id="Numero"
                                font="regular-input"
                                type="text"
                                placeholder="Digitar numero"
                                {...register("number")}
                            />
                            {errors.number ? <p className="error">{errors.number.message}</p> : ""}
                        </div>
                        <div className="posicionamento">
                            <label htmlFor="complemento">Complemento</label>
                            <Input
                                id="complemento"
                                font="regular-input"
                                type="text"
                                placeholder="Ex: Apart. 300"
                                {...register("complement")}
                            />{errors.complement ? <p className="error">{errors.complement.message}</p> : ""}
                        </div>
                    </div>
                    <h3>Tipo de conta</h3>
                    <div className="doisInputs">
                        <Button onClick={handleButton2Click} font={!activeButton ? "brand-0-1" : "black-5-6"}>Comprador</Button>
                        <Button onClick={handleButton1Click} font={activeButton ? "brand-0-1" : "black-5-6"}>Anunciante</Button>
                    </div>

                    <label htmlFor="password">Senha </label>
                    <Input
                        id="password"
                        font="regular-input"
                        type="password"
                        placeholder="Digite sua senha"
                        {...register("password")}
                    />
                    {errors.password ? <p className="error">{errors.password.message}</p> : ""}
                    <label htmlFor="confirmPassword">Confirmar senha </label>
                    <Input
                        id="confirmPassword"
                        font="regular-input"
                        type="password"
                        placeholder="Digite sua senha"
                        {...register("confirmPassword")}
                    />
                    {errors.password ? <p className="error">{errors.password.message}</p> : ""}
                    <Button font="brand-0-1" type="submit">Finalizar Cadastro</Button>
                </form>
            </div>
        </RegisterStyle>
        <Footer />
    </>
    )
}

export default RegisterPage
