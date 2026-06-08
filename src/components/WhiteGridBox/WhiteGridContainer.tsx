import ContentSection from "../ContentSection"
import WhiteGridBox from "./WhiteGridBox"
import ImageCard from "@/components/ImageCard";

const WhiteGridContainer = ({ backgroundBlue = true, messageTitle }: { backgroundBlue: boolean, messageTitle: string }) => {
  const imageList = [
    { img: "DSCF3797.jpg", title: "header0", text: "text0", pin: "red" },
    { img: "DSCF3361.jpg", title: "header1", text: "text1", pin: "pink" },
    { img: "IMG_0685.JPEG", title: "header2", text: "text2", pin: "dark_red" }
  ]

  return (
    <div className={`${backgroundBlue && "lg:bg-bg-blue"} flex w-full flex-col items-center pb-15`}>
      <div className="w-full">
        <ContentSection sectionLayout={["t"]} page={"scoutLife"} padding="top" background={backgroundBlue ? "large" : ""} />
      </div>
      <div className="w-full items-center lg:justify-center lg:max-w-400 flex px-4 py-4 lg:px-14 flex-col gap-6 md:flex-row md:justify-center">
        {imageList.map((image, index) => (
          <ImageCard key={index} image={`/images/${image.img}`} imageTitle={image.title} text={image.text} section="learning" page="scout-life" pin={image.pin} />
        )
        )}
      </div>
    </div>
  )
}

export default WhiteGridContainer
