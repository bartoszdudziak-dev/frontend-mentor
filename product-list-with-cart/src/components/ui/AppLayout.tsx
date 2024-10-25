import Cart from '../Cart/Cart';
import Desserts from '../Desserts/Desserts';

function AppLayout() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center bg-rose-50 p-6 font-custom md:p-10">
      <div className="w-full">
        <div className="mx-auto grid max-w-[1216px] grid-cols-1 gap-400 lg:grid-cols-[2fr_1fr]">
          <Desserts />
          <Cart />
        </div>
      </div>
    </main>
  );
}

export default AppLayout;
