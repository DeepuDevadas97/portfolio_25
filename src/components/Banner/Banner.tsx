// import Image from "next/image";
// import React from "react";

// const Banner = () => {
//   return (
//     <div className="w-full h-screen bg-[#452c63] relative">
//       <div className="absolute w-full h-[557px] bottom-[-30px] right-0">
//         <Image
//           src={"/images/banner-layer.webp"}
//           width={1000}
//           height={557}
//           alt="banner-layer"
//           className="w-full h-full"
//         />
//       </div>
//       <div className="container">
//         <div className="grid md:grid-cols-2">
//           <div className="flex justify-center items-center">
//             <h1 className="train-one text-[59px] text-white">HELLO I AM</h1>
//           </div>
//           <div className="h-screen flex items-center justify-center">
//             <div className="w-[440px] h-[440px] bg-[url('/images/profile-layer.webp')] bg-cover bg-center flex items-center justify-center mr-15 mt-10">
//               <div className="w-[70%] h-[70%] rounded-full bg-[url('/images/profile-img.webp')] bg-cover bg-center border-[8px] border-[#452c63] relative"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import FadeInSection from "../FadeInSection/FadeInSection";

const Banner = () => {
  return (
    <div className="banner-section w-full min-h-screen relative overflow-hidden pt-20 flex items-center">
      <div className="container relative z-[1]">
        <div className="flex flex-col-reverse justify-end max-lg:py-10 max-lg:gap-y-12 lg:grid lg:grid-cols-2">
          <div className="flex items-center">
            <FadeInSection>
              <h2 className="train-one text-[21px] md:text-[40px] xl:text-[46px] text-white opacity-80 max-sm:text-center">
                HELLO, I AM
              </h2>
              <h1 className="text-[34px] md:text-[60px] xl:text-[70px] text-white inter-bold leading-[42px] md:leading-[60px] xl:leading-[70px] uppercase mt-3 sm:mt-4 max-sm:text-center">
                Deepu Puthuvoth
              </h1>
              <p className="max-w-[640px] mt-3 sm:mt-4 text-textColor text-[16px] md:text-[21px] nunito-sans font-thin leading-[28px] md:leading-[32px] mb-[32px] sm:mb-[50px] max-sm:text-center">
                {" "}
                An innovative Front-end Developer with around 4 years of
                experience. I have serious passion for UI effects, animations
                and creating intuitive, dynamic user experiences...
              </p>
              <div className="max-sm:flex max-sm:justify-center">
                <Button />
              </div>
            </FadeInSection>
          </div>
          <div className="flex items-center justify-center relative">
            <div className="profile-wrapper w-[250px] sm:w-[300px] lg:w-[360px] lg:h-[377px]">
              <Image
                src={"/images/profile-img.webp"}
                width={360}
                height={360}
                className="w-full h-full opacity-90"
                alt="deepu_profile_img"
              />
            </div>

            <div className="w-[48px] sm:w-[70px] absolute left-[4%] top-[5%] animate-pulse duration-500  max-lg:hidden">
              <Image
                src={"/images/banner3.svg"}
                width={70}
                height={22}
                alt="banner_vector"
                className="w-full h-fit"
              />
            </div>

            <div className="w-[32px] sm:w-[42px] absolute right-[1%] top-0 custom-spin">
              <Image
                src={"/images/banner2.svg"}
                width={42}
                height={49}
                alt="banner_vector"
                className="w-full h-fit"
              />
            </div>
            <div className="w-[60px] sm:w-[100px] absolute left-[-2%] bottom-0 custom-bounce">
              <Image
                src={"/images/banner1.svg"}
                width={100}
                height={114}
                alt="banner_vector"
                className="w-full h-fit  rotate-90"
              />
            </div>
            <div className="w-[32px] sm:w-[40px] h-[40px] absolute right-[1%] bottom-[-5%] animate-pulse duration-500 max-lg:hidden">
              <Image
                src={"/images/add.svg"}
                width={40}
                height={40}
                alt="banner_vector"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-[60%] h-[50%] md:h-full absolute left-0 top-0 z-0">
        <Image
          src={"/images/banner-layer1.webp"}
          alt="banner_layer"
          width={300}
          height={300}
          className="w-full h-full"
        />
      </div>
      <div className="md:w-[62%] h-[50%] md:h-full absolute right-0 bottom-0">
        <Image
          src={"/images/banner-layer2.webp"}
          alt="banner_layer"
          width={300}
          height={300}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Banner;
