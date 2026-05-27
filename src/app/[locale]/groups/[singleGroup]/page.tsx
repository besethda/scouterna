import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getPageHeadTitle } from "@/lib/utils";


const pageItems = [
  "sjohumlorna",
  "kaparna",
  "utmanare",
  "konvojen",
  "familjescouter"
];
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; singleGroup: string }>;
}) {
  const { locale, singleGroup } = await params;
  const IsSingleGroup = pageItems.includes(singleGroup)
  const tabTitle = IsSingleGroup ? getPageHeadTitle(locale, singleGroup) : getPageHeadTitle(locale, "HSS | Hem")
  return  tabTitle
}

const Groups = ({
  params,
}: {
  params: Promise<{ locale: string; singleGroup: string }>;
}) => {
  const { singleGroup } = use(params);
  const {locale} = use(params)
  const messages = locale === "en" ? En : Sv

  return (
    <>
      <Breadcrumbs />
    </>
  )
};

export default Groups;
