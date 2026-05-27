<<<<<<< HEAD
=======
import { getPageHeadTitle } from "@/lib/utils"
>>>>>>> HSS-049-Page-Tab-Title
import CardWithImage from "@/components/CardWithImage";
import MapWrapper from "@/components/Map/MapWrapper";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
<<<<<<< HEAD
import { getPageHeadTitle } from "@/lib/utils"

=======
>>>>>>> HSS-049-Page-Tab-Title


const pageItem = "ruffen"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}

<<<<<<< HEAD

=======
>>>>>>> HSS-049-Page-Tab-Title
const Ruffen = ({params}:{params: Promise<{locale: string}>}) => {

    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv
   
    return (
        <div>
            <CardWithImage sectionTitle="ruffen" logo="/blueHouse.png" image="/images/IMG_3957.JPEG" />
            <MapWrapper />
        </div>
    );
}

export default Ruffen