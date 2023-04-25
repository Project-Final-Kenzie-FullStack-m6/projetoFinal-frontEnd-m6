import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import {useContext, useEffect} from "react"
import { schemaAddressUpdateUser } from "../../../../validators/users"
import * as S from "./style.updateAddressUserModal"
import { Input } from "../../../input/style.input"
import { Button } from "../../../button/style.button"
import { iUserUpdate } from "../../../../interface/users"
import { UserContext } from "../../../../contexts/AuthUserContext/userContext"


const UpdateAddressModal = () => {
    
    const {updateUser, userData} = useContext(UserContext)

    const {
        register,
        handleSubmit,
        setValue
    } = useForm<iUserUpdate>({
        resolver: yupResolver(schemaAddressUpdateUser)
    })

    useEffect(() =>{
        setValue('address.cep', userData.address?.cep)
        setValue('address.state', userData.address?.state)
        setValue('address.city', userData.address?.city)
        setValue('address.street', userData.address?.street)
        setValue('address.number', userData.address?.number)
        setValue('address.complement', userData.address?.complement)
    }, [userData, setValue])


    return (
        <>
        <S.StyledContainerBackground>
            <S.StyledContainer>
                <S.StyledBtnClose>
                    <h1>Editar endereço</h1>
                    <button>X</button>
                </S.StyledBtnClose>
                <S.StyledTitle>
                    <h1>Informações de endereço</h1>
                </S.StyledTitle>

                <S.StyledFormContainer>
                    <S.StyledForm onSubmit={handleSubmit(updateUser)}>
                        <label htmlFor="cep">
                            CEP
                            <Input
                                font="regular-input-3"
                                type="number"
                                id="cep"
                                {...register('address.cep')}
                            />
                        </label>

                        <div className="sideDivContainer">
                            <div className="sideOne">
                                <label htmlFor="state">
                                    Estado
                                    <Input
                                        font="regular-input-2"
                                        type="text"
                                        id="state"
                                        {...register("address.state")}
                                    />
                                </label>
                            </div>
                            <div className="sideTwo">
                                <label htmlFor="city">
                                    Cidade
                                    <Input
                                        font="regular-input-2"
                                        type="text"
                                        id="city"
                                        {...register("address.city")}
                                    />
                                </label>
                            </div>
                        </div>

                        <label htmlFor="street">
                            Rua
                            <Input
                                font="regular-input-3"
                                type="text"
                                id="street"
                                {...register("address.street")}
                            />
                        </label>

                        <div className="sideDivContainer">
                            <div className="sideOne">
                                <label htmlFor="number">
                                    Número
                                    <Input
                                        font="regular-input-2"
                                        type="text"
                                        id="number"
                                        {...register("address.number")}
                                    />
                                </label>
                            </div>
                            <div className="sideTwo">
                                <label htmlFor="complement">
                                    Complemento
                                    <Input
                                        font="regular-input-2"
                                        type="text"
                                        id="complement"
                                        {...register("address.complement")}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="btnEvent">
                            <Button
                                font="grey-4-5"
                            >
                                Cancelar
                            </Button>
                            <Button
                                font="purple-0-2"
                                type="submit"
                            >
                                Salvar alterações
                            </Button>
                        </div>


                    </S.StyledForm>
                </S.StyledFormContainer>
            </S.StyledContainer>
        </S.StyledContainerBackground>

        </>
    )
}
export default UpdateAddressModal;