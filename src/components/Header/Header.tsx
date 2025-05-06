// "use client";

// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import Hamburger from "../../../public/icons/Hamburger";

// const navLinks = [
//   { name: "Home", href: "#home", active: true },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "My Projects", href: "#projects" },
// ];

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 md:py-6 transition-colors duration-500 ${
//         isScrolled || menuOpen
//           ? "bg-background outline outline-[#ffffff0f]"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container max-md:!px-0">
//         <nav>
//           <div className="flex flex-wrap items-center justify-between mx-auto">
//             <Link
//               href="/"
//               className="flex items-center space-x-3 rtl:space-x-reverse max-md:my-4 max-md:ml-4"
//             >
//               <img
//                 src="https://flowbite.com/docs/images/logo.svg"
//                 className="h-8"
//                 alt="Flowbite Logo"
//               />
//               <span className="text-white text-[20px] train-one">
//                 Portfolio
//               </span>
//             </Link>

//             <button
//               type="button"
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="inline-flex items-center p-1 justify-center text-sm text-gray-500 rounded-lg md:hidden max-md:my-4 max-md:mr-4"
//               aria-expanded={menuOpen}
//               aria-controls="navbar-default"
//             >
//               <span className="sr-only">Open main menu</span>
//               <div
//                 className={`duration-300 w-8 h-8 ${menuOpen && "rotate-x-180"}`}
//               >
//                 <Hamburger />
//               </div>
//             </button>

//             <div
//               className={`
//     transition-all duration-500 ease-in-out w-full md:block md:w-auto
//     ${
//       menuOpen
//         ? "max-md:max-h-[1000px] max-md:opacity-100"
//         : "max-md:max-h-0 max-md:opacity-0 max-md:pointer-events-none"
//     }
//     w-full
//   `}
//               id="navbar-default"
//             >
//               <ul className="flex flex-col max-md:items-center px-4 py-10 md:p-0 md:flex-row space-y-8 md:space-y-0 md:space-x-10 rtl:space-x-reverse md:mt-0 md:border-0 bg-background md:bg-transparent">
//                 {navLinks.map(({ name, href, active }) => (
//                   <li key={name}>
//                     {/* <Link
//                       href={href}
//                       className={`block text-[18px] font-normal nunito-sans ${
//                         active ? "text-btnColor" : "text-textColor"
//                       }`}
//                     >
//                       {name}
//                     </Link> */}
//                     <Link
//                       href={href}
//                       onClick={() => setMenuOpen(false)}
//                       className={`block text-[18px] font-normal nunito-sans ${
//                         active ? "text-btnColor" : "text-textColor"
//                       }`}
//                     >
//                       {name}
//                     </Link>
//                   </li>
//                 ))}
//                 <li>
//                   <Link
//                     href={"#contact"}
//                     className="text-white text-[16px] nunito-sans font-normal py-2 px-8 border border-white rounded-sm hover:brightness-75 duration-300 block md:hidden w-fit"
//                   >
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div className="hidden md:block">
//               <Link
//                 href={"#contact"}
//                 className="text-white text-[16px] nunito-sans font-normal py-2 px-6 border border-white rounded-sm hover:brightness-75 duration-300"
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Hamburger from "../../../public/icons/Hamburger";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "My Projects", href: "#projects" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        threshold: 0.3, // much more forgiving
        rootMargin: "0px 0px -30% 0px", // triggers earlier when section appears
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 md:py-6 transition-colors duration-500 ${
        isScrolled || menuOpen
          ? "bg-background outline outline-[#ffffff0f]"
          : "bg-transparent"
      }`}
    >
      <div className="container max-md:!px-0">
        <nav>
          <div className="flex flex-wrap items-center justify-between mx-auto">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse max-md:my-4 max-md:ml-4"
            >
              <div className="w-fit h-8">
                <Image
                  src={"/images/logo.svg"}
                  alt="logo_img"
                  width={32}
                  height={32}
                  className="w-full h-full"
                />
              </div>
              <span className="text-white text-[20px] train-one">
                Portfolio
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center p-1 justify-center text-sm text-gray-500 rounded-lg md:hidden max-md:my-4 max-md:mr-4"
              aria-expanded={menuOpen}
              aria-controls="navbar-default"
            >
              <span className="sr-only">Open main menu</span>
              <div
                className={`duration-300 w-8 h-8 ${menuOpen && "rotate-x-180"}`}
              >
                <Hamburger />
              </div>
            </button>

            <div
              className={`
                transition-all duration-500 ease-in-out w-full md:block md:w-auto
                ${
                  menuOpen
                    ? "max-md:max-h-[1000px] max-md:opacity-100"
                    : "max-md:max-h-0 max-md:opacity-0 max-md:pointer-events-none"
                }
              `}
              id="navbar-default"
            >
              <ul className="flex flex-col max-md:items-center px-4 py-10 md:p-0 md:flex-row space-y-8 md:space-y-0 md:gap-x-10 rtl:space-x-reverse md:mt-0 md:border-0 bg-background md:bg-transparent">
                {navLinks.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      onClick={() => {
                        setMenuOpen(false);
                        setActiveSection(href);
                      }}
                      className={`block text-[22px] md:text-[18px] font-thin md:font-normal nunito-sans transition-colors duration-300 ${
                        activeSection === href
                          ? "text-logoBg active-dot"
                          : "text-textColor"
                      }`}
                    >
                      {name}
                    </Link>
                  </li>
                ))}

                <li className="block md:hidden max-md:mt-4 max-md:mb-5">
                  <Link
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="text-white text-[18px] font-thin nunito-sans py-2 px-8 border border-white rounded-sm hover:brightness-75 duration-300 w-fit"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden md:block">
              <Link
                href="#contact"
                className="text-white text-[16px] nunito-sans font-normal py-2 px-6 border border-white rounded-sm hover:brightness-75 duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
