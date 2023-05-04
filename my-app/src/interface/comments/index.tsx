import { iUser } from "../users";


interface iCommentDataResponse {
    id: string;
    user: iUser;
    content: string;
    createdAt: string;
}

interface iCommentDataRequest {
    content: string
}

interface iCommentDataUpdate{
    content: string
}

export type {iCommentDataResponse, iCommentDataRequest, iCommentDataUpdate}