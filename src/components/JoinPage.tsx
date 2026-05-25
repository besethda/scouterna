import CTABtn from "./CTA-button";

interface JoinPageProps {
    title:string;
    text:string;
    buttonText?:string;
    buttonOnClick?:() => void;
    width?: string;

}

const JoinPage = ({title, text, buttonText,buttonOnClick,width = "full"}:JoinPageProps) => {
    return (
        <div className={width === "full" ? "w-full" : "w-[80%] h-[254] rounded-2xl  bg-bg-blue p-8 flex flex-col gap-6"}>
            <div className="flex flex-col gap-2"> 
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            {buttonText &&(
                <CTABtn onClick={buttonOnClick} 
                text={buttonText}
                />
            )}
        </div>
    )
}

export default JoinPage