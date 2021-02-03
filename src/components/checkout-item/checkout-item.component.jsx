import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
	addItemTocart,
	clearItemFromCart,
	removeItemFromCart,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, dispatch }) => {
	const { name, price, quantity, imageUrk } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrk} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div
					className="arrow"
					onClick={() => dispatch(removeItemFromCart(cartItem))}
				>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div
					className="arrow"
					onClick={() => dispatch(addItemTocart(cartItem))}
				>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div
				className="remove-button"
				onClick={() => dispatch(clearItemFromCart(cartItem))}
			>
				&#10005;
			</div>
		</div>
	);
};

export default connect(null)(CheckoutItem);
