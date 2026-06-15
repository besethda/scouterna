import type { MetadataRoute } from 'next'
const siteURL = "http://localhost:3000"
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteURL}/sv`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteURL}/en`,
          sv: `${siteURL}/sv`,
        },
      },
    },
    {
      url: `${siteURL}/sv/join/become-a-scout`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteURL}/en/join/become-a-scout`,
          sv: `${siteURL}/sv/join/become-a-scout`,
        },
      },
    },
    {
      url: `${siteURL}/sv/join/faq`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteURL}/en/join/faq`,
          sv: `${siteURL}/sv/join/faq`,
        },
      },
    },
    {
      url: `${siteURL}/sv/groups`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteURL}/en/groups`,
          sv: `${siteURL}/sv/groups`,
        },
      },
    },
    {
      url: `${siteURL}/sv/groups/spararscouter`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteURL}/en/groups/spararscouter`,
          sv: `${siteURL}/sv/groups/spararscouter`,
        },
      },
    },
    {
      url: `${siteURL}/sv/groups/upptackarscouter`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteURL}/en/groups/upptackarscouter`,
          sv: `${siteURL}/sv/groups/upptackarscouter`,
        },
      },
    },
    {
      url: `${siteURL}/sv/groups/aventyrarscouter`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteURL}/en/groups/aventyrarscouter`,
          sv: `${siteURL}/sv/groups/aventyrarscouter`,
        },
      },
    },
    {
      url: `${siteURL}/sv/groups/utmanarscouter`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteURL}/en/groups/utmanarscouter`,
          sv: `${siteURL}/sv/groups/utmanarscouter`,
        },
      },
    },
    {
      url: `${siteURL}/sv/groups/familjescouter`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteURL}/en/groups/familjescouter`,
          sv: `${siteURL}/sv/groups/familjescouter`,
        },
      },
    },
    {
      url: `${siteURL}/sv/what-we-do/lifestyle`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteURL}/en/what-we-do/lifestyle`,
          sv: `${siteURL}/sv/what-we-do/lifestyle`,
        },
      },
    },
    {
      url: `${siteURL}/sv/what-we-do/boats`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteURL}/en/what-we-do/boats`,
          sv: `${siteURL}/sv/what-we-do/boats`,
        },
      },
    },
    {
      url: `${siteURL}/sv/what-we-do/cabins`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteURL}/en/what-we-do/cabins`,
          sv: `${siteURL}/sv/what-we-do/cabins`,
        },
      },
    },
    {
      url: `${siteURL}/sv/what-we-do/cabins/myset`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteURL}/en/what-we-do/cabins/myset`,
          sv: `${siteURL}/sv/what-we-do/cabins/myset`,
        },
      },
    },
    {
      url: `${siteURL}/sv/what-we-do/cabins/ruffen`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteURL}/en/what-we-do/cabins/ruffen`,
          sv: `${siteURL}/sv/what-we-do/cabins/ruffen`,
        },
      },
    },
    {
      url: `${siteURL}/sv/members/information`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteURL}/en/members/information`,
          sv: `${siteURL}/sv/members/information`,
        },
      },
    },
    {
      url: `${siteURL}/sv/members/safety`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteURL}/en/members/safety`,
          sv: `${siteURL}/sv/members/safety`,
        },
      },
    },
    {
      url: `${siteURL}/sv/about-us/history`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteURL}/en/about-us/history`,
          sv: `${siteURL}/sv/about-us/history`,
        },
      },
    },
    {
      url: `${siteURL}/sv/about-us/contact`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteURL}/en/about-us/contact`,
          sv: `${siteURL}/sv/about-us/contact`,
        },
      },
    },
    {
      url: `${siteURL}/sv/about-us/gdpr`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${siteURL}/en/about-us/gdpr`,
          sv: `${siteURL}/sv/about-us/gdpr`,
        },
      },
    },
    
  ]
}