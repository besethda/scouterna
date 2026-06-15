import CTABtn from "./CTA-button";
import Image from "next/image";
import ImageCard from "./ImageCard";
import Arrow from "../../public/arrow-02.svg"
import shortLine from "../../public/line-short.svg"
import longLine from "../../public/line-long.svg"

interface JoinPageProps {
  head?: string
  title: string;
  text: string;
  buttonText?: string;
  image?: {url:string, alt:string}
  section?: string
  buttonOnClick?: () => void;
  width?: string;
  btnWidth?: "fit" | "full" | "mobile-full";
  className?: string;
}

const JoinPage = ({
  head,
  title,
  text,
  buttonText,
  image,
  section,
  buttonOnClick,
  btnWidth,
  width = "full",
  className,
}: JoinPageProps) => {
  return (
    <div
      className="bg-bg-accent w-full border-transparent rounded-2xl flex shadow-xl"
    >
      <div
        className="flex flex-col w-full lg:max-w-400 px-2 md:p-8 gap-4 md:gap-20 lg:gap-40 2xl:gap-70 py-8 md:flex-row md:flex-2"
      >
        <div
          className={`flex flex-col gap-6 text-left relative ${section === "join" ? " md:max-w-100 lg:max-w-140" : ""}`}
        >
          <div className="px-2">
            <div className="gap-0">
              <h2 className={`font-fraunces font-bold text-primary pb-1 md:text-h2-desktop ${section === "join" ? "text-h1" : "text-[22px] "}`}>{head}</h2>
              {section === "join" ? <Image src={shortLine} alt="line" /> : <Image src={longLine} alt="line" className="sm:max-w-[260px] max-w-[280px] md:max-w-[235px] lg:max-w-[320px] xl:max-w-[350px] 2xl:max-w-[512px]" />}
            </div>
            <h3 className={`text-h2-albert font-fraunces font-bold text-primary md:text-h4-desktop md:pt-3 ${section === "contact" && "hidden md:block"}`}>
              {title}
            </h3>
            <p
              className={
                "text-text-black text-body md:text-body-desktop font-albert"
              }
            >
              {text}
            </p>
          </div>
          <div className="hidden md:block absolute bottom-5 left-150 rotate-30">
            <Image src={Arrow} alt="arrow" />
          </div>
          <div className={`md:flex-1 ${section === "join" ? "hidden" : "md:hidden"}`}>
            <ImageCard imageTitle={image ? image.alt : ""} image={image? image.url : ""} section={section === "join" ? "joinPage" : "interstsBtn"} page="join" text="" pin="red" />
          </div>
          {buttonText && (
            <div
              className="mx-auto md:mx-0"
            >
              <a
                href="https://www.scoutnet.se/register/in/group/764"
                target="_blank"
              >
                <CTABtn
                  text={buttonText}
                  width={btnWidth}
                  onClick={buttonOnClick}
                  section="join"
                />
              </a>
            </div>
          )}
        </div>

        <div className={`flex justify-center md:flex-1 w-full ${section === "join" ? "hidden md:block" : "hidden md:block"}`}>
          <ImageCard imageTitle="photoTitle" image="/images/hood.jpg" section={section === "join" ? "joinPage" : "interstsBtn"} page="join" text="" pin="dark_red" />
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
