import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

const Communication = ({params}:{params: Promise<{locale: string}>}) => {
    
    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv

    return (
        <div>
            <Breadcrumbs />
        </div>
    );
}

export default Communication