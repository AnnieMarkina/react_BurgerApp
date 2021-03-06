import React from 'react';
import Aux from '../../HOC/Aux/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7,
};

class BurgerBuilder extends React.Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 4,
		purchasable: false,
		purchasing: false,
	}

	updatePurchaseState = (ingredients) => {
		const sum = Object.keys(ingredients)
			.map(item => {
				return ingredients[item];
			}).reduce((sum, el) => {
				return sum + el;
			}, 0);
		this.setState({
			purchasable: sum > 0,
		});
	}

	addIngredientsHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;

		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice,
		});
		this.updatePurchaseState(updatedIngredients);
	}

	removeIngredientsHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;

		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice,
		});
		this.updatePurchaseState(updatedIngredients);
	}

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	}

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	}

	purchaseContinueHandler = () => {
		alert('You continue!');
	}

	render() {
		const {
			ingredients,
			totalPrice,
			purchasable,
			purchasing } = this.state;

		const disabledInfo = {
			...ingredients
		};

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (
			<Aux>

				<Modal
					show={purchasing}
					modalClosed={this.purchaseCancelHandler}
				>
					<OrderSummary
						ingredients={ingredients}
						purchaseCancelled={this.purchaseCancelHandler}
						purchaseContinued={this.purchaseContinueHandler}
						price={totalPrice}
					/>
				</Modal>

				<Burger ingredients={ingredients} />

				<BuildControls
					ingredientAdded={this.addIngredientsHandler}
					ingredientRemoved={this.removeIngredientsHandler}
					disabled={disabledInfo}
					price={totalPrice}
					purchasable={purchasable}
					ordered={this.purchaseHandler}
				/>

			</Aux>
		);
	}
}

export default BurgerBuilder; 
