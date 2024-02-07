import { useState} from "react";
import { header } from "../data";
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const { logo, btnText } = header;
  return (
    <header className="fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto">
        <div className="lg:py-12 py-5 flex items-center justify-between">
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
