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

  "/groups": false,
  "/groups/age-sections": true,
  "/groups/sjohumlorna": true,
  "/groups/kaparna": true,
  "/groups/utmanare": true,
  "/groups/konvojen": true,

  "/what-we-do": false,
  "/what-we-do/lifestyle": true,
  "/what-we-do/boats": true,
  "/what-we-do/cabins": true,
  "/what-we-do/cabins/myset": true,
  "/what-we-do/cabins/ruffen": true,

  "/members": false,
  "/members/scout-life": true,
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
    <div className="shrink-0">
      {pathname !== "/en" && pathname !== "/sv" && (
        <div className="flex items-center gap-1 text-sm md:text-lg py-2 px-4 md:px-45 text-[#3b3a3a]">
          <a href={messages?.breadcrumbs.path}>{messages?.breadcrumbs.title}</a>
          {breadcrumbsArray.map((item: string, index: number) => {
            const currentPath =
              "/" + breadcrumbsArray.slice(0, index + 1).join("/"); // get   /about   /about/history
            const href = messages?.breadcrumbs.path + currentPath; 

            return (
              <span key={index}>
                <span> / </span>
                {routes[currentPath] ? (
                  <Link href={href} className="text-black">
                    {messages?.breadcrumbs.page[item]}
                  </Link>
                ) : (
                  <span>{messages?.breadcrumbs.page[item]}</span>
                )}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Breadcrumbs;
