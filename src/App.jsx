import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TestComponent from './components/TestComponent';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/test' component={TestComponent} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
