import React from 'react';
import Button from '../../UI/Button/Button';
import Aux from '../../../HOC/Aux/Aux';

class OrderSummary extends React.Component {
	componentWillUpdate = () => {
		console.log('[OrderSummary] will update');
	}

	render() {
		const ingredientSummary = Object.keys(this.props.ingredients)
			.map(item => {
				return (
					<li key={item}>
						<span style={{ textTransform: 'capitalize ' }}>
							{item}
						</span>: &nbsp;
								{this.props.ingredients[item]}
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
				<p>
					<strong>
						Total Price: ${this.props.price.toFixed(2)}
					</strong>
				</p>
				<p>Continue to Checkout?</p>

				<Button
					btnType="Danger"
					clicked={this.props.purchaseCancelled}>
					CANCEL
					</Button>

				<Button
					btnType="Success"
					clicked={this.props.purchaseContinued}>
					CONTINUE
					</Button>

			</Aux>
		);
	}

}

export default OrderSummary;