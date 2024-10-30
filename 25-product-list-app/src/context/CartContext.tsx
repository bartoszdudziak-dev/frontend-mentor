import { createContext, useContext, useState } from 'react';
import { type Item } from '../lib/types';
import { useDesserts } from '../hooks/useDesserts';

type CartContextType = {
  cart: Item[] | [];
  incrementQuantity: (name: string) => void;
  decrementQuantity: (name: string) => void;
  getItem: (name: string) => Item | undefined;
  getTotalQuantity: () => number;
  getTotalPrice: () => number;
  removeItem: (name: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartContextType['cart']>([]);
  const { getDessertDetails } = useDesserts();

  const getItem = (name: string) => {
    return cart.find(item => item.name === name);
  };

  const getTotalQuantity = () => {
    if (cart.length === 0) return 0;
    return cart.reduce((total: number, item: Item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    if (cart.length === 0) return 0;
    return cart.reduce(
      (total: number, item: Item) => total + item.quantity * item.price,
      0,
    );
  };

  const removeItem = (name: string) =>
    setCart(items => items.filter(item => item.name !== name));

  const addItem = (newItem: Item) => setCart(items => [...items, newItem]);

  const incrementQuantity = (name: string) => {
    if (!getItem(name))
      return addItem({
        name,
        quantity: 1,
        price: getDessertDetails(name)?.price || 0,
      });

    setCart(items =>
      items.map(item =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decrementQuantity = (name: string) => {
    if (getItem(name)?.quantity === 1) return removeItem(name);

    setCart(items =>
      items.map(item =>
        item.name === name ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        incrementQuantity,
        decrementQuantity,
        removeItem,
        getItem,
        getTotalQuantity,
        getTotalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined)
    throw new Error('LayoutContext was used outside of LayoutContextProvider');

  return context;
}

export { CartProvider, useCart };
