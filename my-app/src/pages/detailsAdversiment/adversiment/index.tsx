import StyledContainer from "./style.adversiment"
import { Button } from "../../../components/button/style.button"
import Footer from "../../../components/Footer"
import { useContext } from "react";
import { AdversimentContext } from "../../../contexts/adversimentContext";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaCreateComment from "../../../validators/comments/createComment";
import { iCommentDataRequest } from "../../../interface/comments";

const Adversiment = () => {
    const {detailsAds, createCommentUser} = useContext(AdversimentContext)

    const img = detailsAds[0].images?.[0].imageUrl

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
    } = useForm<iCommentDataRequest>({
        resolver: yupResolver(schemaCreateComment)
    })

    return(
    <StyledContainer>
        <div className="divMain">
            <div className="divSideOne">
                <div className="divImagePrimary">
                    <img src={img} alt="car" />
                </div>

                <div className="divDetails">
                    <h1>{detailsAds[0].model}</h1>

                    <div className="divAgePrice">
                        <div>
                            <span>{detailsAds[0].age}</span>
                            <span>{detailsAds[0].mileAge}km</span>
                        </div>

                        <span><b>R${detailsAds[0].price}</b></span>
                    </div>
                    <Button font="brand-6-7">Comprar</Button>
                </div>

                <div className="divDescription">
                    <h1>Descrição</h1>
                    <p>{detailsAds[0].description}</p>
                </div>

                <div className="divCommentsBox">
                    <h1>Comentários</h1>
                    {detailsAds[0].comments?.map((comment) =>{
                    return(
                        <div className="divComments">
                        <div>
                            <Button font="ball-0-1">JL</Button>
                            <span className="span1">{comment.user.name}</span>
                            <span className="span2">há 3 dias</span>
                        </div>
                        <p>{comment.content}</p>
                        </div>
                        )
                    })}
                </div>

                <div className="divPostComment">
                    <div>
                        <Button font="ball-0-1">SL</Button>
                        <span>Samuel Leão</span>
                    </div>
                    <form style={{ position: 'relative' }} onSubmit={handleSubmit(createCommentUser)}>
                        <textarea id="content"
                        {...register('content')}
                        ></textarea>
                        <Button font="brand-0-1" type="submit" style={{ position: 'absolute', top: 80, right: 80 }}>Comentar</Button>
                    </form>

                    <div className="divBtnEvent">
                        <button className="btn1">Gostei Muito!</button>
                        <button className="btn2">Incrível</button>
                        <button className="btn3">Recomendarei para meus amigos!</button>
                    </div>
                </div>
            </div>

            <div className="divSideTwo">

                <div className="divImagesSecondary">

                    <div className="divTitle">
                        <h1>Fotos</h1>
                    </div>

                    <div className="divImages">
                        <div>
                            {detailsAds[0].images?.map((data, index)=>{
                                return(
                                    <img src={data.imageUrl} key={index} alt="car" />
                                )
                            })}
                        </div>
                    </div>
                
                </div>

                <div className="divDetailsUser">
                    <div>
                        <Button font="ball-0-3">SL</Button>
                        <span>{detailsAds[0].user?.name}</span>
                        <p>{detailsAds[0].user?.description}</p>
                        <Link to={`/advertiser?id=${detailsAds[0].user?.id}`} className="button2" type="button">Ver todos anúncios</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="divFooter">
            <Footer/>
        </div>
    </StyledContainer>
        
    )
}

export default Adversiment