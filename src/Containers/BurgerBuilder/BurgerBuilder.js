import React from 'react';
import Aux from '../../HOC/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

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
	}

	render() {
		const { ingredients } = this.state;
		const { totalPrice } = this.state; 
		const disabledInfo = {
			...ingredients
		};		

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (
			<Aux>
				<Burger ingredients={ingredients} />
				<BuildControls
					ingredientAdded={this.addIngredientsHandler}
					ingredientRemoved={this.removeIngredientsHandler}
					disabled={disabledInfo}
					price={totalPrice}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder; 