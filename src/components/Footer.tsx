import logoLight from "../assets/logo-light.svg";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";

export default function Footer() {
  return (
    <footer className="bg-slate-950 flex flex-col items-center py-10 gap-10">
      <nav className="flex flex-col items-center gap-10">
        <img src={logoLight} alt="" className="" />
        <ul className="flex flex-col items-center gap-10">
          <li>
            <a href="" className="text-white public-sans uppercase text-xs tracking-[0.165em]">Home</a>
          </li>
          <li>
            <a href="" className="text-white public-sans uppercase text-xs tracking-[0.165em]">Contact Me</a>
          </li>
        </ul>
      </nav>
      <nav className="">
        <ul className="flex gap-4">
          <li>
            <a href="">
              <img src={github} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={linkedin} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
