import { Entity } from "../client/entity";

export interface Role extends Entity {
    name: string
    signUp: boolean
}

export interface User extends Entity {
    username: string
    email: string
    password?: string
    emailVerified: boolean
}

export interface LoginUser {
    user?: User
    role?: Role
    sessionToken?: string
}