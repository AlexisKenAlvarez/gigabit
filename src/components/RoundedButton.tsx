const RoundedButton = ({ onClick, text }: { onClick: () => void, text: string }) => {
    return (
        <button className="bg-bttn hover:bg-bttnHover transition-background ease-in-out duration-300 w-full rounded-lg h-11 shadow-bttnShadow p-[5px] flex items-center gap-x-2 relative mt-5">
            <h3 className="text-center w-full absolute text-2xl" onClick={onClick}>{text}</h3>
        </button>
    );
}

export default RoundedButton;