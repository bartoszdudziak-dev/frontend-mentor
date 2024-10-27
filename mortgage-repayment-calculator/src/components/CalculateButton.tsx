function CalculateButton() {
  return (
    <button
      type="submit"
      className="flex items-center justify-center gap-150 rounded-full bg-primary-lime py-200 text-center outline-none transition-all duration-300 hover:bg-opacity-50 focus:ring-2 focus:ring-neutral-slate-900 focus:ring-offset-1 sm:max-w-[314px] sm:px-500"
    >
      <img
        alt=""
        src="src/assets/images/icon-calculator.svg"
        className="size-6"
      />
      <span className="text-lg font-bold text-neutral-slate-900">
        Calculate Repayments
      </span>
    </button>
  );
}

export default CalculateButton;
