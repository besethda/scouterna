interface CTAprops {
    text?:string,
    onClick?:() => void,

} 

const CTABtn = ({text,onClick}:CTAprops) => {
    return (
        <div className="w-[222]">
            <button className="text-body-desktop bg-accent text-primary overflow-hidden rounded-[24]
                p-2.5 text-center cursor-pointer transition-colors duration-300 ease-in-out hover:bg-lightYellow" 
                onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

export default CTABtn