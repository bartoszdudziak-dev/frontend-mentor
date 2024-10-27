function EmptyContainer() {
  return (
    <div className="flex flex-col items-center justify-center gap-200 text-center">
      <img
        src="/assets/images/illustration-empty.svg"
        alt=""
        className="size-48"
      />
      <h2 className="text-2xl font-bold text-neutral-white">
        Results shown here
      </h2>
      <p className="text-neutral-slate-300">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}

export default EmptyContainer;
