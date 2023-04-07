import { FC, useState } from "react";
import { loginType, loginValues, registerValues } from "utils/interface";

const InputBoxLogin: FC<loginType> = (props) => {

    const { onChange, title, error, ...items } = props
    const [focus, setFocus] = useState(false)

    const handleFocus = () => {
        setFocus(true)
    }

    const handleBlur = () => {
        if (props.value?.length === 0) {
            setFocus(false)
        } else {
            setFocus(true)
        }
    }


    return (
        <div className="w-full relative group">
            <div className="absolute top-0 bottom-0 my-auto left-3 h-fit flex items-center gap-x-2 pointer-events-none">
                {props.icon}
                <h2 className="capitalize" style={focus ? { display: "none" } : { display: "block" }}>{props.name}</h2>
            </div>
            <input
                className={` h-10 border-[1px]  rounded-lg outline-none caret-white p-3 w-full pl-9  transition-background ease-in-out duration-100 ${error[props.name as keyof loginValues] !== '' ? 'border-err bg-err/30 group-hover:bg-err/50' : 'border-grn bg-grn/30 group-hover:bg-grn/50'}`} {...items} title={title} onChange={onChange} onFocus={handleFocus} onBlur={handleBlur} autoComplete="off" ></input>
        </div>
    );
}

export default InputBoxLogin;