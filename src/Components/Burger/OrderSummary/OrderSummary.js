import React from 'react';
import Button from '../../UI/Button/Button';
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
			<p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
			<p>Continue to Checkout?</p>

			<Button
				btnType="Danger"
				clicked={props.purchaseCancelled}>
				CANCEL
			</Button>

			<Button
				btnType="Success"
				clicked={props.purchaseContinued}>
				CONTINUE
			</Button>

		</Aux>
	);
}

export default OrderSummary;