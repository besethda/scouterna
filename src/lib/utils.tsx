import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";

export const getPageHeadTitle = (lang:string, pageItem:string, title:string) => {
  const data =  lang === "en" ? En : Sv
  return{
    title: data.tabTitle[pageItem],
    description: data.description[title]
  }
}