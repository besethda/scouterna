import CardWithImage from "@/components/CardWithImage";
import WhiteGridContainer from "@/components/WhiteGridBox/WhiteGridContainer";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";

const LifeStyle = ({params}:{params: Promise<{locale: string}>}) => {

    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv

    return (
        <div>
            <CardWithImage sectionTitle="learning" logo="/heart.png" image="/images/DSCF3033.jpg"/>
            <WhiteGridContainer backgroundBlue={false} messageTitle="learning"/>
        </div>
    );
}

export default LifeStyle