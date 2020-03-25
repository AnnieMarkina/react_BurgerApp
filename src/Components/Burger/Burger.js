import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
	let ingredients = Object.keys(props.ingredients)
		.map(item => {
			return [...Array(props.ingredients[item])]
				.map((_, i) => {
					return <BurgerIngredient
						key={item + i}
						type={item} />
				})
		}).reduce((arr, el) => {
			return arr.concat(el)
		}, []);

	if (ingredients.length === 0) {
		ingredients = <p>Please start adding ingredients :)</p>
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{ingredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default Burger; 
