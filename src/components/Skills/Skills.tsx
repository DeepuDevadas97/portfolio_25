import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import Html from "../../../public/icons/Html";
import CssLogo from "../../../public/icons/CssLogo";
import TailwindLogo from "../../../public/icons/TailwindLogo";
import BootstrapLogo from "../../../public/icons/BootstrapLogo";
import JsLogo from "../../../public/icons/JsLogo";
import ReactLogo from "../../../public/icons/ReactLogo";
import NextLogo from "../../../public/icons/NextLogo";
import ReactNative from "../../../public/icons/ReactNative";
import FigmaLogo from "../../../public/icons/FigmaLogo";
import XdLogo from "../../../public/icons/XdLogo";
import WordpressLogo from "../../../public/icons/WordpressLogo";
import GitLogo from "../../../public/icons/GitLogo";
import Image from "next/image";
import FadeInSection from "../FadeInSection/FadeInSection";

const skillsData = [
  {
    id: 1,
    title: "HTML",
    icon: <Html />,
    percentage: "95%",
    trailColor: "#F040371A",
    thumbColor: "#F04037",
    description:
      "The foundation of web development, used to structure content on the web.",
  },
  {
    id: 2,
    title: "CSS",
    icon: <CssLogo />,
    percentage: "95%",
    trailColor: "#33A9DD1A",
    thumbColor: "#33A9DD",
    description:
      "Used to style and visually design websites for a better user experience.",
  },
  {
    id: 3,
    title: "Bootstrap",
    icon: <BootstrapLogo />,
    percentage: "90%",
    trailColor: "#563D7C3A",
    thumbColor: "#563D7C",
    description:
      "A popular CSS framework for building responsive, mobile-first websites easily.",
  },

  {
    id: 4,
    title: "Tailwind",
    icon: <TailwindLogo />,
    percentage: "90%",
    trailColor: "#44A8B31A",
    thumbColor: "#44A8B3",
    description:
      "A utility-first CSS framework for building modern, responsive designs quickly.",
  },
  {
    id: 5,
    title: "Javascript",
    icon: <JsLogo />,
    percentage: "85%",
    trailColor: "#F7DF1E1A",
    thumbColor: "#F7DF1E",
    description: "Adds interactivity and dynamic behavior to websites.",
  },

  {
    id: 6,
    title: "React JS",
    icon: <ReactLogo />,
    percentage: "85%",
    trailColor: "#06C1E01A",
    thumbColor: "#06C1E0",
    description:
      "A JavaScript library for building fast and interactive user interfaces.",
  },
  {
    id: 7,
    title: "Next JS",
    icon: <NextLogo />,
    percentage: "85%",
    trailColor: "#FFFFFF1A",
    thumbColor: "#FFFFFF",
    description:
      "A React framework for building fast, SEO-friendly web applications. I done this website using nextjs.",
  },
  {
    id: 8,
    title: "React Native",
    icon: <ReactNative />,
    percentage: "50%",
    trailColor: "#007ACC1A",
    thumbColor: "#007ACC",
    description:
      "A framework for building mobile apps using React and native platform capabilities.",
  },
  {
    id: 9,
    title: "Figma",
    icon: <FigmaLogo />,
    percentage: "90%",
    trailColor: "#0ACF831A",
    thumbColor: "#0ACF83",
    description:
      "A collaborative design tool for creating interfaces and prototypes.",
  },
  {
    id: 10,
    title: "Adobe XD",
    icon: <XdLogo />,
    percentage: "80%",
    trailColor: "#FF61F61A",
    thumbColor: "#FF61F6",
    description:
      "A design and prototyping tool for creating user experiences and interfaces.",
  },
  {
    id: 11,
    title: "WordPress",
    icon: <WordpressLogo />,
    percentage: "75%",
    trailColor: "#00759D1A",
    thumbColor: "#00759D",
    description:
      "A popular content management system for building and managing websites easily.",
  },
  {
    id: 12,
    title: "Git",
    icon: <GitLogo />,
    percentage: "85%",
    trailColor: "#758CA31A",
    thumbColor: "#758CA3",
    description:
      "A version control system for tracking code changes and collaborating on software development.",
  },
];

const Skills = () => {
  return (
    <div className="w-full min-h-screen bg-background py-10 md:py-20 overflow-hidden relative">
      <div className="container relative z-10">
        <FadeInSection>
          <h2 className="train-one text-[28px] md:text-[40px] xl:text-[46px] text-white opacity-80 uppercase mb-10 lg:mb-20 text-center">
            What I Use
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-15">
            {skillsData.map((skill) => (
              <div
                key={skill.id}
                className="max-w-[248px] sm:max-w-[384px] 2xl:max-w-[420px] text-center space-y-4 mx-auto"
              >
                <div
                  className="w-[68px] h-[68px] rounded-full flex justify-center items-center mx-auto"
                  style={{ backgroundColor: skill.trailColor }}
                >
                  {skill.icon}
                </div>
                <h4 className="text-white text-[28px] leading-[28px] font-semibold">
                  {skill.title}
                </h4>
                <div className="flex justify-center">
                  <ProgressBar
                    percentage={skill.percentage}
                    trailColor={skill.trailColor}
                    thumbColor={skill.thumbColor}
                  />
                </div>
                <p className="text-textColor text-[16px] md:text-[18px] nunito-sans font-thin leading-[28px] max-w-[280px] mx-auto">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>

      <div className="absolute top-0 xl:top-[-8%] left-0 w-[80%] sm:w-[50%] xl:w-[30%] h-fit">
        <Image
          src={"/images/skills-blue.webp"}
          alt="skills_layer"
          width={300}
          height={300}
          className="w-full h-full"
        />
      </div>
      <div className="absolute w-[100%] h-fit top-[20%] sm:top-[-10%] right-0">
        <Image
          src={"/images/skills-red.webp"}
          alt="skills_layer"
          width={300}
          height={300}
          className="w-full h-full"
        />
      </div>
      <div className="w-[60px] sm:w-[100px] absolute left-0 sm:left-[10.5%] top-[4%] sm:top-0 custom-bounce">
        <Image
          src={"/images/banner1.svg"}
          width={100}
          height={114}
          alt="banner_vector"
          className="w-full h-fit"
        />
      </div>
      <div className="w-[32px] sm:w-[40px] h-[40px] absolute right-3 md:right-[10%] top-[10%] animate-pulse duration-500">
        <Image
          src={"/images/add.svg"}
          width={40}
          height={40}
          alt="banner_vector"
          className="w-full h-full rotate-12"
        />
      </div>
      <div className="w-[32px] sm:w-[40px] h-[40px] absolute left-3 md:left-[5%] bottom-[1%] animate-pulse duration-500">
        <Image
          src={"/images/add.svg"}
          width={40}
          height={40}
          alt="banner_vector"
          className="w-full h-full rotate-12"
        />
      </div>
      <div className="about-shadow absolute bottom-0 left-0 w-full h-[10%] hidden xl:block"></div>
    </div>
  );
};

export default Skills;
