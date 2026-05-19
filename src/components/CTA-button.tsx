interface CTAprops {
    text?:string,
    onClick?:() => void,

} 

const CTABtn = ({text,onClick}:CTAprops) => {
    return (
        <div className="w-[222]">
            <button className="text-body-desktop bg-accent text-primary overflow-hidden rounded-[24]
            p-2.5 text-center cursor-pointer" onClick={onClick}>{text}</button>
        </div>
    )
}

export default CTABtn