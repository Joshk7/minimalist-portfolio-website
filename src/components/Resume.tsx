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
      <section className="flex flex-col justify-center items-center p-8 gap-8">
        <div className="shadow-lg">
          <Document file="/JoshuaKahlbaughResume.pdf">
            <Page pageNumber={1} scale={screenWidth >= 1000 ? 1.3 : scale} />
          </Document>
        </div>
        <a
          href="/JoshuaKahlbaughResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-slate-950 py-4 px-8 public-sans uppercase tracking-[0.165em] text-xs cursor-pointer hover:bg-slate-950 hover:text-white"
        >
          Download Resume
        </a>
      </section>
    </main>
  );
}
