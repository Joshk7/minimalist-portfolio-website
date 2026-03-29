import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function Resume() {
  const screenWidth = window.innerWidth;

  const scale = screenWidth / 700;

  return (
    <main className="pt-16 md:pt-24">
      <section className="relative flex flex-col justify-center items-center p-8 gap-8">
        <div className="group relative shadow-lg">
          {/* <div className="absolute hidden lg:block inset-0 z-5 pointer-events-none transition-colors opacity-0 group-hover:opacity-100">
            <div className="h-full w-full bg-black/50"></div>
          </div>

          <div className="hidden lg:flex transition-opacity opacity-0 group-hover:opacity-100 absolute inset-0 z-10 justify-center items-center rounded-md shadow-lg">
            <a
              href="/JoshuaKahlbaughResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border bg-white border-slate-950 p-4 public-sans uppercase tracking-[0.165em] text-xs cursor-pointer hover:bg-slate-950 hover:text-white"
            >
              Download Resume
            </a>
          </div> */}

          <Document file="/JoshuaKahlbaughResume.pdf">
            <Page pageNumber={1} scale={screenWidth >= 1000 ? 1.3 : scale} />
          </Document>
        </div>

        <a
          href="/JoshuaKahlbaughResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border bg-white border-slate-950 p-4 public-sans uppercase tracking-[0.165em] text-xs cursor-pointer hover:bg-slate-950 hover:text-white"
        >
          Download Resume
        </a>
      </section>
    </main>
  );
}
