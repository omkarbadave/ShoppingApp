import React from "react";
import { connect } from "react-redux";
import { selectCartItem } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItemsProp }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItemsProp.map((cartItem) => (
				<CartItem key={cartItem.id} item={cartItem}></CartItem>
			))}
		</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItemsProp: selectCartItem,
});

export default connect(mapStateToProps)(CartDropdown);
