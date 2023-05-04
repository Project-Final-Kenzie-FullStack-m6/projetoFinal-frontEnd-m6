import {useContext} from "react"
import { AdversimentContext } from "../../../../contexts/adversimentContext"
import * as S from './style.deleteAdversimentModal'
import { Button } from "../../../button/style.button"


const DeleteAdversimentModal = ({handleOpenModal, setOpenModal}: any) => {
    const {deleteAdversiment} = useContext(AdversimentContext)

    return (
        <>
        <S.StyledContainerBackground>
            <S.StyledContainer>
                <S.StyledBtnClose>
                    <h1>Excluir Anúncio</h1>
                    <button
                    onClick={() => setOpenModal(false)}
                    >X
                    </button>
                </S.StyledBtnClose>
                <S.StyledTitle>
                    <h1>Tem certeza que deseja excluir esse anúncio?</h1>
                </S.StyledTitle>

                <S.StyledParagraphContainer>
                    <div className='styleParagraph'>
                        <p>
                        Isso excluirá permanentemente seu anúncio e removerá seus dados de nossos servidores.
                        </p>
                    </div>

                    <div className='btnEvent'>
                        <Button
                            font='grey-4-5'
                            onClick={() => setOpenModal(false)}
                        >
                            Cancelar
                        </Button>
                        <Button
                            font='red-0-1'
                            type='submit'
                            className='btnStyle'
                            onClick={deleteAdversiment}
                        >
                            Sim, excluir anúncio
                        </Button>
                    </div>
                </S.StyledParagraphContainer>
            </S.StyledContainer>
        </S.StyledContainerBackground>
        </>
    )
}

export default DeleteAdversimentModal;