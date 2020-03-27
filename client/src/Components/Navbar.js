import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar is-dark is-fixed-top' role='navigation' aria-label='main navigation'>
			<div className='navbar-end'>
				<Link to='/' className='navbar-item'>
					Home
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
