import { getPageHeadTitle } from "@/lib/utils"



const pageItem = "contact"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}


const Contact = () => {
  return (
    // You can insert components because this place can't use 'use client，all pages are same
    <div></div>
  )
}

export default Contact