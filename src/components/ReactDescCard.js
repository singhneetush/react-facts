import React from 'react';
import './App.css';
import Card from './Card';

const ReactDescCard = () => {
	return (
		<>
			<div className='Desc-Card'>
				<div> React</div>
				<p>A JavaScript library for building user interfaces</p>
			</div>
			<br />

			<Card />
		</>
	);
};

export default ReactDescCard;
