import { FC, useState } from "react";
import { loginType } from "utils/interface";

const InputBox: FC<loginType> = (props) => {

    const { onChange, ...items } = props
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
                className="bg-grn/30 h-10 border-[1px] border-grn rounded-lg outline-none caret-white p-3 w-full pl-9 group-hover:bg-grn/50 transition-background ease-in-out duration-100" {...items} onChange={onChange} onFocus={handleFocus} onBlur={handleBlur} autoComplete="off"></input>
        </div>
    );
}

export default InputBox;