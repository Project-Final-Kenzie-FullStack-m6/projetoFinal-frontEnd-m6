import * as yup from "yup"


const schemaUpdateComment = yup.object().shape({
    content: yup.string().required()
})

export default schemaUpdateComment;