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
];
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; singleGroup: string }>;
}) {
  const { locale, singleGroup } = await params;
  const groups = singleGroup[0]
  if (groups === pageItems[4]) {
      return getPageHeadTitle(locale, pageItems[4]);
  } else if (groups === pageItems[3]) {
    return getPageHeadTitle(locale, pageItems[3]);
  } else if (groups === pageItems[2]) {
    return getPageHeadTitle(locale, pageItems[2]);
  } else if (groups === pageItems[1]) {
    return getPageHeadTitle(locale, pageItems[1]);
  } else if (groups === pageItems[0]) {
    return getPageHeadTitle(locale, pageItems[0]);
  }
}

const Groups = ({
  params,
}: {
  params: Promise<{ locale: string; singleGroup: string }>;
}) => {
  const { locale, singleGroup } = use(params);
  const messages = locale === "en" ? En : Sv;
  const groups = singleGroup[0];
  if (groups === "sjohumlorna") {
    return <p>Sjöhumlorna page</p>;
  } else if (groups === "kaparna") {
    return <p>Kaparna page</p>;
  }else if (groups === "utmanare") {
    return <p>Utmanare page</p>;
  }else if (groups === "konvojen") {
    return <p>Konvojen page</p>;
  }else if (groups === "age-sections") {
    return <p> Age group page</p>;
  }
};

export default Groups;
