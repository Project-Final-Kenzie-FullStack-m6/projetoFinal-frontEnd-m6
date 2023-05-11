import StyledContainer from "./style.adversiment"
import { Button } from "../../../components/button/style.button"
import Footer from "../../../components/Footer"
import { useContext, useEffect, useState } from "react";
import { AdversimentContext } from "../../../contexts/adversimentContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iCommentDataRequest } from "../../../interface/comments";
import { UserContext } from "../../../contexts/AuthUserContext/userContext";
import moment from 'moment';
import 'moment/locale/pt-br'
import { Fab } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import {ThemeProvider} from "@mui/material/styles"
import themeMui from "../../../styles/themeMui";
import CloseIcon from '@mui/icons-material/Close'
import UpdateCommentModal from "../../../components/modals/comments/updateComment";
import schemaUpdateComment from "../../../validators/comments/updateComment";
import DeleteCommentModal from "../../../components/modals/comments/deleteComment";
import { Api } from "../../../services/api";
import { iAdversimentDataUpdate } from "../../../interface/adversiments";
import carDefault from "../../../assets/default.jpg"

const Adversiment = ({id}:any) => {
    const { createCommentUser, handleIdComment} = useContext(AdversimentContext)
    const {userData} = useContext(UserContext)
    const [textValue, setTextValue] = useState('')

    const [detailsAds, setDetailsAds] = useState({} as iAdversimentDataUpdate);

    const [openModalUpdateComment, setOpenModalUpdateComment] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const token = localStorage.getItem("token")
    const userId = localStorage.getItem("userId")
    const getDetailsAdversiment = async (id: string | undefined) => {
      try {
        const { data } = await Api.get(`/adversiments/${id}`);
        setDetailsAds(data)
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
        getDetailsAdversiment(id)
      }, []);


    const navigate = useNavigate()

    moment.locale('pt-br')

    const {
        register,
        handleSubmit,
    } = useForm<iCommentDataRequest>({
        resolver: yupResolver(schemaUpdateComment)
    })

    const handleOpenModal = () => {
        setOpenModalUpdateComment(true)
    }

    const handleDeleteModal = () => {
        setOpenDeleteModal(true)
    }


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

    const formatPrice = (value: any) =>{
        return value?.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
        });
    }

    const formatKms = (value: any) =>{
        return value?.toLocaleString('pt-BR') + ' km';
    }


    const redirectWhatsAppUrl = `https://api.whatsapp.com/send?phone=55${detailsAds.user?.phone}&text=Ol%C3%A1,%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20ve%C3%ADculo%20anunciado%20na%20MotorsShop.`;

    return(
    <>
    {openModalUpdateComment && <UpdateCommentModal setOpenModalUpdateComment={setOpenModalUpdateComment}/>}
    {openDeleteModal && <DeleteCommentModal setOpenDeleteModal={setOpenDeleteModal}/>}
    <StyledContainer>
        <div className="divMain">
            <div className="divSideOne">
                <div className="divImagePrimary">
                    <img src={`${detailsAds.images?.[0] !== undefined? detailsAds.images?.[0].imageUrl: carDefault}`} alt="car" />
                </div>

                <div className="divDetails">
                    <h1>{detailsAds?.model}</h1>

                    <div className="divAgePrice">
                        <div>
                            <span>{detailsAds?.age}</span>
                            <span>{formatKms(detailsAds?.mileAge)}</span>
                        </div>

                        <span><b>{formatPrice(detailsAds.price)}</b></span>
                    </div>
                    <Link to={redirectWhatsAppUrl} target="_blank">
                        <Button font="brand-6-7">Entre em contato</Button>
                    </Link>
                </div>

                <div className="divDescription">
                    <h1>Descrição</h1>
                    <p>{detailsAds?.description}</p>
                </div>

                <div className="divCommentsBox">
                    <h1>Comentários</h1>
                    {detailsAds.comments?.map((comment) =>{
                    let tagName = ""
                    if(comment.user?.name){
                        const tag:any = comment.user?.name.split("")
                        tagName =tag[0]+tag[1]
                    }

                    const CustomEditIcon = () => {
                        return (
                           <CloseIcon onClick={allDeleteEvents}/>
                        )
                    }
  
                    const allEditEvents = () => {
                        handleOpenModal()
                        handleIdComment(comment)
                    }

                    const allDeleteEvents = () => {
                        handleDeleteModal()
                        handleIdComment(comment)
                    }

                    return(
                        <div className="divComments">
                            <div className="divBoxInfoUserComments">
                                <div>
                                    <Button font="ball-0-1">{tagName.toLocaleUpperCase()}</Button>
                                    <span className="span1">{comment.user.name}</span>
                                    <span className="span2">{eventMoment(comment.createdAt)}</span>
                                </div>
                                {token && userId === comment.user.id?(
                                <>
                                    <div className="divBtnEvent"> 
                                    <ThemeProvider theme={themeMui}>
                                    <Fab color="primary" size="small" aria-label="edit">
                                        <EditIcon onClick={allEditEvents}/>
                                    </Fab>
                                    </ThemeProvider>

                                    <Fab color="inherit" aria-label="add"  size="small">
                                        <CustomEditIcon />
                                    </Fab>
                                    </div>
                                </>
                                ):(
                                <></>)}
                                
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
                        value={textValue}
                        {...register('content', {onChange: ((e) => setTextValue(e.target.value))})}
                        ></textarea>
                        <Button font="brand-0-1" onClick={eventButtonSubmit} style={{ position: 'absolute', top: 80, right: 120 }}>Comentar</Button>
                    </form>

                    <div className="divBtnEvent">
                        <button className="btn1" onClick={handleTextButtonClick}>Gostei Muito!</button>
                        <button className="btn2" onClick={handleTextButtonClick2}>Incrível</button>
                        <button className="btn3" onClick={handleTextButtonClick3}>Recomendarei para meus amigos!</button>
                    </div>
                </div>
            </div>

            <div className="divSideTwo">

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
            </div>
        </div>

        <div className="divFooter">
            <Footer/>
        </div>
    </StyledContainer>
    </>
    )
}

export default Adversiment