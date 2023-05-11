import { useContext, useEffect, useState } from "react";
import { AdversimentContext } from "../../../../contexts/adversimentContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaUpdateAds from "../../../../validators/adversiments/updateAdversimentUser";
import * as S from './style.updateAdversimentModal'
import { ApiFipeContext } from "../../../../contexts/ApiFipeContext";
import { Input, Select, TextArea } from "../../../input/style.input";
import { Button } from "../../../button/style.button";
import DeleteAdversimentModal from "../deleteAdversimentModal";

const UpdateAdversimentModal = ({setOpenModalUpdate}: any) => {
    const {updateAdversiment, detailsAds, isActive, setIsActive} = useContext(AdversimentContext)
    const [NumImages, setNumImages] = useState(0);
    const [inputCount, setInputCount] = useState(2);
    const [openModal, setOpenModal] = useState(false);    

    const { ApiFipeData, DataCars, DataModelCar, searchBrand, searchModel } = useContext(ApiFipeContext);

    const dataBrand = Object.keys(ApiFipeData);

    const {
        register,
        handleSubmit,
        setValue,
        getValues
    } = useForm<any>({
        resolver: yupResolver(schemaUpdateAds)
    })

    //para vizualizar valores dos inputs
    const values = getValues()
    console.log(values)
    

    useEffect(() => {
        setValue('brand', detailsAds?.brand)
        setValue('model', detailsAds?.model)
        setValue('age', detailsAds?.age)
        setValue('fuelType', detailsAds?.fuelType)
        setValue('mileAge', detailsAds?.mileAge)
        setValue('color', detailsAds?.color)
        setValue('fipe', detailsAds?.fipe)
        setValue('price', detailsAds?.price)
        setValue('isActive', detailsAds?.isActive)
        setValue('description', detailsAds?.description)
        setValue('images', detailsAds?.images)
    }, [detailsAds, setValue])

    const handleAddImage = () => {
        setNumImages(NumImages + 1);
    };
    
    const handleInputCount = () => {
    setInputCount(inputCount + 1);
    }
    
    const handleSubmitEvent = () => {
    handleAddImage();
    handleInputCount();
    }

    const handleIsActiveTrue = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setIsActive(true)
    }

    const handleIsActiveFalse = (event: React.MouseEvent<HTMLButtonElement>) =>{
      event.preventDefault();
      setIsActive(false)
    }

    const handleOpenModal = () => {
      setOpenModal(true)
    }

    return (
        <>
        <S.StyledContainerBackground/>
          <S.StyledContainer>
            {openModal && <DeleteAdversimentModal handleOpenModal={handleOpenModal} setOpenModal={setOpenModal}/>}
            <S.StyledBtnClose>
              <h1>Editar Anúncio</h1>
              <button
              onClick={() => setOpenModalUpdate(false)}
              >
                X
              </button>
            </S.StyledBtnClose>
            <S.StyledTitle>
              <h1>Informações do veículo</h1>
            </S.StyledTitle>
            <S.StyledFormContainer>
              <S.StyledForm onSubmit={handleSubmit(updateAdversiment)}>
                <label style={{ marginBottom: 24 }} htmlFor="brand">
                  Marca
                  <Select
                    font="regular-select-3"
                    id="brand"
                    {...register("brand", { onChange: searchBrand })}
                  >
                    <option className="styleOption" value="">
                      Escolha uma opção
                    </option>
                    {dataBrand?.map((data: any, index: any) => {
                      return (
                        <>
                          <option key={index} value={data}>
                            {data}
                          </option>
                        </>
                      );
                    })}
                  </Select>
                </label>

                <label htmlFor="model">
                Modelo
                <Select
                  font="regular-select-3"
                  id="model"
                  {...register("model", { onChange: searchModel })}
                >
                  <option className="styleOption" value="">
                    Escolha uma opção
                  </option>
                  {DataCars?.map((data: any, index: any) => {
                   
                    return (
                      <>
                        <option key={index} value={data.name}>
                          {data.name}
                        </option>
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
                      value={DataModelCar?.map((data: any, index: any) => data.year)}
                      key="age-input"
                      {...register("age")}
                    />
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
                        if (data.fuel === 1) {
                          return "flex";
                        }

                        if (data.fuel === 2) {
                          return "Híbrido";
                        }

                        if (data.fuel === 3) {
                          return "Elétrico";
                        }
                      })}
                      {...register("fuelType")}
                    />
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
                    {...register("mileAge")}
                  />
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
                      key="fipe-input"
                      value={DataModelCar?.map((data: any) => {
                        const dataPrice = data.value.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                          minimumFractionDigits: 2,
                        });

                        if (data.value) {
                          return dataPrice;
                        }
                      })}
                      {...register("fipe")}
                    />
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
                    <TextArea font="text-area-2" id="description"{...register("description")} />
                  </label>
                </div>
                
                <div className="isActiveContainer">
                  <h1>Publicado</h1>                
                  <div className="onOff">
                    <Button onClick={handleIsActiveTrue} font={!isActive ? "grey-0-1" : "brand-0-1" }>Sim</Button>
                    <Button onClick={handleIsActiveFalse} font={isActive ? "grey-0-1" : "brand-0-1" }>Não</Button>
                  </div>
                </div>

                <label htmlFor="imageUrl">
                Imagem da capa
                <Input
                  font="regular-input-3"
                  id="imageUrl"
                  type="text"
                  {...register("images.[0].imageUrl")}
                  
                />
                </label>

                <label htmlFor="imageUrl">
                  1° Imagem da galeria
                  <Input
                    font="regular-input-3"
                    id="imageUrl"
                    type="text"
                    {...register("images.[1].imageUrl")}
                  />

                </label>

                <label htmlFor="imageUrl">
                  2° Imagem da galeria
                  <Input
                    font="regular-input-3"
                    id="imageUrl"
                    type="text"
                    {...register("images.[2].imageUrl")}
                  />
                </label>

                {Array.from({ length: NumImages }, (_, index) => (
                <label htmlFor="">
                  {inputCount}° Imagem da Galeria
                  <Input
                    font="regular-input-3"
                    type="text"
                    key={index}
                    {...register(`images.[${inputCount}].imageUrl`)}
                  />
                </label>
                ))}

                <button onClick={handleSubmitEvent} className="btnAdd" type="button">
                  Adicionar campo para imagem da galeria
                </button>

                <div className="btnEvent">
                  <Button
                    font="grey-4-5"
                    type="button"
                    onClick={handleOpenModal}
                  >
                    Excluir anúncio
                  </Button>

                  <Button
                    font="purple-0-1" type="submit"
                  >
                  Salvar alterações
                  </Button>
                </div>
              </S.StyledForm>
            </S.StyledFormContainer>
          </S.StyledContainer>
        </>
    )
}

export default UpdateAdversimentModal;