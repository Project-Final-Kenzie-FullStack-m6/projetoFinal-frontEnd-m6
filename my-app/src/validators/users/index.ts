import * as yup from "yup";


const schemaUpdateUser = yup.object().shape({
    name: yup.string().min(4).notRequired(),
    email: yup
        .string()
        .email("Email inválido")
        .notRequired(),
    cpf:yup.number().notRequired(),
    phone:yup.number().notRequired(),
    birthDate:yup.date().notRequired(),
    description:yup.string().notRequired(),
});


const schemaAddressUpdateUser = yup.object().shape({
    cep:yup.number().min(8).notRequired(),
    state:yup.string().notRequired(),
    city:yup.string().notRequired(),
    street:yup.string().notRequired(),
    number:yup.number().notRequired(),
    complement:yup.string().notRequired(),
})

export {schemaUpdateUser, schemaAddressUpdateUser}