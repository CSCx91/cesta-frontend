import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import TestComponent from './components/TestComponent';
import './App.scss';
// import Card from './components/Card';
import CardList from './components/CardList';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/test' component={CardList} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
