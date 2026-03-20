import githubDark from "../assets/icons/github-dark.svg";
import linkedinDark from "../assets/icons/linkedin-dark.svg";

export default function Contact() {
  return (
    <main className="pt-16 md:pt-24">
      <section className="max-w-277.5 mx-auto flex flex-col gap-6 px-8">
        <article className="py-8 border-y border-y-slate-800/15">
          <h2>Get In Touch</h2>
          <div className="flex flex-col gap-6">
            <p>
              I'd love to hear about what you're working on and how I could
              help. I'm a hard working and positive person who will always
              approach a task with a sense of purpose and attention to detail.
              Please feel free to check out my online profiles below and get in
              touch using the form.
            </p>
            <nav>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="https://github.com/Joshk7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500"
                  >
                    <img src={githubDark} alt="GitHub Logo" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/josh-kahlbaugh-8a307a221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500"
                  >
                    <img src={linkedinDark} alt="LinkedIn Logo" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </article>
      </section>
      <section className="max-w-277.5 mx-auto">
        <h2>Contact Me</h2>
      </section>
    </main>
  );
}
