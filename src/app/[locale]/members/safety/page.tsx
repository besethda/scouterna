'use client'
import CardWithImage from "@/components/CardWithImage";
import CTABtn from "@/components/CTA-button"
import useMessages from "@/hook/useMessages";
import ContentSection from "@/components/ContentSection";

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
                <div className="flex flex-col">
                    <div className="order-1 md:order-2">
                        <ContentSection sectionLayout={["h", "w", "p", "t", "s", "p", "s", "p", "s", "p"]} page="safeScout" background={"mobile"} padding="both"/>
                    </div>
                    <div className="order-2 md:order-1">
                        <ContentSection sectionLayout={["t", "p", "p", "t", "w", "l", "l", "l", "t", "p", "w", "l", "l", "l", "t", "w"]} background={"desktop"} page={"guidelines"} padding="top"/>
                    </div>
                    <div className="order-3">
                        <ContentSection sectionLayout={["h", "w", "p", "w"]} page="lockable" background="blue" display="desktop"/>
                        <ContentSection sectionLayout={["h", "w", "p"]} page="vests" display="mobile" padding="bottom" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Safety