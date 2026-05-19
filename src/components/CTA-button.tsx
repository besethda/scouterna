interface CTAprops {
    text?:string
} 

const CTABtn = ({text}:CTAprops) => {
    return (
        <div className="w-[222]">
            <p className="text-body-desktop bg-accent text-primary overflow-hidden rounded-[24]
            p-2.5 text-center">{text}</p>
        </div>
    )
}

export default CTABtn