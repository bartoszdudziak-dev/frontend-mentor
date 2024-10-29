import { ReactNode } from 'react';

type MainProps = {
  children: ReactNode;
};

function Main({ children }: MainProps) {
  return (
    <main className="px-4 md:px-6 xl:px-8">
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </main>
  );
}

export default Main;
