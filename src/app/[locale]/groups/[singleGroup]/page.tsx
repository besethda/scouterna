import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import useMessages from "@/hook/useMessages";

const Groups = ({params}:{params: Promise<{locale: string}>}) => {

    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv

    return (
        <div>

        </div>
    );
}

export default Groups