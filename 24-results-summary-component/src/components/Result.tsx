function Result() {
  return (
    <div
      className="bg-gradient-to-b from-gradient-light-slate-blue to-gradient-light-royal-blue flex flex-col items-center p-8 rounded-br-3xl rounded-bl-3xl gap-6 lg:max-w-[368px] lg:rounded-3xl
"
    >
      <h2 className="text-neutral-light-lavender font-bold text-lg lg:text-2xl">
        Your Reuslt
      </h2>
      <div className="size-[140px] lg:size-[200px] rounded-full flex flex-col justify-center items-center bg-gradient-to-b to-gradient-persian-blue from-gradient-violet-blue gap-2">
        <span className="text-white text-5xl lg:text-7xl font-extrabold">
          76
        </span>
        <span className="text-neutral-light-lavender font-bold opacity-50">
          of 100
        </span>
      </div>
      <div className="text-center space-y-2">
        <span className="text-white text-2xl lg:text-3xl font-bold">Great</span>
        <p className="text-neutral-light-lavender text-center lg:text-lg">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}
export default Result;
