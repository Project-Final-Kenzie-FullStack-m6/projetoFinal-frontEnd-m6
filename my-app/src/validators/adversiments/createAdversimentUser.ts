import * as yup from "yup"

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
    images: yup.object({
        imageUrl: yup
        .string(),
    })

})

export default schemaCreateAdvertisement


//Marca, modelo, ano, combustivel, km, cor, fipe, preço, descrição, imagem