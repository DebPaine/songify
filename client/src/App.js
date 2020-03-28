import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import AddSongs from './Components/AddSongs';
import './App.css';

function App () {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<br />
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route exact path='/addsongs' component={AddSongs} />
				</Switch>
			</Fragment>
		</Router>
	);
}

export default App;
