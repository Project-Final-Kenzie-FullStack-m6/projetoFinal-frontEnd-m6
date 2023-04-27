import * as yup from "yup";

const schemaSendResetPassword = yup.object().shape({
	email: yup
		.string()
		.email("Email inválido")
		.required("Preencha o campo de email."),
});

export default schemaSendResetPassword;
