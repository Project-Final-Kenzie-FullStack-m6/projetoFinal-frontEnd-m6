import { useContext, useEffect, useState } from "react";
import { Button } from "../../../button/style.button";
import { Input, Select, TextArea } from "../../../input/style.input";
import * as S from "./style.createAdversimentModal";
import { AdversimentContext } from "../../../../contexts/adversimentContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaCreateAdvertisement from "../../../../validators/adversiments/createAdversimentUser";
import { ApiFipeContext } from "../../../../contexts/ApiFipeContext";
import { Api3 } from "../../../../services/api";


const CreateAdversimentModal = ({ handleShowModal }: any) => {

  const { postNewAdversiment,imageBase64,setImageBase64} = useContext(AdversimentContext);

  const { ApiFipeData, DataCars, DataModelCar, searchBrand, searchModel } = useContext(ApiFipeContext);
  const [NumImages, setNumImages] = useState(0);
  const [inputCount, setInputCount] = useState(2);


  const dataBrand = Object.keys(ApiFipeData);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schemaCreateAdvertisement),
  });

function getBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
}


  

  const handleFileInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const base64 = await getBase64(file);
      const newImage ={ imageUrl:base64.slice(23)}


      setImageBase64(...imageBase64,newImage)
      console.log(newImage)
      // qqcoisa(newImage)
    }
  };

  async function qqcoisa(param:any) {


var FormData = require('form-data');
var data = new FormData();
data.append('image', param);
data.append('type', "base64");

try {
  const response =await Api3.post("", data);

  console.log(response.data)
} catch (error) {
  //falta toast
  console.error(error);
}
  }

  const teste = getValues()

  console.log(teste, "valores aqui")

  useEffect(() => {
      setValue('age', DataModelCar[0]?.year)
      setValue('fuelType', DataModelCar[0]?.fuel)
      setValue('fipe', DataModelCar[0]?.value)
  }, [DataModelCar, setValue])


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

  return (
    <>
    <S.StyledContainerBackground/>
      <S.StyledContainer>
        <S.StyledBtnClose>
          <h1>Criar anúncio</h1>
          <button
            onClick={() => {
              handleShowModal();
            }}
          >
            X
          </button>
        </S.StyledBtnClose>
        <S.StyledTitle>
          <h1>Informações do veículo</h1>
        </S.StyledTitle>
        <S.StyledFormContainer>
          <S.StyledForm onSubmit={handleSubmit(postNewAdversiment)}>
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
                  );
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

            <label htmlFor="imageUrl">
              Imagem da capa
              <Input
                font="regular-input-3"
                id="imageUrl"
                type="file"
                {...register("images.[0].imageUrl")}
                onChange={handleFileInputChange}
                
              />
            </label>

            <label htmlFor="imageUrl">
              1° Imagem da galeria
              <Input
                font="regular-input-3"
                id="imageUrl"
                type="file"
                {...register("images.[1].imageUrl")}
                onChange={handleFileInputChange}
              />

            </label>

            <label htmlFor="imageUrl">
              2° Imagem da galeria
              <Input
                font="regular-input-3"
                id="imageUrl"
                type="file"
                {...register("images.[2].imageUrl")}
                onChange={handleFileInputChange}
              />
            </label>

            {Array.from({ length: NumImages }, (_, index) => (
              <label htmlFor="">
                {inputCount}° Imagem da Galeria
                <Input
                  font="regular-input-3"
                  type="file"
                  key={index}
                  {...register(`images.[${inputCount}].imageUrl`)}
                  onChange={handleFileInputChange}
                />
              </label>
            ))}

            <button onClick={handleSubmitEvent} className="btnAdd" type="button">
              Adicionar campo para imagem da galeria
            </button>

            <div className="btnEvent">
              <Button
                font="grey-4-5"
                onClick={() => {
                    handleShowModal();
                  }}
                type="button"
              >
                Cancelar
              </Button>
              <Button font="purple-0-1" type="submit">
                Criar anúncio
              </Button>
            </div>
          </S.StyledForm>
        </S.StyledFormContainer>
      </S.StyledContainer>
    </>
  );
};

export default CreateAdversimentModal;
