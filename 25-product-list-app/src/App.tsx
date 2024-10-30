import AppLayout from './components/ui/AppLayout';
import { CartProvider } from './context/CartContext';
import { LayoutProvider } from './context/LayoutContext';

function App() {
  return (
    <LayoutProvider>
      <CartProvider>
        <AppLayout />
      </CartProvider>
    </LayoutProvider>
  );
}

export default App;
