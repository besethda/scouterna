import CardWithImage from "@/components/CardWithImage";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";

const BecomeAScout = ({params}:{params: Promise<{locale: string}>}) => {
    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv

    return (
        <div>
            <CardWithImage sectionTitle={"joinCard"} logo="/heart.png" image="/images/DSCF3017.jpg" />
        </div>
    );
}

export default BecomeAScout