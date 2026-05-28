import CTABtn from "./CTA-button";

interface JoinPageProps {
    title:string;
    text:string;
    buttonText?:string;
    buttonOnClick?:() => void;
    width?: string;
    btnWidth?: "fit" | "full" | "mobile-full";

}

const JoinPage = ({title, text, buttonText,buttonOnClick,btnWidth,width = "full"}:JoinPageProps) => {
    
    return (
        <div className={`${width === "box" ? "w-89.5 h-63.5 md:h-83 rounded-2xl md:flex-row md:w-full md:rounded items-center" : "w-full"} p-8 flex flex-col gap-6 bg-bg-blue mx-auto md:p-25 mt-10`}>
            <div className="flex flex-col gap-2 md:w-[30vw]"> 
                <h2 className="text-h2-albert md:text-h2-desktop font-albert text-primary md:w-[40vw]">{title}</h2>
                <p className={"text-text-black text-body md:text-body-desktop font-albert"}>{text}</p>
            </div>
            {buttonText &&(
                <div className="mx-auto w-full md:w-fit">
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