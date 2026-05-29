import CTABtn from "./CTA-button";

interface JoinPageProps {
    title:string;
    text:string;
    buttonText?:string;
    buttonOnClick?:() => void;
    width?: string;
    btnWidth?: "fit" | "full" | "mobile-full";
    className?:string;
}


const JoinPage = ({title, text, buttonText,buttonOnClick,btnWidth,width = "full", className}:JoinPageProps) => {
    return (
        <div className={`${width === "box" ? "w-89.5 h-63.5 md:h-83 rounded-2xl md:flex-row md:w-full md:rounded items-center gap-6 bg-bg-blue p-8" : "w-full"} px-4 pb-10 flex flex-col gap-4 md:gap-10  md:p-25 mt-10 mx-auto`}>
            <div className={`flex flex-col gap-2 md:w-full lg:w-[55%]`}> 
                <h2 className="text-h2-albert md:text-h2-desktop font-albert text-primary font-medium md:w-[40vw]">{title}</h2>
                <p className={"text-text-black text-body md:text-body-desktop font-albert"}>{text}</p>
            </div>
            {buttonText &&(   
                <div className={`${width === "box" ?" w-73.5" : "w-full md:w-fit"}`}>
                    <CTABtn onClick={buttonOnClick} 
                    text={buttonText}
                    width={btnWidth}
                />
                </div>
            )}
        </div>
    )
}

export default JoinPage