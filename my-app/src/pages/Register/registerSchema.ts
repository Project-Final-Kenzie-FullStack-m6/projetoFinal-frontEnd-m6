import * as yup from "yup";


const schemaRegister = yup.object().shape({
    name: yup.string().min(4).required("Preencha o campo de nome"),
    email: yup
        .string()
        .email("Email inválido")
        .required("Preencha o campo de email"),
    cpf:yup.number().required("Preencha o campo de cpf"),
    phone:yup.number().required("Preencha o campo de Celular"),
    birthDate:yup.date().required("preencha sua data de nascimento"),
    description:yup.string().required("Preencha o campo com uma descrição"),
    password: yup.string().min(4).required("Preencha o campo com uma senha"),
    confirmPassword:yup.string()
    .required("Preencha o campo de confirmação de senha")
    .oneOf([yup.ref("password")], "As senhas devem ser identicas"),
    cep:yup.number().required("Preencha o campo com um CEP"),
    state:yup.string().required("preencha o campo de Estado"),
    city:yup.string().required("preencha o campo de Estado"),
    street:yup.string().required("preencha o campo de Rua"),
    number:yup.number().required("preencha o campo de Numero"),
    complement:yup.string().notRequired(),
});


export default schemaRegister 