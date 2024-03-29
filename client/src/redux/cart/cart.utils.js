export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === itemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(item => item.id === existingCartItem.id
      ? {...item, quantity: item.quantity + 1}
      : item
    );
  }

  return [...cartItems, {...itemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(item => item.id === itemToRemove.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== itemToRemove.id);
  }

  return cartItems.map(item => item.id === existingCartItem.id
    ? {...item, quantity: item.quantity - 1}
    : item
  );
}
