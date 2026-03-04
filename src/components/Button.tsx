type ButtonProps = {
  children?: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="block mx-auto border border-slate-800 py-4 px-8 public-sans uppercase tracking-[0.165em] text-xs cursor-pointer hover:bg-slate-800 hover:text-white">
      {children}
    </button>
  )
}
