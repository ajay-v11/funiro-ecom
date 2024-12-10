import {atom} from 'recoil';

export const cartCountAtom = atom({
  key: 'cartCount', // Unique ID for this atom
  default: 0, // Default value: no user logged in
});

export const totalPriceAtom = atom({
  key: 'priceAtom',
  default: 0,
});

export const favCountAtom = atom({
  key: 'favCount',
});

export const productsAtom = atom({
  key: 'product',
  default: [],
});

export const productLoading = atom({
  key: 'loading',
  default: true,
});
