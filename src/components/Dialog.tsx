type DialogProps = React.ComponentPropsWithoutRef<'dialog'> & {
  ref: React.RefObject<HTMLDialogElement | null>;
};

export default function Dialog({ ref, children, ...rest }: DialogProps) {
  return (
    <dialog ref={ref} {...rest}>
      {children}
    </dialog>
  );
}
