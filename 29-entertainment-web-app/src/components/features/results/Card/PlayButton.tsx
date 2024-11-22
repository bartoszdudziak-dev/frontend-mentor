import IconPlay from '../../../icons/IconPlay';

function PlayButton() {
  return (
    <div className="absolute left-1/2 top-1/2 hidden w-full max-w-[7.5rem] -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full bg-white bg-opacity-25 p-2.5 opacity-0 transition-all duration-300 group-hover:opacity-100 lg:flex xl:gap-5 xl:text-lg">
      <IconPlay className="w-6 xl:w-[1.9375rem]" />
      <span className="font-medium">Play</span>
    </div>
  );
}

export default PlayButton;
