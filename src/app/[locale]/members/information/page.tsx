import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import CardWithImage from "@/components/CardWithImage";

const Information = ({params}:{params: Promise<{locale: string}>}) => {

    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv

    return (
        <div>
            <CardWithImage sectionTitle="memberInfo" logo="/dark-blue-hand.svg" image="/images/Boatsinarow.JPG"/>
        </div>
    );
}

export default Information