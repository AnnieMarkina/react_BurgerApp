import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' }, 
];

const BuildControls = (props) => {
	return (
		<div className={classes.BuildControls}>
			<p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
			{controls.map(el => (
				<BuildControl 
					disabled={props.disabled[el.type]}
					removed={() => props.ingredientRemoved(el.type)}
					added={() => props.ingredientAdded(el.type)}
					key={el.label} 
					label={el.label} />
			))}

			<button 
				className={classes.OrderButton}
				disabled={!props.purchasable}
				onClick={props.ordered}
			>
				ORDER NOW</button> 
		</div>
	);
}
 
export default BuildControls; 