interface Item {
  price: number;
}

export const getTotalPrice = (items: Item[]): number => {
  return items.reduce((total, item) => total + item.price, 0);
};
