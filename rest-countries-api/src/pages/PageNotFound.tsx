import ButtonBack from '../ui/ButtonBack';

function PageNotFound() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-neutral-gray-100 font-NunitoSans leading-normal text-neutral-dark-blue-900 dark:bg-neutral-dark-blue-600 dark:text-neutral-white">
      <div className="space-y-4 md:space-y-6">
        <ButtonBack />
        <h2 className="text-2xl font-extrabold uppercase md:text-4xl">
          Page not found
        </h2>
      </div>
    </div>
  );
}

export default PageNotFound;
