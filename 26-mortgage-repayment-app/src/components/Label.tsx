type LabelProps = {
  children: React.ReactNode;
  htmlFor?: string;
};

function Label({ children, htmlFor }: LabelProps) {
  return (
    <label className="w-fit text-base text-neutral-slate-700" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default Label;
