import { motion } from "framer-motion";
import { Copyright, FbIcon, IgIcon, InIcon, TwIcon } from "./svgs";

const Footer = () => {
  return (
    <section className="mx-[30px] mt-[60px] pb-[50px] lg:mx-[76px] lg:mt-[150px]">
      {/* line */}
      <div className="lg:max-w-[13000px] lg:mx-[71px] h-[2px] mt-[63.37px] bg-[#fff]"></div>
      <div className="mt-[63px] flex flex-col md:flex md:flex-row justify-between items-center ">
        <div className="flex items-center gap-[10px]">
          <span>
            <Copyright
              className={`w-[20px] h-[20px] md:w-[25px] md:h-[25px]`}
            />
          </span>
          <p className={`text-[#FFFFFF99] md:text-xl text-lg font-medium`}>
            $DEFI<span> 2049</span>
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
              fill={`#FFFFFF99`}
              className={`w-[30px] h-[30px] rounded-full border-[#FFFFFF99] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-[#0a1c20]`}
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
              className={`w-[30px] h-[30px] rounded-full border-[#FFFFFF99] border-solid border-[2px] p-1  transition-all duration-500 hover:bg-[#0a1c20]`}

              fill="#FFFFFF99"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>

          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tobithealpha"
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.99 }}
            className={`h-auto w-auto`}
          >
            <InIcon
              fill={`#FFFFFF99`}
              className={`w-[30px] h-[30px] rounded-full border-[#FFFFFF99] border-solid border-[2px] p-0.5  transition-all duration-700 hover:bg-[#0a1c20]`}
            />
          </motion.a>
        </div>
      </div>


    </section>
  );
};

export default Footer;
