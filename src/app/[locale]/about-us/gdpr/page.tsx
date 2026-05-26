import ContentSection from "@/components/ContentSection";

const Gdpr = () => {

    return (
        <div>
            <ContentSection sectionLayout={["t", "p", "s", "l", "l", "l", "l", "l", "s", "l", "l", "l", "l", "l", "l", "l", "l", "l", "p", "s", "p"]} page={"gdpr"} background={"blue"}/>
            <ContentSection sectionLayout={["s", "p", "p", "p", "p", "p", "p"]} page={"ethics"} display={"mobile"}/>
        </div>
    );
}

export default Gdpr