import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemTocart = (item) => ({
	type: CartActionTypes.ADD_ITEM_TO_CART,
	payload: item,
});
