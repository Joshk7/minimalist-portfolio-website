import hero from "../assets/homepage/mobile/image-homepage-hero.jpg";
import downArrows from "../assets/icons/down-arrows.svg";
import profile from "../assets/homepage/mobile/image-homepage-profile.jpg";

export default function Home() {
  return (
    <main className="">
      <section className="p-4">
        <img src={hero} alt="" className="block w-full" />
        <div className="pt-3 flex flex-col gap-8">
          <h1 className="ibarra-real-nova text-[40px] font-bold">
            Hey, I'm Joshua Kahlbaugh and I love building beautiful websites
          </h1>
          <a href="" className="flex bg-neutral-950 max-w-50 ">
            <img src={downArrows} alt="" className="p-4" />
            <span className="public-sans uppercase text-white text-xs tracking-[0.165em] py-4 mx-auto">
              About Me
            </span>
          </a>
        </div>
      </section>
      <section className="p-4 flex flex-col gap-8">
        <img src={profile} alt="" className="block w-full" />
        <article className="py-12 border-y border-y-slate-800/15 flex flex-col gap-6">
          <h2 className="ibarra-real-nova text-4xl font-bold">About Me</h2>
          <p className="public-sans text-slate-800/80 leading-[188%]">
            I'm a frontend developer looking for a new role in an exciting
            company. I focus on writing accessible HTML, using modern CSS
            practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I'm based in Liberty Lake, WA, US, but I'm happy working
            remotely and have experience in remote teams. When I'm not coding, I
            enjoy hiking, fishing, and calisthenics.
          </p>
        </article>
      </section>
      <section>
        <h2 className="ibarra-real-nova text-4xl font-bold text-center">
          Interested in getting in touch with me?
        </h2>
        <button className="block mx-auto">Contact Me</button>
      </section>
    </main>
  );
}
