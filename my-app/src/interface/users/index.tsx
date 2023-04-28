interface iUser {
    id?: string;
    name?: string;
    email?: string;
    cpf?: number;
    phone?: number;
    birthDate?:Date;
    description?:string;
    isSeller?:boolean;
    address?: iUserAddress;
}

interface iUserUpdate {
    name?: string
    email?: string
    cpf?: number
    phone?: number
    birthDate?:Date
    description?:string
    address?: iUserAddress
}
interface iUserAddress {
    cep?:number
    state?:string
    city?:string
    street?:string
    number?:string
    complement?:string
}
export type {iUser, iUserUpdate, iUserAddress}

