import { getPageHeadTitle } from "@/lib/utils"
import ContentSection from "@/components/ContentSection"
import Breadcrumbs from "@/components/Breadcrumbs";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import JoinPage from "@/components/JoinPage";
import ContactForm from "@/components/ContactForm";
import CardAbout from "@/components/AddCardAbout";


const pageItem = "contact";
const headDescription = "contact"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}

const Contact = ({params}:{params: Promise<{locale: string}>}) => {

  const {locale} = use(params)
  const messages = locale === "en" ? En : Sv

  return (
    <main>
      <Breadcrumbs />
      <div className="contact-logo">
        <CardAbout page="contactcard" card="contactmobilecard" logo="/person.svg" image="/images/DSCF3034.jpg" MDlogo="/bg-communication.svg"  />
      </div>
      <ContentSection sectionLayout={["t", "s", "p", "s", "p"]} page={"email"} background={"blue"}/>
      <ContentSection sectionLayout={["t", "s", "p", "s", "p"]} page={"bank"}/>
      <JoinPage 
      title={messages?.interestBtn.title}
      text={messages?.interestBtn.text}
      buttonText={messages?.interestBtn.buttonText}
      />
      <div className="w-full flex justify-center bg-bg-blue">
        <ContactForm 
        title={messages?.form.title}
        text={messages?.form.text}
        lastName={messages?.form.lastName}
        firstName={messages?.form.firstName}
        email={messages?.form.email}
        message={messages?.form.message}
        buttonText={messages?.form.buttonText}
        namn={messages?.form.namn}
        efternamn={messages?.form.efternamn}
        epost={messages?.form.epost}
        meddelande={messages?.form.meddelande}
        />
      </div>
    </main>
  )
}

export default Contact