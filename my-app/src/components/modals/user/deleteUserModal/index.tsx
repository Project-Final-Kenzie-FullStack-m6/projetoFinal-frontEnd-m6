import { Button } from '../../../button/style.button';
import {useContext} from "react"
import * as S from './style.deleteUserModal'
import { UserContext } from '../../../../contexts/AuthUserContext/userContext';


const DeleteUserModal = ({setOpenModal}: any) => {

    const {deleteUser} = useContext(UserContext)

    return (
        <>
        <S.StyledContainerBackground>
            <S.StyledContainer>
                <S.StyledBtnClose>
                    <h1>Excluir anúncio</h1>
                    <button
                    onClick={() => setOpenModal(false)}
                    >X</button>
                </S.StyledBtnClose>
                <S.StyledTitle>
                    <h1>Tem certeza que deseja excluir essa conta?</h1>
                </S.StyledTitle>

                <S.StyledParagraphContainer>

                    <div className='styleParagraph'>
                        <p>
                        Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.
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
                            onClick={deleteUser}
                        >
                            Sim, excluir conta
                        </Button>
                    </div>
                </S.StyledParagraphContainer>
            </S.StyledContainer>
        </S.StyledContainerBackground>

        </>
    )
}

export default DeleteUserModal;