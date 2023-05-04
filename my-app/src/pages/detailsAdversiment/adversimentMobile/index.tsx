import StyledContainer from "./style.adversimentoMobile"
import { useContext, useState } from "react";
import { Button } from "../../../components/button/style.button"
import Footer from "../../../components/Footer"
import { AdversimentContext } from "../../../contexts/adversimentContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaCreateComment from "../../../validators/comments/createComment";
import { iCommentDataRequest } from "../../../interface/comments";
import { UserContext } from "../../../contexts/AuthUserContext/userContext";
import moment from 'moment';
import 'moment/locale/pt-br'

const AdversimentMobile = () => {
    const {detailsAds, createCommentUser} = useContext(AdversimentContext)
    const {userData} = useContext(UserContext)
    const [textValue, setTextValue] = useState('')

    const token = localStorage.getItem("token")
    
    const img = detailsAds.images?.[0].imageUrl
    const navigate = useNavigate()

    moment.locale('pt-br')

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
    } = useForm<iCommentDataRequest>({
        resolver: yupResolver(schemaCreateComment)
    })

    const eventButtonSubmit = () =>{
        token?(
        <>
        <Button font="brand-0-1" type="submit"/>
        </>
        ):(
        <>
            {navigate('/login')}
        </>
        )
    }

    const eventMoment = (time: string) => {
        return moment(time).fromNow();

    }

    let tagNameUser = ""
    if(userData.name){
      const tag:any = userData.name?.split("")
      tagNameUser =tag[0]+tag[1]
    }

    let tagNameUserAds = ""
    if(detailsAds.user?.name){
      const tag:any = detailsAds.user?.name.split("")
      tagNameUserAds =tag[0]+tag[1]
    }

    const handleTextButtonClick = () =>{
        const newText = "Gostei Muito!"
        setTextValue(textValue + '\n' + newText)
    }

    const handleTextButtonClick2 = () =>{
        const newText = "Incrível"
        setTextValue(textValue + '\n' + newText)
    }
    const handleTextButtonClick3 = () =>{
        const newText = "Recomendarei para meus amigos!"
        setTextValue(textValue + '\n' + newText)
    }
    
    return(
    <StyledContainer>
        <div className="divMain">
            <div className="divSideOne">
                <div className="divImagePrimary">
                    <img src={img} alt="car" />
                </div>

                <div className="divDetails">
                    <h1>{detailsAds?.model}</h1>

                    <div className="divAgePrice">
                        <div>
                            <span>{detailsAds?.age}</span>
                            <span>{detailsAds?.mileAge}km</span>
                        </div>

                        <span><b>R${detailsAds?.price}</b></span>
                    </div>
                    <Button font="brand-6-7">Comprar</Button>
                </div>

                <div className="divDescription">
                    <h1>Descrição</h1>
                    <p>{detailsAds?.description}</p>
                </div>

                <div className="divImagesSecondary">

                    <div className="divTitle">
                        <h1>Fotos</h1>
                    </div>

                    <div className="divImages">
                    {detailsAds.images?.map((data, index)=>{
                        return(
                            <div>
                            <img src={data.imageUrl} key={index} alt="car" />
                            </div>
                        )
                    })}
                    </div>
                
                </div>

                <div className="divDetailsUser">
                    <div>
                        <Button font="ball-0-3">{tagNameUserAds.toLocaleUpperCase()}</Button>
                        <span>{detailsAds.user?.name}</span>
                        <p>{detailsAds.user?.description}</p>
                        <Link to={`/advertiser?id=${detailsAds.user?.id}`} className="button2" type="button">Ver todos anúncios</Link>
                    </div>
                </div>

                <div className="divCommentsBox">
                    <h1>Comentários</h1>
                    {detailsAds.comments?.map((comment) =>{
                    return(
                        <div className="divComments">
                        <div>
                            <Button font="ball-0-1">{tagNameUser.toLocaleUpperCase()}</Button>
                            <span className="span1">{comment.user.name}</span>
                            <span className="span2">{eventMoment(comment.createdAt)}</span>
                        </div>
                        <p>{comment.content}</p>
                        </div>
                        )
                    })}
                </div>

                <div className="divPostComment">
                    {token?(
                    <>
                    <div>
                        <Button font="ball-0-1">{tagNameUser.toLocaleUpperCase()}</Button>
                        <span>{userData?.name}</span>
                    </div>  
                    </>):(<></>)}
                    <form style={{ position: 'relative' }} onSubmit={handleSubmit(createCommentUser)}>
                        <textarea id="content"
                        {...register('content', {onChange: ((e) => setTextValue(e.target.value))})}
                        ></textarea>
                        <Button font="brand-0-1" onClick={eventButtonSubmit} type="submit" style={{ position: 'absolute', top: 80, right: 80 }}>Comentar</Button>
                    </form>

                    <div className="divBtnEvent">
                        <button className="btn1" onClick={handleTextButtonClick}>Gostei Muito!</button>
                        <button className="btn2" onClick={handleTextButtonClick2}>Incrível!</button>
                        <button className="btn3" onClick={handleTextButtonClick3}>Recomendarei para meus amigos!</button>
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

export default AdversimentMobile