type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-neutral-slate-100 font-PlusJakartaSans">
      <div className="flex-1">{children}</div>
    </main>
  );
}

export default AppLayout;
