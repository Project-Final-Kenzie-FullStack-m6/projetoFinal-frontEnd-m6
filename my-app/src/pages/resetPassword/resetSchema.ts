import * as yup from "yup";

const schemaResetPassword = yup.object().shape({
	password: yup.string().required("Preencha o campo com uma senha."),
	passwordConfirmation: yup
		.string()
		.oneOf([yup.ref("password")], "Passwords must match"),
});

export default schemaResetPassword;
