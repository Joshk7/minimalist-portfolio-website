import { NavLink } from "react-router-dom";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";

export default function Footer() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm public-sans tracking-[0.165em] uppercase hover:text-blue-500 ${isActive ? "text-blue-500" : "text-white"}`;

  return (
    <footer className="bg-slate-950 flex flex-col items-center py-14 gap-10 md:flex-row md:p-8 justify-between">
      <nav>
        <ul className="flex flex-col items-center gap-10 md:flex-row">
          <li>
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/projects" className={navClass}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className={navClass}>
              Resume
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/contact" className={navClass}>
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex gap-4">
          <li>
            <a
              href="https://github.com/Joshk7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <img src={github} alt="GitHub Logo" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/josh-kahlbaugh-8a307a221"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <img src={linkedin} alt="LinkedIn Logo" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
