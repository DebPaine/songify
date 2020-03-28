import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar is-dark is-fixed-top' role='navigation' aria-label='main navigation'>
			<div className='navbar is-white' style={{ marginLeft: 'auto', marginRight: 'auto' }}>
				<Link to='/' className='navbar-item'>
					Home
				</Link>
				<Link to='/topsongs' className='navbar-item'>
					Top 10 Songs
				</Link>
				<Link to='/topartists' className='navbar-item'>
					Top 10 Artists
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
