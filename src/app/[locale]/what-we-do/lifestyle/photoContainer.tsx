import ContentSection from "@/components/ContentSection";
import ImageCard from "@/components/ImageCard";

const PhotoContainer = ({ backgroundBlue = true, messageTitle }: { backgroundBlue: boolean, messageTitle: string }) => {
    const imageList = [
        { img: "IMG_0406.JPEG", title: "header0", text: "text0", pin: "red" },
        { img: "DSCF3361.jpg", title: "header1", text: "text1", pin: "pink" },
        { img: "IMG_0685.JPEG", title: "header2", text: "text2", pin: "dark_red" }
    ]

    return (
        <div className={`${backgroundBlue && "lg:bg-bg-blue"} items-center pb-10 xl:pt-20 lg:max-w-[var(--max-w-laptop)] 2xl:max-w-[var(--max-w-desktop)]`}>
            <div className="w-full">
                <ContentSection sectionLayout={["t"]} page={"scoutLife"} padding="" />
            </div>
            <div className="w-full items-center lg:justify-around lg:max-w-400 flex px-4 py-4 flex-col gap-4 md:flex-row md:justify-center md:flex-wrap">
                {imageList.map((image, index) => (
                    <ImageCard key={index} image={`/images/${image.img}`} imageTitle={image.title} text={image.text} section="learning" page="scout-life" pin={image.pin} />
                )
                )}
            </div>
        </div>
    )
}

export default PhotoContainer
