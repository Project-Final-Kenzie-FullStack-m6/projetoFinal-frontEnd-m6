import { useContext } from "react"
import { AdversimentContext } from "../../contexts/adversimentContext"
import * as S from "./style.cardAdversiment"
import { iAdversimentDataResponse } from "../../interface/adversiments"
import { Button } from "../button/style.button"

export const CardAdversiment = () => {

    const {adversimentData} = useContext(AdversimentContext)

    return (
        <>
                {adversimentData?.map((data: iAdversimentDataResponse, index: number) => {
                    return (
                        <>
                        <S.Container id={`${data.id}`} key={`${data.id}`}>
                            <ul>
                                <li>
                                    <div className="divImg">
                                        <img src={`${data.images.imageUrl}`} alt="cars" />
                                    </div>

                                    <div className="divModelDescription">
                                        <h3>{data.model}</h3>
                                        <p>{data.description}</p>
                                    </div>

                                    <div className="divNameUser">
                                        <Button font="ball-0-2"></Button>
                                        <span>{data.user.name}</span>
                                    </div>

                                    <div className="divMileAgePrice">
                                        <div>
                                            <span>{data.mileAge}</span>
                                            <span>{data.age}</span>
                                        </div>
                                        <span>{data.price}</span>
                                    </div>
                                </li>
                            </ul>
                        </S.Container> 
                        </>
                    )
                })}
        </>
    )
}