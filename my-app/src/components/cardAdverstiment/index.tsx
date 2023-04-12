import { useContext } from "react"
import { AdversimentContext } from "../../contexts/adversimentContext"
import * as S from "./style.cardAdversiment"
import { iAdversimentDataResponse } from "../../interface/adversiments"

export const cardAdversiment = () => {

    const {adversimentData} = useContext(AdversimentContext)

    return (
        <>

                {adversimentData?.map((data: iAdversimentDataResponse, index: number) => {
                    return (
                        <>
                        <S.Container id={`${data.id}`} key={`${data.id}`}>
                            <ul>
                                <li>
                                    <div>
                                        <img src={`${data.images.imageUrl}`} alt="cars" />
                                    </div>
                                    <h3>{data.model}</h3>
                                </li>
                            </ul>

                        </S.Container>
                               
                        </>
                    )
                })}

           

        </>
    )
}