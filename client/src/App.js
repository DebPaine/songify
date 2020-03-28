import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import AddSongs from './Components/AddSongs';
import TopSongs from './Components/TopSongs';
import TopArtists from './Components/TopArtists';
import './App.css';

function App () {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<br />
				<br />
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route exact path='/addsongs' component={AddSongs} />
					<Route exact path='/topsongs' component={TopSongs} />
					<Route exact path='/topartists' component={TopArtists} />
				</Switch>
			</Fragment>
		</Router>
	);
}

export default App;
