export interface loginType {
    name: string,
    label: string,
    type: string,
    value?: string,
    icon: JSX.Element
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface loginValues {
    username: string,
    password: string
}