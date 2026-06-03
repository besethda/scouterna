import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import Breadcrumbs from "@/components/Breadcrumbs";
import { use } from "react";


const AboutUs = ({params}:{params: Promise<{locale: string}>}) =>{

    const {locale} = use(params)
    const messages = locale === "en" ? En : Sv
  
  return(
    <main>
      <Breadcrumbs />
    </main>
  )
}

export default AboutUs