import Resume from "./resume";
import { ExpCircle } from "./svgs";
// import resumeUrl from "../utils/ED.pdf";

const Experience = () => {
  return (
    <>
      <div className={`flex flex-col ml-3 lg:items-end`}>
        <div className="font-pop mb-4">
          <h2
            className={`h-full flex items-center ml-0 lg:ml-20 font-clashbold text-white text-[20px] font-semibold lg:text-[50px] lg:leading-[49.2px]`}
          >
            Experience <small className={`animate-bounce`}>🚀</small>
          </h2>
          <p
            className={`font-medium text-[#FFFFFF99] text-[15px] leading-[22.5px] text-left lg:text-[20px] lg:leading-[30px]]`}
          >
            Some of my professional experiences across various roles.
          </p>
        </div>
        <div className="flex flex-row relative z-[100] lg:justify-between mt-[40px]">
          <div className="w-0.5 h-[940px] lg:h-[740px] bg-blue-950"></div>
          <div className={`flex flex-col space-y-[60px]`}>

            {/* EthSafari - Base Representative */}
            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]">
                  Advocate - Morph <span>-</span>&nbsp;
                  <span className="italic text-[#FFFFFF99]">August 2024</span>
                </h3>
                <p className={`text-[#fff] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}>
                  - Creating intermediate to advanced content (ideally technical & development). <br />
                  - Contributing at hackathons, and helping translate or offer feedback on content and events on Morph, Ethereum and Layer2
                </p>

              </div>
            </div>
            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]">
                  Developer Relations - NextBridge Africa <span>-</span>&nbsp;
                  <span className="italic text-[#FFFFFF99]">March 2024</span>
                </h3>
                <p className={`text-[#fff] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}>
                  Hosted our first web3Conf IRL in Enugu, Nigeria.
                  The event was sponsored by Viction & Chainlyzeai, we had over 150+ attendees and over 5+ speakers from different background in the web3 space.
                </p>

              </div>
            </div>
            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]">
                  Developer Relations - Codespace <span>-</span>&nbsp;
                  <span className="italic text-[#FFFFFF99]">October 2023</span>
                </h3>
                <p className={`text-[#fff] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}>
                  Transitioned my role at Codespace from a community manager to a Devrel.
                  As a DevRel for Codespace, i co-lead the just concluded Fusion Tech Fest Hackathon that was a partnership with Genztechies, which had over 500+ signups with sponsorship from companies like AWS,Tublian,Paystack,Jetbrain,Terraphix,Wix
                </p>

              </div>
            </div>
            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]">
                  Community Manager - Codespace <span>-</span>&nbsp;
                  <span className="italic text-[#FFFFFF99]">October 2022 - October 2023</span>
                </h3>

              </div>
            </div>



            {/* RESUME
            <Resume
              pdfUrl={resumeUrl}
              fileName="Elisha David.pdf"
              buttonText="Download Resume"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;