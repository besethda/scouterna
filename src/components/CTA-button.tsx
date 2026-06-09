"use client"

interface CTAprops {
    text?: string,
    onClick?: () => void,
    width?: string
    section?: string
}

const CTABtn = ({ text, onClick, width = "fit", section }: CTAprops) => {
    return (
        <div className="">
            <button className={`py-4.25 px-9 ${width === "fit" ? "w-fit" : width === "full" ? "w-full" : "w-full md:w-fit"}
                font-albert text-body md:text-button-desktop 
                overflow-hidden rounded-4xl px-6 py-4 text-center cursor-pointer transition-colors duration-300 shadow-md ease-in-out 
                active:shadow-none active:scale-98  active:brightness-100
                border-[3px] hover:brightness-90  border-transparent
                ${section === "join"
                    ? "bg-primary text-white active:bg-primary active:border-primaryBtn hover:bg-primary hover:border-primaryBtn"
                    : "bg-accent text-primary active:bg-accent active:border-btn hover:bg-accent hover:border-btn"}`}
                onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

export default CTABtn