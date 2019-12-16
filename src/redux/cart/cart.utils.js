export const addItemToCart = (cartItems, cartItemToadd) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToadd.id);

  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === cartItemToadd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemToadd, quantity: 1 }];
};
