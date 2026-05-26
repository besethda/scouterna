'use client'
import CardWithImage from "@/components/CardWithImage";
import CTABtn from "@/components/CTA-button"
import useMessages from "@/hook/useMessages";

const Safety = () => {
    const messages = useMessages()
    return (
        <>
            <div>
                <CardWithImage sectionTitle="safetyCard" logo="/blue-lifejacket.svg" image="/images/DSCF3070.jpg" />
                <div className="hidden md:block pl-4 md:pl-50 pb-13">
                    <CTABtn text={messages?.safetyBtn?.btnDesktop} />
                </div>
                <div className="pl-4 pb-13 md:hidden">
                    <CTABtn text={messages?.safetyBtn?.btnMobile} />
                </div>
            </div>
        </>
    );
}

export default Safety