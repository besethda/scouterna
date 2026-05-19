export const menuList = [
    {
        id: 1,
        nameKey: "nav_joinScout",
        submenu: [
            {
                nameKey: "nav_becomeScout",
                href: "/join/become-a-scout",
                icon: "/menu-scouterna-icon.svg"
            },
            {
                nameKey: "nav_faq",
                href: "/join/faq",
                icon: "/menu-question-circle-icon.svg"
            },
        ]
    },
    {
        id: 2,
        nameKey: "nav_ourUnits",
        submenu: [
            {
                nameKey: "nav_ourUnitStructure",
                href: "/groups/age-sections",
                icon: "/menu-scouterna-icon.svg"
            },
            {
                nameKey: "nav_unit1",
                href: "/groups/sea-bumblebees",
                icon: "/menu-fox-illustration.png"
            },
            {
                nameKey: "nav_unit2",
                href: "/groups/pirates",
                icon: "/menu-torch-illustration.png"
            },
            {
                nameKey: "nav_unit3",
                href: "/groups/convoy",
                icon: "/menu-fire-illustration.png"
            },
            {
                nameKey: "nav_unit4",
                href: "/groups/challengers",
                icon: "/menu-megaphone-illustration.png"
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
                icon: "/menu-scouterna-icon.svg"
            },
            {
                nameKey: "nav_boats",
                href: "/what-we-do/boats",
                icon: "/menu-boat-icon.svg"
            },
            {
                nameKey: "nav_cabins",
                href: "/what-we-do/cabins",
                icon: "/menu-house-icon.svg"
            },
            {
                nameKey: "nav_myset",
                href: "/what-we-do/cabins/myset",
                icon: "/menu-house-icon.svg"
            },
            {
                nameKey: "nav_ruffen",
                href: "/what-we-do/cabins/ruffen",
                icon: "/menu-house-icon.svg"
            },
        ]
    },
    {
        id: 4,
        nameKey: "nav_members",
        submenu: [
            {
                nameKey: "nav_information",
                href: "/members/scout-life",
                icon: "/menu-scouterna-icon.svg"
            },
            {
                nameKey: "nav_lifeJacketPolicy",
                href: "/members/safety",
                icon: "/menu-vest-icon.svg"
            },
            {
                nameKey: "nav_communication",
                href: "/members/communication",
                icon: "/menu-communication-icon.svg"
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
                icon: "/menu-filledHeart-icon.svg"
            },
            {
                nameKey: "nav_contact",
                href: "/about-us/contact",
                icon: "/menu-communication-icon.svg"
            },
            {
                nameKey: "nav_board",
                href: "/about-us/board",
                icon: "/menu-members-icon.svg"
            },
            {
                nameKey: "nav_gdpr",
                href: "/about-us/gdpr",
                icon: "/menu-info-icon.svg"
            },
        ]
    }
] as const;