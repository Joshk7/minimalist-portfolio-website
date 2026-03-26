import githubDark from "../assets/icons/github-dark.svg";
import linkedinDark from "../assets/icons/linkedin-dark.svg";
import { useForm, ValidationError } from "@formspree/react";

// TODO: Add proper frontend form validation
export default function Contact() {
  const [state, handleSubmit] = useForm("xzdkbakd");

  if (state.succeeded) {
    return (
      <main className="pt-16 md:pt-24 flex flex-col justify-center">
        <section className="max-w-277.5 mx-auto flex flex-col gap-6 px-8 lg:py-12">
          <h2 className="ibarra-real-nova text-3xl md:text-4xl lg:text-5xl font-bold">
            Thank you!
          </h2>
          <p className="public-sans text-slate-800/80 text-md md:text-lg lg:text-xl leading-[188%]">
            Your message has been sent successfully. I will get back to you soon.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-16 md:pt-24">
      <section className="max-w-277.5 mx-auto flex flex-col gap-6 px-8 lg:py-12">
        <article className="py-8 border-y border-y-slate-800/15 flex flex-col gap-y-6 lg:flex-row lg:justify-between">
          <h2 className="ibarra-real-nova text-3xl md:text-4xl lg:text-5xl font-bold">
            Get in Touch
          </h2>
          <div className="flex flex-col gap-6 lg:max-w-158.75">
            <p className="public-sans text-slate-800/80 text-md md:text-lg lg:text-xl leading-[188%]">
              I'd love to hear about what you're working on and how I could
              help. Please feel free to check out my online profiles below and
              get in touch using the form.
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
      <section className="max-w-277.5 mx-auto flex flex-col gap-6 p-8 lg:py-12 lg:flex-row lg:justify-between">
        <h2 className="ibarra-real-nova text-3xl md:text-4xl lg:text-5xl font-bold">
          Contact Me
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-1 lg:max-w-158.75"
        >
          <label
            htmlFor="name"
            className="py-2 public-sans text-xs font-bold text-slate-800"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="John Doe"
            className={`mt-1 public-sans text-xs bg-slate-800/10 text-slate-800 py-4 px-5`}
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />

          <label
            htmlFor="email"
            className="mt-4 py-2 public-sans text-xs font-bold text-slate-800"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="email@example.com"
            className={`mt-1 public-sans text-xs bg-slate-800/10 text-slate-800 py-4 px-5`}
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />

          <label
            htmlFor="message"
            className="mt-4 py-2 public-sans text-xs font-bold text-slate-800"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="How can I help?"
            className={`mt-1 public-sans text-xs bg-slate-800/10 text-slate-800 py-4 px-5 min-h-24 resize-none`}
          ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            className="public-sans text-xs self-start my-8 bg-blue-950 text-white uppercase py-4 px-6 cursor-pointer hover:bg-blue-500"
          >
            Send message
          </button>
        </form>
      </section>
    </main>
  );
}
