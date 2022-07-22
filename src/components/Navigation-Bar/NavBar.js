import React from 'react';
import './NavBar.css';
import logo from './logo.svg';

const NavBar = () => {
	return (
		<div className='Nav'>
			<div className='Nav-Header'>
				<img src={logo} className='App-logo' alt='logo' />
				<h1 style={{ marginLeft: '10px'}}>React-Fun-Facts</h1>
			</div>

			<div className='Nav-List'>
				<h3>Home</h3>
				<h3>Learn</h3>
				<h3>Help</h3>
			</div>
		</div>
	);
};

export default NavBar;
