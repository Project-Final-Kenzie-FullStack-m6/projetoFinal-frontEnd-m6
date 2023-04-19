import { useContext, useState } from "react";
import { Button } from "../../button/style.button";
import { Input, Select, TextArea } from "../../input/style.input";
import * as S from "./style.createAdversimentModal"
import { AdversimentContext } from "../../../contexts/adversimentContext";
import {useForm} from "react-hook-form"
import { iAdversimentDataRegister } from "../../../interface/adversiments";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaCreateAdvertisement from "../../../validators/adversiments/createAdversimentUser";
import { ApiFipeContext } from "../../../contexts/ApiFipeContext";



const CreateAdversimentModal = () => {

    const {postNewAdversiment, setModalAddOpen} = useContext(AdversimentContext)
    const {ApiFipeData, DataCars, DataModelCar,searchBrand, searchModel} = useContext(ApiFipeContext)
    const [NumImages, setNumImages] = useState(0)

    const dataBrand = Object.keys(ApiFipeData)

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<iAdversimentDataRegister>({
        resolver: yupResolver(schemaCreateAdvertisement)
    });

    const watchedFields = watch(["brand", "model", "age", "fuelType", "mileAge", "color", "fipe", "price", "description", "images"])

    console.log(watchedFields)

    const handleAddImage = () => {
        setNumImages(NumImages + 1)
    };

    return(
        <>
            <S.StyledContainer>
                <S.StyledBtnClose>
                    <h1>Criar anúncio</h1>
                    <button
                        onClick={() => {
                            setModalAddOpen(false)
                        }}
                    >X</button>
                </S.StyledBtnClose>
                <S.StyledTitle>
                    <h1>Informações do veículo</h1>
                </S.StyledTitle>
                <S.StyledFormContainer>
                    <S.StyledForm onSubmit={handleSubmit(postNewAdversiment)}>
                        
                        <label style={{marginBottom: 24}} htmlFor="brand">
                            Marca
                            <Select 
                            // onChange={searchBrand}
                            font="regular-select"
                            id="brand"
                            {...register("brand", {onChange: searchBrand})}
                            >
                            {dataBrand?.map((data: any, index: any) =>{
                                return (
                                    <>
                                        <option key={index} value={data}>{data}</option>
                                    </>
                                )
                            })}
                            </Select>
                        </label>

                        <label htmlFor="model">
                            Modelo
                            <Select 
                            // onChange={searchModel}
                            font="regular-select"
                            id="model"
                            {...register("model", {onChange: searchModel})}
                            >
                            {DataCars?.map((data: any, index: any) =>{
                                return (
                                    <>
                                        <option key={index} value={data.name}>{data.name}</option>
                                    </>
                                )
                            })}
                            </Select>
                        </label>

                        <div className="sideDivContainer">
                            <div className="sideOne">
                                <label htmlFor="age">
                                    Ano
                                    <Input 
                                    font="regular-input-2"
                                    placeholder="--"
                                    type="number"
                                    id="age"
                                    defaultValue={DataModelCar?.map((data: any) => data.year)}
                                    {...register("age")}/>
                                </label>
                            </div>

                            <div className="sideTwo">
                                <label htmlFor="fuelType">
                                    Combustível
                                    <Input 
                                    font="regular-input-2"
                                    placeholder="--"
                                    type="text"
                                    id="fuelType"
                                    value={DataModelCar?.map((data: any) => {

                                        if(data.fuel === 1){
                                            return "flex"
                                        }

                                        if(data.fuel === 2){
                                            return "Híbrido"
                                        }
                                        
                                        if(data.fuel === 3){
                                            return "Elétrico"
                                        }
                                    })}
                                    {...register("fuelType")}/>
                                </label>
                            </div>
                        </div>

                        <div className="sideDivContainer">
                            <div className="sideOne">
                                <label htmlFor="mileAge">
                                    Quilometragem
                                    <Input 
                                    font="regular-input-2"
                                    placeholder="Digite o km do veículo"
                                    type="number"
                                    id="mileAge"
                                    {...register("mileAge")}/>
                                </label>
                            </div>

                            <div className="sideTwo">
                                <label htmlFor="color">
                                    Cor
                                    <Input 
                                    font="regular-input-2"
                                    placeholder="Digite a cor do veículo"
                                    type="text"
                                    id="color"
                                    {...register("color")}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="sideDivContainer">
                            <div className="sideOne">
                                <label htmlFor="fipe">
                                    Preço tabela FIPE
                                    <Input 
                                    font="regular-input-2"
                                    placeholder="--"
                                    type="text"
                                    id="fipe"
                                    value={DataModelCar?.map((data: any) => {

                                        const dataPrice = data.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
                                        
                                        if(data.value){
                                            return dataPrice
                                        }
                                    })}
                                    {...register("fipe")}/>
                                </label>
                            </div>

                            <div className="sideTwo">
                                <label htmlFor="price">
                                    Preço
                                    <Input 
                                    font="regular-input-2"
                                    placeholder="Digite o valor do veículo"
                                    type="number"
                                    id="price"
                                    {...register("price")}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="divDescription">
                            <label htmlFor="description">
                                Descrição
                                <TextArea 
                                font="text-area-2"
                                id="description"
                                {...register("description")}
                                />
                            </label>
                        </div>

                        <label htmlFor="imageUrl">
                            Imagem da capa
                            <Input 
                            font="regular-input"
                            id="imageUrl"
                            type="text"
                            {...register("images.imageUrl")}
                            />
                        </label>

                        <label htmlFor="imageUrl">
                            1° Imagem da galeria
                            <Input 
                            font="regular-input"
                            id="imageUrl"
                            type="text"
                            {...register("images.imageUrl1")}
                            />
                        </label>

                        <label htmlFor="imageUrl">
                            2° Imagem da galeria
                            <Input 
                            font="regular-input"
                            id="imageUrl"
                            type="text"
                            {...register("images.imageUrl2")}
                            />
                        </label>

                        {Array.from({ length: NumImages}, (_, index) => (
                            <label htmlFor="">
                                Imagem da Galeria
                                <Input
                                font="regular-input"
                                type="text"
                                key={index}
                                {...register(`images.imageUrl`)}
                                />
                            </label>
                        ))}





                        <button onClick={handleAddImage} className="btnAdd">Adicionar campo para imagem da galeria</button>

                        <div className="btnEvent">
                            <Button 
                            font="grey-4-5"
                            onClick={() => {
                                setModalAddOpen(false)
                            }}
                            >Cancelar</Button>
                            <Button 
                            font="purple-0-1"
                            type="submit"
                            >Criar anúncio</Button>
                        </div>
                    </S.StyledForm>
                </S.StyledFormContainer>
            </S.StyledContainer>
        </>
    )
}

export default CreateAdversimentModal;