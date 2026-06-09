"use client";

import { usePathname } from "next/navigation";
import useMessages from "@/hook/useMessages";
import Link from "next/link";

type routesType = {
  [key: string]: boolean;
};
const routes: routesType = {
  "/join": false,
  "/join/become-a-scout": true,
  "/join/faq": true,

  "/groups": true,
  "/groups/spararscouter": true,
  "/groups/upptackascouter": true,
  "/groups/utmanare": true,
  "/groups/aventyrarscouter": true,
  "/groups/familjescouter": true,

  "/what-we-do": false,
  "/what-we-do/lifestyle": true,
  "/what-we-do/boats": true,
  "/what-we-do/cabins": true,
  "/what-we-do/cabins/myset": true,
  "/what-we-do/cabins/ruffen": true,

  "/members": false,
  "/members/information": true,
  "/members/safety": true,

  "/about-us": false,
  "/about-us/history": true,
  "/about-us/contact": true,
  "/about-us/gdpr": true,
};

const Breadcrumbs = () => {
  const pathname = usePathname(); //get example /en/about-us/history
  const breadcrumbsArray = pathname.split("/").slice(2); // from ["", "en", "about-us", "history"] to ["about-us", "history"]
  const messages = useMessages();

  return (
    <div className="shrink-0 mt-2 ">
      {pathname !== "/en" && pathname !== "/sv" && (
        <div className="flex justify-center w-full">
          <div className="flex h-9 md:h-12 items-center gap-1 text-body md:text-body-desktop py-2 px-3 w-full lg:max-w-430 lg:px-22">
            <a href={messages?.breadcrumbs.path} className="font-albert hover:text-accent duration-100 text-primary">{messages?.breadcrumbs.title}</a>
            {breadcrumbsArray.map((item: string, index: number) => {
              const currentPath =
                "/" + breadcrumbsArray.slice(0, index + 1).join("/"); // get  string  /about   /about/history
              const href = messages?.breadcrumbs.path + currentPath;  //get href  /en/about/history or /sv/about/history
              return ( // page["about-us"] = page.about-us, item is a variable like let item = "about-us" 
                <span key={index} className="flex items-center h-9 md:h-10 font-albert overflow-hidden text-primary whitespace-nowrap">
                  <span className="px-1.5 md:px-3 text-primary font-albert">  /  </span>
                  {routes[currentPath] ? (
                    <Link href={href} className={index + 1 === breadcrumbsArray.length? 
                    "text-primary hover:text-accent duration-100 font-albert text-body-bold md:text-body-bold-desktop whitespace-nowrap" 
                    :"text-primary hover:text-accent duration-100 font-albert whitespace-nowrap"}>
                      {messages?.breadcrumbs.page[item]} 
                    </Link>
                  ) : (
                    <span className="text-primary cursor-default font-albert">{messages?.breadcrumbs.page[item]}</span>
                  )}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Breadcrumbs;
