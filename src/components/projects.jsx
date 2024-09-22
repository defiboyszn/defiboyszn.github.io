import { Arrow } from "./svgs";
import { motion } from "framer-motion";
import { projectData } from "../data/data";

const Projects = () => {
  return (
    <section className={`mx-[30px] mt-[60px] lg:mx-[76px] lg:mt-[152px]`}>
      <div>
        <div>
          <h2
            className={`flex items-center font-clashbold text-[20px] text-white md:text-[60px] md:font-semibold md:leading-[73.8px]`}
          >
            Showoff!
            <span className={`animate-bounce`}>👨‍🍳</span>
          </h2>
          <p
            className={`font-medium text-[#FFFFFF99] text-[15px] leading-[22.5px] lg:text-[18px] lg:leading-[27px]`}
          >
            Projects I{"'"}ve worked on
          </p>
        </div>

        <div
          // className={`mt-[46px] flex flex-wrap gap-[13px] lg:mt-[67px] lg:gap-[26px] lg:justify-start`}
          className="grid grid-cols-1 gap-[13px] mt-[46px] md:grid-col-2 md:gap-[18px] xl:grid-cols-3 xl:gap-[26px] xl:mt-[67px]"
        >
          {projectData.map((project, index) => (
            <div
              key={index}
              className={` max-w-md rounded-t-md p-3 relative overflow-hidden after:content-[''] after:absolute after:bg-zinc-100 after:w-0 after:h-0.5 after:bottom-0 after:right-0 after:transition-all after:duration-300 after:hover:left-0 after:hover:w-full space-y-3 hover:shadow-2xl hover:shadow-emerald-400/20 group bg-[#4E11C9]/50 flex flex-col gap-[25px] md:gap-[29px] px-[27px] py-[40px] justify-center w-[327px] h-[322px] md:w-[424px] md:h-[373px] md:px-[32px] md:py-[55px]`}
            >
              <h5
                className={`font-medium font-clash text-[20px] leading-[24.6px] md:text-[25px] md:leading-[30.75px]`}
              >
                {project.name}
              </h5>
              <p
                className={`text-[#FFFFFF99] text-[15px] font-medium md:text-[18px] md:leading-[27px]`}
              >
                {project.lang}
              </p>
              <small
                className={`text-[#FFFFFF99] font-medium max-w-[294px] text-[15px] leading-[22.5px] md:max-w-[340px] md:text-[18px] md:leading-[27px]`}
              >
                {project.desc}
              </small>
              <div className="w-[68px]">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: 0.9 }}
                    className="flex items-center space-x-2"
                  >
                    <span>
                      <Arrow
                        className={`w-[20px] h-[20px] md:w-[18px] md:h-[18px]`}
                      />
                    </span>
                    <p
                      className={`text-[15px] leading-[22.5px] md:text-[18px] md:leading-[27px] font-medium text-[#FFFFFF99]`}
                    >
                      view
                    </p>
                  </motion.div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
