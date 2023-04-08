import { FaUser, FaLock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


export const cloudList = [
    'cloud3',
    'cloud2',
    'cloud1'
]

export const inputList = [
    {
        name: "email",
        type: "text",
        label: "email",
        icon: <MdEmail />
    },
    {
        name: "password",
        type: "password",
        label: "password",
        icon: <FaLock />
    },
]

export const registerInput = [
    {
        name: "username",
        type: "text",
        label: "username",
        icon: <FaUser />
    },
    {
        name: "email",
        type: "text",
        label: "email",
        icon: <MdEmail />
    },
    {
        name: "password",
        type: "password",
        label: "password",
        icon: <FaLock />
    },
]