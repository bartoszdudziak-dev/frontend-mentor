import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-1 bg-primary-dark-blue font-light md:gap-2">
      <Link
        to="/"
        className="text-sm text-accent-gray underline-offset-4 transition-all duration-300 hover:text-accent-red hover:underline md:text-xl"
      >
        Go to Homepage
      </Link>
      <span className="text-xl text-white md:text-3xl">Page not found</span>
    </div>
  );
}

export default NotFound;
