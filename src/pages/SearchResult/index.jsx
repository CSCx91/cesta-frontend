import React from 'react';
import Navbar from '../../components/Navbar';
import TransactionTypeSelector from '../../components/TransactionTypeSelector';
import Container from '../../components/Container';
import ResultCardList from '../../components/ResultCardList';

const SearchResult = () => {
	return (
		<>
			<div>
				<Navbar />
				<TransactionTypeSelector />
			</div>
			<div>
				<Container>
					<ResultCardList />
				</Container>
			</div>
		</>
	);
};

export default SearchResult;
