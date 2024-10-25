function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-full bg-red-400 p-3 text-sm font-semibold text-white-400 shadow-md transition-all duration-300 hover:bg-opacity-75"
    >
      {children}
    </button>
  );
}

export default Button;
