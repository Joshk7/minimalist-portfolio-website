import { NavLink } from "react-router";
import hero from "../assets/portfolio/hero.mp4";
import profile from "../assets/portfolio/profile.jpg";

export default function Home() {
  return (
    <main className="pt-16 md:pt-24 lg:px-8">
      <section className="max-w-277.5 mx-auto relative pb-12">
        <video autoPlay muted loop className="object-cover min-h-96">
          <source src={hero} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-end">
          <div className="bg-white/75 flex flex-col">
            <h1 className="ibarra-real-nova text-center text-4xl md:text-5xl lg:text-6xl leading-snug font-bold p-4">
              Hey, I'm Joshua Kahlbaugh and I love building beautiful websites
            </h1>
            <a
              href="#about-me"
              className="bg-black hover:text-blue-500 public-sans uppercase text-white text-xs py-4 text-center"
            >
              About Me
            </a>
          </div>
        </div>
      </section>
      <section className="max-w-277.5 mx-auto flex flex-col gap-8 mt-12 md:mt-24 md:gap-16 md:flex-row md:justify-between px-8 lg:px-0 lg:gap-24">
        <picture id="about-me" className="flex-1">
          <img
            src={profile}
            alt=""
            className="block w-full h-full object-cover max-h-180"
          />
        </picture>
        <article className="py-12 border-y border-y-slate-800/15 flex flex-col justify-center gap-6 lg:gap-8 flex-1">
          <h2 className="ibarra-real-nova text-3xl md:text-4xl lg:text-5xl font-bold">
            About Me
          </h2>
          <p className="public-sans text-slate-800/80 text-md md:text-lg lg:text-xl leading-[188%]">
            I'm a Software Engineer with a passion for building beautiful,
            performant, and accessible websites. I have experience using modern
            CSS practices and writing clean JavaScript/TypeScript. When writing
            frontend code, I mostly use React, but I can adapt to whatever tools
            are required. I'm based in Liberty Lake, WA, US and enjoy the
            outdoors. When I'm not coding, I enjoy hiking, fishing, and
            calisthenics.
          </p>
        </article>
      </section>
      <section className="max-w-277.5 mx-auto py-20 px-8 md:py-24 flex flex-col gap-10 md:flex-row md:justify-between md:items-center lg:px-0">
        <h2 className="ibarra-real-nova text-3xl font-bold text-center mx-auto md:text-4xl md:min-w-80 md:text-left md:flex-1 lg:text-5xl lg:min-w-100">
          Have something in mind? Let's chat.
        </h2>
        <hr className="hidden border border-slate-800/15 md:block md:flex-1" />
        <NavLink to="/contact" className="flex-1 block mx-auto border border-slate-950 py-4 px-8 public-sans uppercase tracking-[0.165em] text-xs cursor-pointer hover:bg-slate-950 hover:text-white max-w-42">
          Contact Me
        </NavLink>
      </section>
    </main>
  );
}
