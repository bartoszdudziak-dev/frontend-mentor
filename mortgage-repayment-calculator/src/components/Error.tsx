type ErrorProps = {
  children: React.ReactNode;
};

function Error({ children }: ErrorProps) {
  return <span className="text-sm text-primary-red">{children}</span>;
}

export default Error;
