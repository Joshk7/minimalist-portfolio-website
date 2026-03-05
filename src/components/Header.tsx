import logo from "../assets/logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import close from "../assets/icons/close.svg";
import { useRef, useState } from "react";
import Dialog from "./Dialog";

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
    <header className="p-4 fixed bg-white w-full">
      <nav aria-label="Primary" className="flex justify-between align-center">
        <img src={logo} alt="" className="block" />
        <button
          onClick={isMenuOpen ? handleCloseMenu : handleOpenMenu}
          aria-expanded={isMenuOpen}
          aria-controls="menu"
          className="cursor-pointer"
        >
          <img
            src={isMenuOpen ? close : hamburger}
            alt=""
            className="block min-w-6 hover:opacity-50"
          />
        </button>
        <ul id="menu" className="hidden">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact Me</a>
          </li>
        </ul>
      </nav>
      <Dialog ref={menuRef}>
        <ul className="fixed top-16 right-4 flex flex-col items-center gap-8 bg-slate-950 px-16 py-10">
          <li>
            <a onClick={handleCloseMenu} href="#" className="text-white public-sans uppercase text-xs tracking-[0.165em] w-full">Home</a>
          </li>
          <li>
            <a onClick={handleCloseMenu} href="#" className="text-white public-sans uppercase text-xs tracking-[0.165em]">Contact Me</a>
          </li>
        </ul>
      </Dialog>
    </header>
  );
}
