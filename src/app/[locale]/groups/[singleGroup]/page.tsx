import { getPageHeadTitle } from "@/lib/utils";
import { use } from "react";
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";

const pageItems = [
  "age-sections",
  "sjohumlorna",
  "kaparna",
  "utmanare",
  "konvojen",
  "familjscouter"
];
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; singleGroup: string }>;
}) {
  const { locale, singleGroup } = await params;
  const IsSingleGroup = pageItems.includes(singleGroup)
  const tabTitle = IsSingleGroup ? getPageHeadTitle(locale, singleGroup) : getPageHeadTitle(locale, "HSS | Home")
  return  tabTitle
}

const Groups = ({
  params,
}: {
  params: Promise<{ locale: string; singleGroup: string }>;
}) => {
  const { locale, singleGroup } = use(params);
  const messages = locale === "en" ? En : Sv;
  //If you want to messages, it's like useMessage() for example {messages.header.title}
  //If you don't use it, you can put component inside it
  //All contents put in return
  if (singleGroup === "sjohumlorna") {
      return <p>Sjöhumlorna page</p>;
  } else if (singleGroup === "kaparna") {
      return <p>Kaparna page</p>;
  }else if (singleGroup === "utmanare") {
      return <p>Utmanare page</p>;
  }else if (singleGroup === "konvojen") {
      return <p>Konvojen page</p>;
  }else if (singleGroup === "age-sections") {
      return <p> Age group page</p>;
  }else if (singleGroup === "familjscouter") {
      return <p> familjscouter page</p>;
  }
};

export default Groups;
