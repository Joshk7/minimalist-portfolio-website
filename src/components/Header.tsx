import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import hamburger from "../assets/icons/hamburger.svg";
import close from "../assets/icons/close.svg";
import Dialog from "./Dialog";

const navClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm public-sans p-1 tracking-[0.165em] uppercase hover:text-blue-500 ${isActive ? "text-blue-500" : "text-slate-950"}`;

const mobileNavClass = ({ isActive }: { isActive: boolean }) =>
  `block w-full text-center p-1 public-sans uppercase text-xs tracking-[0.165em] ${isActive ? "text-blue-500" : "text-white"}`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDialogElement>(null);

  const handleOpenMenu = () => {
    if (menuRef.current) {
      setIsMenuOpen(true);
      menuRef.current.show();
    }
  };

  const handleCloseMenu = () => {
    if (menuRef.current) {
      setIsMenuOpen(false);
      menuRef.current.close();
    }
  };

  return (
    <header className="p-4 fixed z-15 md:p-8 bg-white w-full">
      <nav
        aria-label="Primary"
        className="max-w-277.5 mx-auto flex justify-between align-center items-center"
      >
        {/* <img src={logo} alt="" className="block" /> */}
        <NavLink to="/" end className="momo-signature hover:text-blue-500 p-1">
          Joshua Kahlbaugh
        </NavLink>
        <button
          onClick={isMenuOpen ? handleCloseMenu : handleOpenMenu}
          aria-expanded={isMenuOpen}
          aria-controls="menu"
          className="cursor-pointer flex justify-center items-center md:hidden min-w-8 min-h-8 hover:opacity-50"
        >
          <img
            src={isMenuOpen ? close : hamburger}
            alt=""
            className="block"
          />
        </button>
        <ul id="menu" className="hidden md:flex gap-10">
          <li className="flex items-center">
            <NavLink to="/" end className={navClass}>
              About
            </NavLink>
          </li>
          {/* <li className="flex items-center">
            <NavLink to="/projects" className={navClass}>
              Projects
            </NavLink>
          </li> */}
          <li className="flex items-center">
            <NavLink to="/resume" className={navClass}>
              Resume
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink to="/contact" className={navClass}>
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
      <Dialog ref={menuRef}>
        <ul className="fixed top-16 right-0 flex flex-col items-center bg-slate-950">
          <li className="w-full p-4">
            <NavLink to="/" end className={mobileNavClass}>
              About
            </NavLink>
          </li>
          {/* <li className="px-5 py-6">
            <NavLink
              onClick={handleCloseMenu}
              to="/projects"
              className={mobileNavClass}
            >
              Projects
            </NavLink>
          </li> */}
          <li className="w-full p-4">
            <NavLink to="/resume" className={mobileNavClass}>
              Resume
            </NavLink>
          </li>
          <li className="w-full p-4">
            <NavLink to="/contact" className={mobileNavClass}>
              Contact Me
            </NavLink>
          </li>
        </ul>
      </Dialog>
    </header>
  );
}
