interface CTAprops {
    text?:string,
    onClick?:() => void,

} 

const CTABtn = ({text,onClick}:CTAprops) => {
    return (
        <div className="w:232px">
            <button className="!w-[232px] text-body bg-accent text-primary overflow-hidden rounded-3xl
                p-3 text-center cursor-pointer transition-colors duration-300 ease-in-out hover:bg-lightYellow" 
                onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

export default CTABtn