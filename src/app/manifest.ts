import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hässelby Strands Sjöscouter',
    short_name: 'HSS',
    description: 'En traditionsrik sjöscoutkår vid Mälaren i Hässelby strand. Vi fokuserar på äventyr, segling och stark gemenskap.',
    start_url: '/',
    display: 'standalone',
    background_color: '#003660',
    theme_color: '#FDB715',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
  }
}
