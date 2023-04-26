import * as yup from "yup"


const schemaObjetct = yup.object().shape({
    imageUrl: yup.string().required()
})

const schemaCreateAdvertisement = yup.object().shape({
    brand: yup
    .string()
    .required(),
    model: yup
    .string()
    .required(),
    age: yup
    .number()
    .required(),
    fuelType: yup
    .string()
    .required(),
    mileAge: yup
    .number()
    .required(),
    color: yup
    .string()
    .required(),
    fipe: yup
    .number()
    .required(),
    price: yup
    .number()
    .required(),
    description: yup
    .string()
    .required(),
    images: yup.array(schemaObjetct)
})

export default schemaCreateAdvertisement
