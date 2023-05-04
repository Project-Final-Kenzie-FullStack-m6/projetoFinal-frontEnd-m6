import * as yup from "yup"


const schemaCreateComment = yup.object().shape({
    content: yup.string().required()
})

export default schemaCreateComment