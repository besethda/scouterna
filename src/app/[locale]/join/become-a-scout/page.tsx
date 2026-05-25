'use client'
import CardWithImage from "@/components/CardWithImage";
import useMessages from "@/hook/useMessages"

// import { getPageHeadTitle } from "@/lib/utils"

// const pageItem = "become-a-scout"
// export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
//     const { locale } = await params
//     return getPageHeadTitle(locale, pageItem)
// }



const BecomeAScout = () => {

    const messages = useMessages()

    if (!messages) {
        return null
    }

    return (
        <div>
            <CardWithImage headline={messages?.joinCard?.headline} logo="/heart.png" title={messages?.joinCard?.title} text={messages?.joinCard?.text} image="/images/DSCF3017.jpg" />
        </div>
    );
}

export default BecomeAScout