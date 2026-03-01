import hero from "../assets/homepage/mobile/image-homepage-hero.jpg";
import profile from "../assets/homepage/mobile/image-homepage-profile.jpg";

export default function Home() {
  return (
    <main className="p-4">
      <section>
        <img src={hero} alt="" className="block w-full" />
        <h1>Hey, I'm Josh Kahlbaugh and I love building beautiful websites</h1>
        <a href="">About Me</a>
        <img src={profile} alt="" />
      </section>
    </main>
  );
}
