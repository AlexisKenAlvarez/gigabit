const Button = ({ onClick, text, className }: { onClick: () => void, text: string, className?: string }) => {
    return (
        
        <button className={`bg-bttn transition-all ease-in-out duration-300 w-full h-12 p-[5px] flex items-center gap-x-2 relative overflow-hidden group ${className}`} onClick={onClick}>

            <h3 className="text-center w-full absolute text-2xl group-hover:text-bttn z-10 delay-[0.25s]">{text}</h3>
            <div className="w-[150%] h-[105%] bg-white absolute left-0 bottom-0 -translate-x-[101%] group-hover:translate-x-0 transition-all ease-in-out duration-[0.8s] clipped-button"></div>

        </button>
    );
}

export default Button;