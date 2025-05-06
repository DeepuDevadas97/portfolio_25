import React from "react";
import FadeInSection from "../FadeInSection/FadeInSection";
import Phone from "../../../public/icons/Phone";
import Link from "next/link";
import Mail from "../../../public/icons/Mail";
import Whatsapp from "../../../public/icons/Whatsapp";
import LinkedIn from "../../../public/icons/LinkedIn";
import Button from "../Button/Button";
import Image from "next/image";

const contactLinks = [
  {
    href: "tel:+918921565392",
    icon: <Phone />,
  },
  {
    href: "mailto:deepu.devadas1997@gmail.com",
    icon: <Mail />,
  },
  {
    href: "https://www.linkedin.com/in/deepuputhuvoth2019/",
    icon: <LinkedIn />,
  },
  {
    href: "https://wa.me/918921565392",
    icon: <Whatsapp />,
  },
];

const Contact = () => {
  return (
    <div className="w-full py-15 lg:py-20 bg-[#161616]">
      <div className="container">
        <div className="relative">
          <FadeInSection>
            <div className="lg:flex lg:justify-between lg:items-start mb-12 md:mb-20 ">
              <h2 className="nunito-sans font-medium lg:font-bold text-[24px] sm:text-[28px] md:text-[40px] xl:text-[46px] text-white opacity-80 max-lg:text-center max-w-[560px] max-lg:mx-auto lg:max-w-[560px] xl:max-w-[640px] leading-[115%]">
                Contact me for the service you want to use
              </h2>
              <div className="max-lg:flex max-lg:justify-center mt-6 md:mt-7 lg:mt-2">
                <Button />
              </div>
            </div>
            <nav>
              <ul className="flex items-center max-lg:justify-center gap-x-3 lg:gap-x-6">
                {contactLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      className="w-[48px] h-[48px] lg:w-[60px] lg:h-[60px] bg-black/40 rounded-full flex justify-center items-center duration-300 hover:brightness-150"
                      href={link.href}
                      target="_blank"
                    >
                      {link.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </FadeInSection>
          <div className="w-[48px] sm:w-[70px] absolute left-0 top-[-60%] animate-pulse duration-500  opacity-75 max-lg:hidden">
            <Image
              src={"/images/banner3.svg"}
              width={70}
              height={22}
              alt="banner_vector"
              className="w-full h-fit"
            />
          </div>
          <div className="w-[60px] sm:w-[100px] absolute right-0 bottom-[-15%] custom-bounce opacity-50 max-md:hidden">
            <Image
              src={"/images/banner1.svg"}
              width={100}
              height={114}
              alt="banner_vector"
              className="w-full h-fit rotate-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
