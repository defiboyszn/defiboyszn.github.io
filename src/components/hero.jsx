import { motion } from "framer-motion";
import { FbIcon, IgIcon, InIcon, TwIcon } from "./svgs";

const Hero = () => {
  return (
    <>
      <section className="mx-auto px-[38px] pt-[100px] md:px-[26px] lg:pt-[120px] lg:pl-[80px] lg:pr-[40px]">
        <div className="flex flex-col items-start flex-1 md:flex md:flex-row md:gap-10 md:items-center lg:flex lg:flex-row lg:items-center lg:space-x-12 lg:justify-between">
          <div>
            <div className={`gradientText`}>
              <h1
              // className={`font-clashbold font-semibold text-[40px] leading-[36.9px] text-[#CFFAFF] md:leading-[4 5px] md:text-[35px] md:max-w-max lg:leading-[73.8px] lg:max-w-[580px] lg:text-[60px] `}
              >
                Developer Relations & Advocate<span>.</span>
              </h1>
            </div>
            <div
              id="intro"
              className="text-[#F0FEFF] font-pop flex-shrink-0 text-[.9em] leading-[1.5] font-medium mt-[40px] flex flex-col gap-8 md:flex md:flex-col md:gap-[20px] md:mt-[45px] lg:flex lg:flex-row lg:items-start lg:gap-[12px]"
            >
              <p className={`max-w-[450px]`}>
                With 5+ years in development and 2+ years in community management,
                Defiboy excels in building Web2 to Web3 bridges and
                empowering developers through engaging content and advocacy.
                <br />
                Highly skilled at creating developer-first experiences,
                building scalable solutions, and enhancing developer ecosystems
                through impactful collaboration and support.
              </p>
            </div>
            <div className="mt-[35px] md:mt-[65px] flex justify-start items-center  gap-[26px] md:gap-[40px]">
              <motion.a
                href="https://web.facebook.com/defiboyszn"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <FbIcon
                  fill={`#fff`}
                  className={`w-[30px] h-[30px] rounded-full border-[#fff] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-white`}
                />
              </motion.a>
              <motion.a
                href="https://twitter.com/defiboyszn"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                  className={`w-[30px] h-[30px] rounded-full border-[#fff] border-solid border-[2px] p-0.5  transition-all duration-700 hover:bg-white`}

                  fill="#FFF"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>

              </motion.a>
              {/* <motion.a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <IgIcon
                  fill={`#fff`}
                  className={`w-[30px] h-[30px] rounded-full border-[#fff] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-white`}
                />
              </motion.a> */}
              <motion.a
                href="https://www.linkedin.com/in/tobithealpha"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <InIcon
                  fill={`#fff`}
                  className={`w-[30px] h-[30px] rounded-full border-[#fff] border-solid border-[2px] p-0.5  transition-all duration-700 hover:bg-white`}
                />
              </motion.a>
            </div>
          </div>
          <div className="mt-[2.5rem] group">
            <div className="relative flex flex-col justify-center w-max">
              <div className={`w-full `}>
                <div className="absolute w-full h-full bottom-3 z-[9999] rounded group-hover:transition group-hover:delay-100 group-hover:ease-linear group-hover:duration-100 group-hover:rotate-6 right-4 md:bottom-5 md:right-6 lg:bottom-10 lg:right-12 object-cover"></div>
                <img
                  src="/images/defiboy.jpg"
                  alt="a king image"
                  className="absolute w-full h-full bottom-3 z-[99] rounded group-hover:transition group-hover:delay-100 group-hover:ease-linear group-hover:duration-100 group-hover:rotate-6 right-4 md:bottom-5 md:right-6 lg:bottom-10 lg:right-12 object-cover"
                  draggable={false}
                  loading="lazy"
                />
              </div>
              <motion.div
                className={`shrink-0 w-[300px] h-[300px] lg:min-w-[400px] group-hover:transition group-hover:delay-100 group-hover:ease-linear group-hover:duration-100 group-hover:-rotate-6 lg:min-h-[400px] rounded border-[3px] border-[#fff]`}
              ></motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
