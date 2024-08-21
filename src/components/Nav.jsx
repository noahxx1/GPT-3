import { headerLogo } from "../assets/images";
import { useState } from "react";
import { hamburger } from "../assets/icon";
import { navLinks } from "../constants";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((priv) => !priv);
  };

  return (
    <header className="mt-[55px] padding-x absolute w-full z-10">
      <nav className="flex justify-between gap-16 max-container font-manrope w-full items-center ">
        <a className="" href="/">
          <img src={headerLogo} alt="logo" width={62.56} height={16.02} />
        </a>
        <ul
          className={`flex-1 flex justify-start items-center gap-8 max-lg:flex-col 
          max-lg:items-start max-lg:pl-5 max-lg:bg-[#052D56] rounded max-lg:absolute 
          max-lg:top-full max-lg:left-0 max-lg:w-full max-lg:p-4 max-lg:shadow-lg ${
            menuOpen ? "max-lg:flex" : "max-lg:hidden"
          }`}
        >
          {navLinks.map((item) => (
            <li className="text-white " key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 items-center max-lg:hidden wide:mr-24">
          <a className="text-white" href="/">
            Sign In
          </a>
          <button className="bg-coral-red w-[152px] h-[52px] text-white rounded">
            Sign Up
          </button>
        </div>
        <div
          className="hidden max-lg:block cursor-pointer text-white"
          onClick={toggleMenu}
        >
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
