import hero from "../assets/portfolio/hero.mp4";

export default function Visual() {
  return (
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
  )
}
