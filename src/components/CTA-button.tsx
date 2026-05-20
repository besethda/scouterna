interface CTAprops {
    text?:string,
    onClick?:() => void,

} 

const CTABtn = ({text,onClick}:CTAprops) => {
    return (
        <div className="w:232px">
            <button className="!w-[232px] text-body-desktop bg-accent text-primary overflow-hidden rounded-3xl
                p-2.5 text-center cursor-pointer transition-colors duration-300 ease-in-out hover:bg-lightYellow" 
                onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

export default CTABtn