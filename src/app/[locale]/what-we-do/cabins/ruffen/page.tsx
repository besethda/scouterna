import CardWithImage from "@/components/CardWithImage";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";

const Ruffen = ({params}:{params: Promise<{locale: string}>}) => {

    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv
   
    return (
        <div>
            <CardWithImage sectionTitle="ruffen" logo="/blueHouse.png" image="/images/IMG_3957.JPEG" />
        </div>
    );
}

export default Ruffen