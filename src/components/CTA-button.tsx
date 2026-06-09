"use client"

interface CTAprops {
    text?: string,
    onClick?:() => void,
    width?: string
} 

const CTABtn = ({text, onClick, width = "fit"}:CTAprops) => {
    return (
        <div className="">
            <button className={`py-4.25 px-9 ${width === "fit" ? "w-fit" : width === "full" ? "w-full" : "w-full md:w-fit"}
                font-albert text-body md:text-button-desktop bg-accent text-primary
                overflow-hidden rounded-4xl px-6 py-4 text-center cursor-pointer transition-colors duration-300 shadow-md ease-in-out 
                active:shadow-none active:scale-98  active:bg-accent active:border-btn active:brightness-100
                border-[3px] hover:brightness-90 hover:bg-accent hover:border-btn border-transparent`} 
                onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

export default CTABtn