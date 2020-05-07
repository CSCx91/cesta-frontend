import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
// import TestComponent from './components/TestComponent';
import './App.scss';
// import Card from './components/Card';
import TestComponent from './components/TestComponent';
import Dashboard from './pages/Dashboard';
import SearchResult from './pages/SearchResult';
import Login from './pages/Login';
import PostPage from './pages/PostPage';

const client = new ApolloClient({
	uri: 'http://localhost:3001/api',
});

function App() {
	return (
		<div className='App'>
			<ApolloProvider client={client}>
				<Router>
					<Switch>
						<Route path='/login' exact component={Login} />
						<Route path='/' exact component={Dashboard} />
						<Route path='/results/:id' component={SearchResult} />
						<Route path='/post' exact component={PostPage} />
						<Route path='/test' exact component={TestComponent} />
					</Switch>
				</Router>
			</ApolloProvider>
		</div>
	);
}

export default App;
