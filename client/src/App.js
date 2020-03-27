import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import './App.css';

function App () {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Landing} />
				</Switch>
			</Fragment>
		</Router>
	);
}

export default App;
