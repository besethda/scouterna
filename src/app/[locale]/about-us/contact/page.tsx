import { getPageHeadTitle } from "@/lib/utils"
import ContentSection from "@/components/ContentSection"
import Breadcrumbs from "@/components/Breadcrumbs";
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
<<<<<<< HEAD
import JoinPage from "@/components/JoinPage";

=======
import ContactForm from "@/components/ContactForm";
>>>>>>> HSS-076-Form


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
      <ContentSection sectionLayout={["t", "s", "p", "s", "p"]} page={"email"} background={"blue"}/>
      <ContentSection sectionLayout={["t", "s", "p", "s", "p"]} page={"bank"}/>
<<<<<<< HEAD
      <JoinPage 
      title={messages?.interestBtn.title}
      text={messages?.interestBtn.text}
      buttonText={messages?.interestBtn.buttonText}
      className="items-start text-left"
=======
      <ContentSection sectionLayout={["t", "p"]} page={"form_title"} />
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
>>>>>>> HSS-076-Form
      />
    </div>
  )
}







export default Contact