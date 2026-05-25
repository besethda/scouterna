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
        /*<div className={width === "full" ? "w-full" : "w-[358] h-[254] rounded-2xl  bg-bg-blue p-8 flex flex-col gap-6"}>*/
        <div className={`${width === "box" ? "w-[358px] h-[254px] rounded-2xl md:flex-row md:w-full md:w-[]" : "w-full"}  p-8 flex flex-col gap-6 bg-bg-blue mx-auto`}>
            <div className="flex flex-col gap-2"> 
                <h2 className="text-h2">{title}</h2>
                <p className="text-body">{text}</p>
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