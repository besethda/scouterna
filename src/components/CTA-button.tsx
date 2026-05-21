interface CTAprops {
    text?: string,
    onClick?:() => void,
    width?: string
} 
//!w-[232px]
const CTABtn = ({text, onClick, width = "fit"}:CTAprops) => {
    return (
        <div className="">
            <button className={`py-[18.6] px-[24] ${width === "fit" ? "w-fit" : width === "full" ? "w-full" : "w-full md:w-fit"} font-albert text-body md:text-body-desktop bg-accent text-primary overflow-hidden rounded-4xl
                px-6 py-4 text-center cursor-pointer transition-colors duration-300 ease-in-out hover:bg-lightYellow`} 
                onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

export default CTABtn