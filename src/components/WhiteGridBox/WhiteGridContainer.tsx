import ContentSection from "../ContentSection"
import WhiteGridBox from "./WhiteGridBox"

const WhiteGridContainer = ({backgroundBlue=true, messageTitle}: {backgroundBlue:boolean, messageTitle:string}) => {
  return (
    <div className={`${backgroundBlue && "lg:bg-bg-blue" } flex flex-col items-center pb-15`}>
      <div className="w-full">
        <ContentSection sectionLayout={["t"]} page={"scoutLife"} padding="top" background={backgroundBlue ? "large" : ""}/>
      </div>
      <div className={`flex flex-col lg:flex-row pt-4 w-full max-w-280 items-center`}>
        <WhiteGridBox logoUrl={"/shipIcon-desktop.svg"} messageTitle={messageTitle} messageTextIndex={"0"} backgroundWhite={backgroundBlue}/>
        <WhiteGridBox logoUrl={backgroundBlue ? "/heartIcon-desktop.svg" : "/treeIcon.svg"} messageTitle={messageTitle} messageTextIndex={"1"} backgroundWhite={backgroundBlue}/>
        <WhiteGridBox logoUrl={backgroundBlue ? "/HandHeart.png" : "/triangleIcon.svg"} messageTitle={messageTitle} messageTextIndex={"2"} backgroundWhite={backgroundBlue}/>
      </div>
    </div>
  )
}

export default WhiteGridContainer
