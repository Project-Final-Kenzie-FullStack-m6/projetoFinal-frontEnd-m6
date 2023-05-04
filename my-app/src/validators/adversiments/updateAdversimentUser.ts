import * as yup from "yup"


const schemaObjetct = yup.object().shape({
    imageUrl: yup.string().required()
})

const schemaUpdateAds = yup.object().shape({
    brand: yup
    .string()
    .notRequired(),
    model: yup
    .string()
    .notRequired(),
    age: yup
    .number()
    .notRequired(),
    fuelType: yup
    .string()
    .notRequired(),
    mileAge: yup
    .number()
    .notRequired(),
    color: yup
    .string()
    .notRequired(),
    fipe: yup
    .number()
    .notRequired(),
    price: yup
    .number()
    .notRequired(),
    isActive: yup
    .boolean()
    .notRequired(),
    description: yup
    .string()
    .notRequired(),
    images: yup.array(schemaObjetct).notRequired(),
})

export default schemaUpdateAds