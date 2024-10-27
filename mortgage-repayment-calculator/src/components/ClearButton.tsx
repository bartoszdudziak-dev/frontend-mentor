type CleatButtonProps = React.ComponentProps<'button'>;

function ClearButton({ ...props }: CleatButtonProps) {
  return (
    <button
      {...props}
      className="text-neutral-slate-700 underline decoration-1 underline-offset-2 transition-all duration-300 hover:text-neutral-slate-900"
    >
      Clear All
    </button>
  );
}

export default ClearButton;
