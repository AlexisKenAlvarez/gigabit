declare module "jsonwebtoken" {
    export interface JwtPayload {
        email: string,
    }
}

export interface registerType {
    name: string,
    label: string,
    type: string,
    value?: string,
    icon: JSX.Element,
    title: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    error: registerValues
}

export interface loginType {
    name: string,
    label: string,
    type: string,
    value?: string,
    icon: JSX.Element,
    title: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    error: loginValues
}

export interface loginValues {
    email: string,
    password: string
}

export interface registerValues {
    username: string,
    email: string,
    password: string,
}

export interface AuthUser {
    name: string,
    email: string,
    verified: boolean
    ses: boolean
}

export interface isValid {
    valid: boolean
    email: string
}

export interface decodeType {
    expiresIn: number,
    email: string,
    username: string
}

export interface userValues {
    id: string,
    name: string,
    email: string,
    picture: string,
    sub: string,
    password: string,
    verified: boolean,
    emailVerified: boolean,
    image: string,
}