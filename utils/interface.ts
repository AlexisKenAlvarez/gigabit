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
}