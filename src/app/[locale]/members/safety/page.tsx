import ContentSection from "@/components/ContentSection";

const Safety = () => {

    return (
        <div>
            <ContentSection sectionLayout={["h", "w", "p", "t", "s", "p", "s", "p", "s", "p"]} page="safeScout" background={"blue"}/>
            <ContentSection sectionLayout={["t", "p", "p", "t", "w", "l", "l", "l", "t", "p", "w", "l", "l", "l", "t", "w", "p"]} page="guidelines"/>
            <ContentSection sectionLayout={["h", "w", "p"]} page="safeScout" background={"mobile"} />
        </div>
    );
}

export default Safety