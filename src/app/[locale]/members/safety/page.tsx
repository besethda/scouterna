import ContentSection from "@/components/ContentSection";

const Safety = () => {

    return (
        <div>
            <div className="order-1 md:order-2">
                <ContentSection sectionLayout={["h", "w", "p", "t", "s", "p", "s", "p", "s", "p"]} page="safeScout" background={"blue"} padding="top"/>
            </div>
            <div className="order-2 md:order-1">
                <ContentSection sectionLayout={["t", "p", "p", "t", "w", "l", "l", "l", "t", "p", "w", "l", "l", "l", "t", "w", "p"]} page="guidelines" padding="top"/>
            </div>
            <div className="order-3">
                <ContentSection sectionLayout={["h", "w", "p"]} page="vests" display="desktop" background="blue"/>
                <ContentSection sectionLayout={["h", "w", "p"]} page="vests" display="mobile" padding="bottom" />
            </div>

        </div>
    );
}

export default Safety