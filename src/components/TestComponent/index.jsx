import React from 'react';

// Import your testing components here!
// Feel free to remove any test components that were already here
import Navbar from '../Navbar';
import TransactionTypeSelector from '../TransactionTypeSelector';
import CategorySelector from '../CategorySelector';

const TestComponent = () => {
	return (
		<>
			<Navbar />
			<TransactionTypeSelector />
			<CategorySelector />
		</>
	);
};

// const Foo = () => {
// 	return <div>Foo</div>;
// };

export default TestComponent;
