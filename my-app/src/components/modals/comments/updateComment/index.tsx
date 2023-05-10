import {useContext, useState} from "react"
import { AdversimentContext } from "../../../../contexts/adversimentContext"
import * as S from './style.updateComment'
import { Button } from "../../../button/style.button"
import { TextArea } from "../../../input/style.input"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import schemaUpdateComment from "../../../../validators/comments/updateComment"
import { iCommentDataUpdate } from "../../../../interface/comments"


const UpdateCommentModal = ({handleOpenModal, setOpenModalUpdateComment}: any) => {
    const {updateCommentUser} = useContext(AdversimentContext)
    
    const {
        register,
        handleSubmit
    } = useForm<iCommentDataUpdate>({
        resolver: yupResolver(schemaUpdateComment)
    })    

    return (
        <>
        <S.StyledContainerBackground>
            <S.StyledContainer>
                <S.StyledBtnClose>
                    <h1>Editar Comentário</h1>
                    <button
                    onClick={() => setOpenModalUpdateComment(false)}
                    >X
                    </button>
                </S.StyledBtnClose>

                <S.StyledParagraphContainer onSubmit={handleSubmit(updateCommentUser)}>
                    <TextArea 
                    font="text-area-2"
                    id="content"
                    {...register("content")}
                    ></TextArea>

                    <div className='btnEvent'>
                        <Button
                            font='grey-4-5'
                            onClick={() => setOpenModalUpdateComment(false)}
                        >
                            Cancelar
                        </Button>
                        <Button
                            font='brand-0-1'
                            type='submit'
                            className='btnStyle'
                        >
                            Editar Comentário
                        </Button>
                    </div>
                </S.StyledParagraphContainer>
            </S.StyledContainer>
        </S.StyledContainerBackground>
        </>
    )
}

export default UpdateCommentModal;