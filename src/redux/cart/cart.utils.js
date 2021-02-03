export const addItemIntoCart = (cartItems, cartItem) => {
	const existingCartITem = cartItems.find((item) => item.id === cartItem.id);

	if (existingCartITem) {
		return cartItems.map((item) =>
			cartItem.id === item.id ? { ...item, quantity: item.quantity + 1 } : item
		);
	} else {
		return [...cartItems, { ...cartItem, quantity: 1 }];
	}
};

export const clearItemFromCart = (cartItems, item) => {
	return cartItems.filter((cartItem) => cartItem.id !== item.id);
};
