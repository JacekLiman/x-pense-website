import { useState, useEffect } from "react";
import { header } from "../data";
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const { logo, btnText } = header;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 10 ? setIsScrolling(true) : setIsScrolling(false);
    });
  }, []);
  return (
    <header className={`fixed top-0 left-0 transition-all duration-500 w-full z-10 bg-white ${ isScrolling ? "lg:py-4 py-3 shadow-2xl":"lg:py-8 py-5" } `}>
      <div className="container mx-auto">
        <div className=" flex items-center justify-between">
          <div>
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="hidden lg:block">
            <Nav />
          </div>

          <button className="btn btn-sm btn-outline hidden lg:block">
            {btnText}
          </button>

          <button
            onClick={() => setMobileNavActive((prev) => !prev)}
            className="lg:hidden"
          >
            {mobileNavActive ? (
              <HiOutlineX className="text-3xl text-accent" />
            ) : (
              <HiMenuAlt4 className="text-3xl text-accent" />
            )}
          </button>
        </div>
        <div
          className={` ${
            mobileNavActive ? "-translate-x-0" : "-translate-x-full"
          } lg:hidden fixed top-0 left-0 w-[60vw] h-screen transition-all  `}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
