import React from 'react';
import Aux from '../../../HOC/Aux';

const OrderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
		.map(item => {
			return (
				<li key={item}>
					<span style={{ textTransform: 'capitalize ' }}>
						{item}
					</span>: &nbsp;
							{props.ingredients[item]}
				</li>
			)
		});

	return (
		<Aux>
			<h3>Your Order</h3>
			<p>Ingredients you've chosen:</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p>Continue to Checkout?</p>
		</Aux>
	);
}

export default OrderSummary;