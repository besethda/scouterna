import CTABtn from "./CTA-button";

interface JoinPageProps {
  title: string;
  text: string;
  buttonText?: string;
  buttonOnClick?: () => void;
  width?: string;
  btnWidth?: "fit" | "full" | "mobile-full";
  className?: string;
}

const JoinPage = ({
  title,
  text,
  buttonText,
  buttonOnClick,
  btnWidth,
  width = "full",
  className,
}: JoinPageProps) => {
  return (
    <div
      className={`${width === "box" ? "bg-bg-blue" : ""}  w-full  md:max-w-full border-transparent rounded-2xl`}
    >
      <div
        className={`${width === "box" ? "w-89.5 h-64 md:h-83 rounded-2xl md:flex-row md:w-full md:rounded items-center bg-bg-blue p-8" : "w-full"}max-w-[90%] flex w-full px-4 lg:max-w-430 lg:px-22 flex-col gap-4 md:gap-10 py-10 lg:p-25 mx-auto`}
      >
        <div
          className={`flex flex-col w-full gap-2 md:w-full lg:w-[55%] text-left`}
        >
          <h2 className="text-h2-albert md:text-h2-desktop font-fraunces font-bold text-primary md:w-[40vw]">
            {title}
          </h2>
          <p
            className={
              "text-text-black text-body md:text-body-desktop font-albert"
            }
          >
            {text}
          </p>
        </div>
        {buttonText && (
          <div
            className={`${width === "mobile" ? " mx-auto md:mx-0"  : "w-full md:w-fit"} w-fit mt-2 `}
          >
              <a
                href="https://www.scoutnet.se/register/in/group/764"
                target="_blank"
              >
                <CTABtn
                  text={buttonText}
                  width={btnWidth}
                  onClick={buttonOnClick}
                />
              </a>
            </div>
        )}
      </div>
    </div>
  );
};

export default JoinPage;
