import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from "react";
import { Input, TextArea } from '../../../input/style.input';
import * as S from './style.updateUserModal'
import { yupResolver } from '@hookform/resolvers/yup';
import { iUserUpdate } from '../../../../interface/users';
import {schemaUpdateUser} from '../../../../validators/users';
import { Button } from '../../../button/style.button';
import { UserContext } from '../../../../contexts/AuthUserContext/userContext';
import DeleteUserModal from '../deleteUserModal';

const UpdateUserModal = () => {

    const {updateUser, userData} = useContext(UserContext)
    const [openModal, setOpenModal ] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        setValue
    } = useForm<iUserUpdate>({
        resolver: yupResolver(schemaUpdateUser),
    })

    const watchedFields = watch([
        "name",
        "email",
        "cpf",
        "phone",
        "birthDate",
        "description",
    ])

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    // console.log(watchedFields, "user aqui")

    useEffect(() => {
        setValue('name', userData.name)
        setValue('email', userData.email)
        setValue('cpf', userData.cpf)
        setValue('phone', userData.phone)
        setValue('birthDate', userData.birthDate)
        setValue('description', userData.description)
    }, [userData, setValue])

    return (
        <>
        <S.StyledContainerBackground>
            <S.StyledContainer>
                {openModal && <DeleteUserModal handleOpenModal={handleOpenModal} setOpenModal={setOpenModal}/>}
                <S.StyledBtnClose>
                    <h1>Editar Perfil</h1>
                    <button>X</button>
                </S.StyledBtnClose>
                <S.StyledTitle>
                    <h1>Informações Pessoais</h1>
                </S.StyledTitle>

                <S.StyledFormContainer>
                    <S.StyledForm onSubmit={handleSubmit(updateUser)}>
                        <label htmlFor='name'>
                            Nome
                            <Input 
                                font='regular-input-3'
                                placeholder={userData.name}
                                type='text'
                                id='name'
                                // value={userData.name}
                                {...register("name")}
                            />
                        </label>
                        <label htmlFor='email'>
                            Email
                            <Input 
                                font='regular-input-3'
                                placeholder={userData.email}
                                type='email'
                                id='email'
                                {...register("email")}
                            />
                        </label>
                        <label htmlFor='cpf'>
                            CPF
                            <Input 
                                font='regular-input-3'
                                placeholder={String(userData.cpf)}
                                type='number'
                                id='cpf'
                                {...register("cpf")}
                            />
                        </label>
                        <label htmlFor='phone'>
                            Celular
                            <Input 
                                font='regular-input-3'
                                placeholder={String(userData.phone)}
                                type='number'
                                id='phone'
                                {...register("phone")}
                            />
                        </label>
                        <label htmlFor='birthDate'>
                            Data de Nascimento
                            <Input 
                                font='regular-input-3'
                                placeholder={String(userData.birthDate)}
                                type='text'
                                id='birthDate'
                                {...register("birthDate")}
                            />
                        </label>

                        <div className='divDescription'>
                          <label htmlFor='description'>
                              Descrição
                              <TextArea
                                  font='text-area-2'
                                  id='description'
                                  placeholder={userData.description}
                                  {...register("description")}
                              />
                          </label>
                        </div>

                        <div className='btnEvent'>
                            <Button 
                                font='grey-0-1'
                                type='button'
                            >
                                Cancelar
                            </Button>

                            <Button 
                                font='red-0-1'
                                className='btnDelete'
                                onClick={handleOpenModal}
                                type='button'
                            >
                                Excluir Perfil
                            </Button>
                            

                            <Button
                                font='brand-0-1'
                                type='submit'
                            >
                                Salvar Alterações
                            </Button>
                        </div>
                    </S.StyledForm>
                </S.StyledFormContainer>
            </S.StyledContainer>
        </S.StyledContainerBackground>
        </>
    )
}

export default UpdateUserModal;