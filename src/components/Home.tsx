import hero from "../assets/homepage/mobile/image-homepage-hero.jpg";
import heroTablet from "../assets/homepage/tablet/image-homepage-hero.jpg";
import downArrows from "../assets/icons/down-arrows.svg";
import profile from "../assets/homepage/mobile/image-homepage-profile.jpg";
import Button from "./Button";

export default function Home() {
  return (
    <main className="pt-20 p-4 md:p-8 md:pt-36">
      <section className="relative">
        <picture>
          <source media="(min-width: 768px)" srcSet={heroTablet} />
          <img src={hero} alt="" className="block w-full" />
        </picture>
        <div className="bg-white pt-3 flex flex-col gap-8 bottom-0 md:absolute max-w-md md:pt-14 md:pr-14">
          <h1 className="ibarra-real-nova text-[40px] font-bold">
            Hey, I'm Joshua Kahlbaugh and I love building beautiful websites
          </h1>
          <a href="" className="flex bg-blue-950 max-w-50 ">
            <img src={downArrows} alt="" className="p-4" />
            <span className="public-sans uppercase text-white text-xs py-4 mx-auto">
              About Me
            </span>
          </a>
        </div>
      </section>
      <section className="mt-16 flex flex-col gap-8 md:flex-row md:justify-between">
        <picture className="flex-1">
          <img
            src={profile}
            alt=""
            className="block w-full h-full object-cover"
          />
        </picture>
        <article className="py-12 border-y border-y-slate-800/15 flex flex-col gap-6 flex-1">
          <h2 className="ibarra-real-nova text-4xl font-bold">About Me</h2>
          <p className="public-sans text-slate-800/80 leading-[188%]">
            I'm a Software Engineer with a passion for building beautiful,
            performant, and accessible websites. I have experience using modern
            CSS practices and writing clean JavaScript/TypeScript. When writing
            JavaScript code, I mostly use React, but I can adapt to whatever
            tools are required. I'm based in Liberty Lake, WA, US and enjoy the
            outdoors. When I'm not coding, I enjoy hiking, fishing, and
            calisthenics.
          </p>
        </article>
      </section>
      <section className="py-16 flex flex-col gap-10">
        <h2 className="ibarra-real-nova text-4xl font-bold text-center">
          Have something in mind? Let's chat.
        </h2>
        <Button>Contact Me</Button>
      </section>
    </main>
  );
}
