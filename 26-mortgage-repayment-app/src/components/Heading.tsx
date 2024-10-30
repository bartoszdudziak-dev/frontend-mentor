type HeadingProps = {
  children: React.ReactNode;
};

function Heading({ children }: HeadingProps) {
  return (
    <h1 className="text-2xl font-bold text-neutral-slate-900">{children}</h1>
  );
}

export default Heading;
