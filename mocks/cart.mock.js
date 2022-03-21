const product = {
  title: "Adidas running shoes - men",
  price: "35388",
};

const product2 = {
  title: "Adidas running shoes - women",
  price: "41872",
};

export const item = {
  product,
  quantity: 2,
};

export const item2 = {
  product: product2,
  quantity: 1,
};

export const checkoutList = {
  items: [
    {
      product: { price: "35388", title: "Adidas running shoes - men" },
      quantity: 2,
    },
    {
      product: { price: "41872", title: "Adidas running shoes - women" },
      quantity: 1,
    },
  ],
  total: 112648,
};

export const summary = {
  items: [
    {
      product: { price: "35388", title: "Adidas running shoes - men" },
      quantity: 2,
    },
    {
      product: { price: "41872", title: "Adidas running shoes - women" },
      quantity: 1,
    },
  ],
  total: 112648,
};
