import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import FadeInSection from "../FadeInSection/FadeInSection";

const About = () => {
  return (
    <div className="w-full bg-background relative lg:py-20 max-lg:py-10 overflow-hidden">
      <div className="absolute right-[20%] bottom-[0%] w-[1px] h-[75%] bg-btnColor opacity-10 rotate-[45deg] line-animate hidden xl:block"></div>
      <div className='absolute top-20 left-0 lg:left-[5%] w-full lg:w-[40%] h-full bg-[url("/images/about-img.png")] bg-[length:50%] lg:bg-cover bg-top lg:bg-center opacity-[0.12] about-bg'></div>
      <div className="about-shadow absolute bottom-0 left-0 w-full h-[30%]"></div>
      <div className="about-shadow-rev absolute top-0 left-0 w-full h-[20%] xl:h-[25%]"></div>

      <div className="w-[50%] lg:w-[30%] h-full absolute top-0 right-0">
        <Image
          src={"/images/blue-right.png"}
          width={300}
          height={300}
          alt="blue_layer"
          className="w-full h-full"
        />
      </div>

      <div className="container flex flex-col justify-center items-center relative z-10">
        <FadeInSection>
          <div className="text-center max-w-[640px]">
            <h2 className="train-one text-[28px] md:text-[40px] xl:text-[46px] text-white opacity-80 uppercase mb-10 lg:mb-15">
              About Me
            </h2>
            <p className="max-w-[640px] text-textColor text-[16px] md:text-[21px] nunito-sans font-thin leading-[28px] md:leading-[32px] mb-[32px] sm:mb-[50px] text-left">
              Hi, I am a front-end developer with 5 years of professional
              experience, currently working at CAPITAIRE Consulting,
              Kochi, Kerala. I specialize in creating seamless{" "}
              <span className="text-btnColor">UI/UX designs</span> and
              converting design files into high-performance web applications
              using <span className="text-btnColor">React.js</span> and{" "}
              <span className="text-btnColor">Next.js</span>. With a strong
              foundation in front-end development and a keen eye for design also
              focusing on responsive layouts, clean code, and optimal user
              experience. I have successfully delivered{" "}
              <span className="text-btnColor">25+ projects</span> for clients
              across India and internationally, including regions like the UAE,
              UK, and USA.
            </p>
            <div className="flex justify-center">
              <Button />
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default About;
