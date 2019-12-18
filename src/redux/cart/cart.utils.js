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

export const clearItemFromCart = (cartItem, itemToClear) => {
  return cartItem.filter(cartItem => cartItem.id !== itemToClear.id);
};

export const removeItem = (cartItem, itemToRemove) => {
  const existingCartItem = cartItem.find(
    cartItem => cartItem.id === itemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return clearItemFromCart(cartItem, itemToRemove);
  }

  return cartItem.map(item =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
