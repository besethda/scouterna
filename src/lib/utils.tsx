import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { client } from "../sanity/lib/client"

export const getPageHeadTitle = (lang:string, pageItem:string, title:string) => {
  const data =  lang === "en" ? En : Sv
  return{
    title: data.tabTitle[pageItem],
    description: data.description[title]
  }
}

export const getId = (id:string) => {
  return client.getDocument(id)
}

export const getSectionById = async (id:string, section:string) => {
  return client.fetch(`*[_id=="${id}"][0] {${section}}`)
}

// https://www.sanity.io/docs/apis-and-sdks/js-client-querying