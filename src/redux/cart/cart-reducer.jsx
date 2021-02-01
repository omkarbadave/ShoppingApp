import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
	hidden: true,
	items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case CartActionTypes.ADD_ITEM_TO_CART:
			return {
				...state,
				items: [...state.items, action.payload],
			};
		default:
			return state;
	}
};

export default cartReducer;
