import { getPageHeadTitle } from "@/lib/utils";
import { use } from "react";


const pageItems = [
  "age-sections",
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
  }else if (singleGroup === "familjescouter") {
      return <p> familjescouter page</p>;
  }
};

export default Groups;
