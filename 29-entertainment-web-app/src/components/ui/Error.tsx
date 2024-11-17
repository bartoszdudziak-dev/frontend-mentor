import { VscError } from 'react-icons/vsc';

function Error() {
  return (
    <div className="flex items-center gap-1 md:gap-2">
      <VscError className="text-2xl md:text-4xl" />
      <span className="text-xl md:text-3xl">Something went wrong</span>
    </div>
  );
}

export default Error;
