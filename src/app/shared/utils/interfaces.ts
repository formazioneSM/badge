export interface LoginResponse{
    "sub": string,
    "admin": boolean,
    "id": string,
    "name": string,
    "surname": string,
    "iat": number
}

export interface Post{
    "color"?: string,
    "text"?: string,
    "from"?: string,
    "_id"?: string,
}