import ContentSection from "@/components/ContentSection";

const Safety = () => {

    return (
        <div className="flex flex-col">
            <div className="order-1 md:order-2">
                <ContentSection sectionLayout={["h", "w", "p", "t", "s", "p", "s", "p", "s", "p"]} page="safeScout" background={"mobile"} padding="both"/>
            </div>
            <div className="order-2 md:order-1">
                <ContentSection sectionLayout={["t", "p", "p", "t", "w", "l", "l", "l", "t", "p", "w", "l", "l", "l", "t", "w"]} background={"desktop"} page={"guidelines"} padding="top"/>
            </div>
            <div className="order-3">
                <ContentSection sectionLayout={["h", "w", "p", "w"]} page="lockable" background="blue" display="desktop"/>
                <ContentSection sectionLayout={["h", "w", "p"]} page="vests" display="mobile" padding="bottom" />
            </div>

        </div>
    );
}

export default Safety