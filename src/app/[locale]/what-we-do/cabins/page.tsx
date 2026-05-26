import CardWithoutImage from "@/components/CardWithoutImage";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";

const Cabins = ({params}:{params: Promise<{locale: string}>}) => {
    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv

    return (
        <div>
            <CardWithoutImage headline={messages?.cabinsCard?.headline} logo="/blueHouse.png" title={messages?.cabinsCard?.title} text={messages?.cabinsCard?.text} MDlogo="/blueHouseYellowBg.svg" />
        </div>
    );
}

export default Cabins