import { Button } from "../../button/style.button";
import { Input, Select, TextArea } from "../../input/style.input";
import * as S from "./style.createAdversimentModal"


const CreateAdversimentModal = () => {

    

    return(
        <>
            <S.StyledContainer>
                <S.StyledBtnClose>
                    <h1>Criar anúncio</h1>
                    <button>X</button>
                </S.StyledBtnClose>
                <S.StyledTitle>
                    <h1>Informações do veículo</h1>
                </S.StyledTitle>
                <S.StyledFormContainer>
                    <S.StyledForm>
                        <label style={{marginBottom: 24}} htmlFor="brand">
                            Marca
                            <Select font="regular-select">
                                <option value="">teste1</option>
                                <option value="">teste2</option>
                                <option value="">teste3</option>
                            </Select>
                        </label>

                        <label htmlFor="model">
                            Modelo
                            <Select font="regular-select">
                                <option value="">teste1</option>
                                <option value="">teste2</option>
                                <option value="">teste3</option>
                            </Select>
                        </label>

                        <div className="sideDivContainer">
                            <div className="sideOne">
                                <label htmlFor="age">
                                    Ano
                                    <Select font="regular-select-2">
                                    <option value="">teste1</option>
                                    <option value="">teste2</option>
                                    <option value="">teste3</option>
                                    </Select>
                                </label>
                            </div>

                            <div className="sideTwo">
                                <label htmlFor="fuelType">
                                    Combustível
                                    <Select font="regular-select-2">
                                    <option value="">teste1</option>
                                    <option value="">teste2</option>
                                    <option value="">teste3</option>
                                    </Select>
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
                                    type="number"
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
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="divDescription">
                            <label htmlFor="">
                                Descrição
                                <TextArea 
                                font="text-area-2"
                                />
                            </label>
                        </div>

                        <label htmlFor="imageUrl">
                            Imagem da capa
                            <Input font="regular-input"/>
                        </label>

                        <label htmlFor="imageUrl">
                            1° Imagem da galeria
                            <Input font="regular-input"/>
                        </label>

                        <label htmlFor="imageUrl">
                            2° Imagem da galeria
                            <Input font="regular-input"/>
                        </label>

                        <button className="btnAdd">Adicionar campo para imagem da galeria</button>

                        <div className="btnEvent">
                            <Button font="grey-4-5">Cancelar</Button>
                            <Button font="purple-0-1">Criar anúncio</Button>
                        </div>
                    </S.StyledForm>
                </S.StyledFormContainer>
            </S.StyledContainer>
        </>
    )
}

export default CreateAdversimentModal;