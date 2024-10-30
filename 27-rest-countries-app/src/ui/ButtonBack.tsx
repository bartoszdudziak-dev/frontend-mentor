import { useQueryClient } from '@tanstack/react-query';
import { LiaArrowLeftSolid } from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';

function ButtonBack() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(-1);
        queryClient.invalidateQueries();
      }}
      className="flex h-8 w-full max-w-[6.5rem] items-center justify-center gap-2 rounded-sm bg-neutral-white shadow-md transition-all hover:scale-105 hover:opacity-80 dark:bg-neutral-dark-blue-400 md:h-10 md:max-w-[8.5rem] md:gap-2.5 md:rounded-md"
    >
      <LiaArrowLeftSolid className="size-[1.125rem] md:size-5" />
      <span className="text-sm font-light md:text-base">Back</span>
    </button>
  );
}

export default ButtonBack;
