type AffixProps = {
  children: React.ReactNode;
  isFocused?: boolean;
  isError?: boolean;
};

function Affix({ children, isFocused, isError }: AffixProps) {
  const affixColors = isError
    ? 'bg-primary-red text-neutral-white'
    : isFocused
      ? 'bg-primary-lime text-neutral-slate-900'
      : 'bg-neutral-slate-100 text-neutral-slate-700';

  return (
    <span
      className={`${affixColors} flex items-center px-200 text-lg font-bold transition-all duration-300`}
    >
      {children}
    </span>
  );
}

export default Affix;
