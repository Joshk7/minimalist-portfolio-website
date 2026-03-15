type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={`block mx-auto border border-slate-950 py-4 px-8 public-sans uppercase tracking-[0.165em] text-xs cursor-pointer hover:bg-slate-950 hover:text-white max-w-42 ${className ?? ""}`}>
      {children}
    </button>
  )
}
