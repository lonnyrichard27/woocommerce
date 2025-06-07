import { create } from 'zustand';

type Product = {
  id: number;
  name: string;
  price: number;
  image: any;
  quantity?: number;
};

type CartStore = {
  cart: Product[];
  addToCart: (product: Product) => void;
  addQuantity: (id: number) => void;
  removeQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  subtotal: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],

  addToCart: (product) => {
    const cart = get().cart;
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      set({
        cart: cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        ),
      });
    } else {
      set({ cart: [...cart, { ...product, quantity: 1 }] });
    }
  },

  addQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      ),
    })),

  removeQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id && item.quantity && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity && item.quantity > 0),
    })),

  removeItem: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  subtotal: () => {
    return get().cart.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  },
}));
