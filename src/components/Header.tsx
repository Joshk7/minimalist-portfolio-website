import logo from "../assets/logo.svg";
import hamburger from "../assets/icons/hamburger.svg";

export default function Header() {
  return (
    <header className="p-4">
      <nav aria-label="Primary" className="flex justify-between align-center">
        <img src={logo} alt="" className="block" />
        <button aria-expanded="false" aria-controls="menu" className="cursor-pointer hover:opacity-50">
          <img src={hamburger} alt="" className="block∑" />
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
    </header>
  );
}
