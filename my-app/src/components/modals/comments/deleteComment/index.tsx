import {useContext} from "react"
import { AdversimentContext } from "../../../../contexts/adversimentContext"
import * as S from './style.deleteComment'
import { Button } from "../../../button/style.button"


const DeleteCommentModal = ({handleOpenModal, setOpenDeleteModal}: any) => {
    const {deleteCommentUser} = useContext(AdversimentContext)

    return (
        <>
        <S.StyledContainerBackground>
            <S.StyledContainer>
                <S.StyledBtnClose>
                    <h1>Excluir Comentário</h1>
                    <button
                    onClick={() => setOpenDeleteModal(false)}
                    >X
                    </button>
                </S.StyledBtnClose>
                <S.StyledTitle>
                    <h1>Deseja excluir seu comentário?</h1>
                </S.StyledTitle>

                <S.StyledParagraphContainer>
                    <div className='btnEvent'>
                        <Button
                            font='grey-4-5'
                            onClick={() => setOpenDeleteModal(false)}
                        >
                            Cancelar
                        </Button>
                        <Button
                            font='red-0-1'
                            type='button'
                            className='btnStyle'
                            onClick={deleteCommentUser}
                        >
                            Sim, excluir Comentário
                        </Button>
                    </div>
                </S.StyledParagraphContainer>
            </S.StyledContainer>
        </S.StyledContainerBackground>
        </>
    )
}

export default DeleteCommentModal;