import * as yup from "yup";

const schemaResetPassword = yup.object().shape({
	email: yup
		.string()
		.email("Email inválido")
		.required("Preencha o campo de email."),
});

export default schemaResetPassword;
