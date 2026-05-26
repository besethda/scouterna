import ContentSection from "@/components/ContentSection";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";

const History = ({params}:{params: Promise<{locale: string}>}) => {

    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv

    return (
        <div>
            <ContentSection sectionLayout={["h", "p", "p", "p", "p", "p"]} page="history" background={"blue"} />
        </div>
    );
}

export default History