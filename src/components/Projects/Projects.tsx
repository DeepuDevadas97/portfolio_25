import Image from "next/image";
import Link from "next/link";
import React from "react";
import FadeInSection from "../FadeInSection/FadeInSection";
import { ViewIcon } from "../../../public/icons/ViewIcon";

const projectsNew = [
  {
    image: "/images/brackenberry.png",
    alt: "brackenberry",
    link: "https://www.brackenberry.com/",
  },
  {
    image: "/images/leet91.png",
    alt: "leet9",
    link: "https://leet9.com/",
  },
  {
    image: "/images/alice-care1.png",
    alt: "alice-care",
    link: "https://www.alice.care/",
  },
];

const projectsOld = [
  {
    image: "/images/eplimo1.png",
    alt: "eplimo",
    link: "https://www.eplimo.ae/",
  },
  {
    image: "/images/agent-app1.png",
    alt: "agent-app",
    link: "https://play.google.com/store/apps/details?id=com.edgeprop.agent&hl=en",
  },
  {
    image: "/images/aim-img1.png",
    alt: "aim-img",
    link: "https://aimksa.com/",
  },
];

const Projects = () => {
  return (
    <div className="w-full bg-background pt-10 pb-15 lg:pt-20 lg:pb-35 relative">
      <div className="container relative z-10">
        <FadeInSection>
          <div className="relative">
            <h2 className="train-one text-[28px] md:text-[40px] xl:text-[46px] text-white opacity-80 uppercase mb-10 md:mb-20 max-lg:text-center">
              My Recent Work
            </h2>
            <div className="w-[32px] sm:w-[42px] absolute right-[1%] bottom-[-35%] custom-spin">
              <Image
                src={"/images/banner2.svg"}
                width={42}
                height={49}
                alt="banner_vector"
                className="w-full h-fit"
              />
            </div>
          </div>

          {/* <div className="min-h-[300px]">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="project-wrapper w-full lg:relative">
              <div className="group relative lg:top-0 lg:left-0 w-full h-[286px] rounded-[14px] p-6 duration-500 bg-cardBg hover:bg-cardHover card-wrap overflow-hidden">
                <Image
                  src={"/images/brackenberry.png"}
                  width={300}
                  height={286}
                  alt="brackenberry"
                  className="w-full h-full rounded-xl duration-500 group-hover:brightness-75"
                />
                <Link
                  href={"https://www.brackenberry.com/"}
                  target="_blank"
                  className="w-[80px] h-[80px] rounded-full bg-black/80 flex items-center justify-center text-white
                font-thin nunito-sans visit-site text-[16px] xl:text-[18px] cursor-pointer border border-white/30 ease-in-out"
                >
                  Visit
                </Link>
              </div>
            </div>

            <div className="project-wrapper w-full lg:relative">
              <div className="group relative lg:top-15 lg:left-0 w-full h-[286px] rounded-[14px] p-6 duration-500 bg-cardBg hover:bg-cardHover card-wrap overflow-hidden">
                <Image
                  src={"/images/leet91.png"}
                  width={300}
                  height={286}
                  alt="leet9"
                  className="w-full h-full rounded-xl duration-500 group-hover:brightness-75"
                />
                <Link
                  href={"https://leet9.com/"}
                  target="_blank"
                  className="w-[80px] h-[80px] rounded-full bg-black/80 flex items-center justify-center text-white
                font-thin nunito-sans visit-site text-[16px] xl:text-[18px] cursor-pointer border border-white/30 ease-in-out"
                >
                  Visit
                </Link>
              </div>
            </div>

            <div className="project-wrapper w-full lg:relative">
              <div className="group relative lg:top-30 lg:left-0 w-full h-[286px] rounded-[14px] p-6 duration-500 bg-cardBg hover:bg-cardHover card-wrap overflow-hidden">
                <Image
                  src={"/images/alice-care1.png"}
                  width={300}
                  height={286}
                  alt="alice-care"
                  className="w-full h-full rounded-xl duration-500 group-hover:brightness-75"
                />
                <Link
                  href={"https://www.alice.care/"}
                  target="_blank"
                  className="w-[80px] h-[80px] rounded-full bg-black/80 flex items-center justify-center text-white
                font-thin nunito-sans visit-site text-[16px] xl:text-[18px] cursor-pointer border border-white/30 ease-in-out"
                >
                  Visit
                </Link>
              </div>
            </div>
          </div>
        </div> */}

          <div className="min-h-[300px]">
            <div className="grid lg:grid-cols-3 gap-8">
              {projectsNew.map((project, index) => (
                <div
                  key={index}
                  className="project-wrapper w-full max-lg:max-w-[656px] max-lg:mx-auto lg:relative"
                >
                  <div
                    className={`group relative w-full h-[430px] lg:h-[264px] xl:h-[286px] rounded-[14px] p-4 sm:p-6 duration-500 bg-cardBg hover:bg-cardHover card-wrap overflow-hidden ${
                      index === 1
                        ? "lg:top-15"
                        : index === 2
                        ? "lg:top-30"
                        : "lg:top-0"
                    }`}
                  >
                    <Image
                      src={project.image}
                      width={300}
                      height={286}
                      alt={project.alt}
                      className="w-full h-full rounded-xl duration-500 group-hover:brightness-75"
                    />
                    <Link
                      href={project.link}
                      target="_blank"
                      className="w-[80px] h-[80px] rounded-full bg-black/80 flex items-center justify-center text-white font-thin nunito-sans visit-site text-[16px] sm:text-[18px] cursor-pointer border border-white/30 ease-in-out"
                    >
                      <span className="animate-pulse"> Visit</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="min-h-[300px] mt-8 lg:mt-20 lg:mb-15">
            <div className="grid lg:grid-cols-3 gap-8">
              {projectsOld.map((project, index) => (
                <div
                  key={index}
                  className="project-wrapper w-full max-lg:max-w-[656px] max-lg:mx-auto lg:relative"
                >
                  <div
                    className={`group relative w-full h-[430px] lg:h-[264px] xl:h-[286px] rounded-[14px] p-4 sm:p-6 duration-500 bg-cardBg hover:bg-cardHover card-wrap overflow-hidden ${
                      index === 1
                        ? "lg:top-15"
                        : index === 2
                        ? "lg:top-30"
                        : "lg:top-0"
                    }`}
                  >
                    <Image
                      src={project.image}
                      width={300}
                      height={286}
                      alt={project.alt}
                      className="w-full h-full rounded-xl duration-500 group-hover:brightness-75"
                    />
                    <Link
                      href={project.link}
                      target="_blank"
                      className="w-[80px] h-[80px] rounded-full bg-black/80 flex items-center justify-center text-white font-thin nunito-sans visit-site text-[16px] sm:text-[18px] cursor-pointer border border-white/30 ease-in-out"
                    >
                      <span className="animate-pulse"> Visit</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
      <div className="w-[50%] lg:w-[30%] h-full absolute top-0 right-0">
        <Image
          src={"/images/blue-right.png"}
          width={300}
          height={300}
          alt="blue_layer"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Projects;
