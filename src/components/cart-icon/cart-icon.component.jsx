import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ toggleCartHiddenProp, itemCount }) => (
	<div className="cart-icon" onClick={toggleCartHiddenProp}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{itemCount}</span>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	toggleCartHiddenProp: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
	itemCount: cartItems.reduce((totalCount, cartItem) => {
		return totalCount + cartItem.quantity;
	}, 0),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
