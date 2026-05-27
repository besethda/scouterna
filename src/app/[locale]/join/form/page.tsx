import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";

const Form = ({params}:{params: Promise<{locale: string}>}) => {

    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv

    return (
        <div>
        </div>
    );
}

export default Form