import { getPageHeadTitle } from "@/lib/utils"
import ContentSection from "@/components/ContentSection"
import Breadcrumbs from "@/components/Breadcrumbs";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import JoinPage from "@/components/JoinPage";
import CardAbout from "@/components/AddCardAbout";


const pageItem = "contact"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}



const Contact = ({params}:{params: Promise<{locale: string}>}) => {

  const {locale} = use(params)
  const messages = locale === "en" ? En : Sv

  return (
    <div>
      <Breadcrumbs />
      <div className="contact-logo">
        <CardAbout page="contactcard" card="contactmobilecard" logo="/person.png" image="/images/IMG_0184.jpeg" MDlogo="/bg-communication.svg"  />
      </div>
      <ContentSection sectionLayout={["t", "s", "p", "s", "p"]} page={"email"} background={"blue"}/>
      <ContentSection sectionLayout={["t", "s", "p", "s", "p"]} page={"bank"}/>
      <JoinPage 
      title={messages?.interestBtn.title}
      text={messages?.interestBtn.text}
      buttonText={messages?.interestBtn.buttonText}
      className="items-start text-left"
      />
    </div>
  )
}







export default Contact