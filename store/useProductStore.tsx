import { create } from 'zustand';

type Product = {
  id: number;
  name: string;
  price: string;
  image: any; 
};

type Store = {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product) => void;
};

export const useProductStore = create<Store>((set) => ({
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}));
