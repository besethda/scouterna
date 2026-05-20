interface CTAprops {
    text?:string,
    onClick?:() => void,

} 
//!w-[232px]
const CTABtn = ({text,onClick}:CTAprops) => {
    return (
        <div className="">
            <button className="py-[18.6] px-[24] text-body-desktop bg-accent text-primary overflow-hidden rounded-4xl
                p-2.5 text-center cursor-pointer transition-colors duration-300 ease-in-out hover:bg-lightYellow" 
                onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

export default CTABtn