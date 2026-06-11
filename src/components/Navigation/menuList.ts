export const menuList = [
    {
        id: 1,
        nameKey: "nav_joinScout",
        submenu: [
            {
                nameKey: "nav_becomeScout",
                href: "/join/become-a-scout",
                iconBg: "/heartIconYellowBg.svg"
            },
            {
                nameKey: "nav_faq",
                href: "/join/faq",
                iconBg: "/informationIconNav.svg"
            },
        ]
    },
    {
        id: 2,
        nameKey: "nav_ourUnits",
        submenu: [
            {
                nameKey: "nav_ourUnitStructure",
                href: "/groups",
                iconBg: "/heartIconYellowBg.svg"
            },
            {
                nameKey: "nav_unit1",
                href: "/groups/spararscouter",
                iconBg: "/menu-fox-illustration.png"
            },
            {
                nameKey: "nav_unit2",
                href: "/groups/upptackarscouter",
                iconBg: "/menu-torch-illustration.png"
            },
            {
                nameKey: "nav_unit3",
                href: "/groups/aventyrarscouter",
                iconBg: "/menu-fire-illustration.png"
            },
            {
                nameKey: "nav_unit4",
                href: "/groups/utmanarscouter",
                iconBg: "/menu-megaphone-illustration.png"
            },
            {
                nameKey: "nav_unit5",
                href: "/groups/familjescouter",
                iconBg: "/familjescouter.svg"
            },
        ]
    },
    {
        id: 3,
        nameKey: "nav_whatWeDo",
        submenu: [
            {
                nameKey: "nav_LifeScout",
                href: "/what-we-do/lifestyle",
                iconBg: "/wavesIconNav.svg"
            },
            {
                nameKey: "nav_boats",
                href: "/what-we-do/boats",
                iconBg: "/boatIconNav.svg"
            },
            {
                nameKey: "nav_cabins",
                href: "/what-we-do/cabins",
                iconBg: "/cabinIconNav.svg"
            },
            {
                nameKey: "nav_myset",
                href: "/what-we-do/cabins/myset",
                iconBg: "/cabinIconNav.svg"
            },
            {
                nameKey: "nav_ruffen",
                href: "/what-we-do/cabins/ruffen",
                iconBg: "/cabinIconNav.svg"
            },
        ]
    },
    {
        id: 4,
        nameKey: "nav_members",
        submenu: [
            {
                nameKey: "nav_information",
                href: "/members/information",
                iconBg: "/informationIconNav.svg"
            },
            {
                nameKey: "nav_lifeJacketPolicy",
                href: "/members/safety",
                iconBg: "/informationIconNav.svg"
            },
        ]
    },
    {
        id: 5,
        nameKey: "nav_aboutUs",
        submenu: [
            {
                nameKey: "nav_history",
                href: "/about-us/history",
                iconBg: "/heartIconYellowBg.svg"
            },
            {
                nameKey: "nav_contact",
                href: "/about-us/contact",
                iconBg: "/contactIconNav.svg"
            },
            {
                nameKey: "nav_gdpr",
                href: "/about-us/gdpr",
                iconBg: "/informationIconNav.svg"
            },
        ]
    }
] as const;

export const mobileMenuList = [
    {
        nameKey: "nav_school",
        href: "https://www.scouternasfolkhogskola.se/",
        icon: "/menu-book-circle-icon.svg"
    },
    {
        nameKey: "nav_shop",
        href: "https://www.scoutshop.se/",
        icon: "/menu-bag-circle-icon.svg"
    },
    {
        nameKey: "nav_scoutnet",
        href: "https://www.scoutnet.se/f/login",
        icon: "/menu-key-circle-icon.svg"
    },
] as const;