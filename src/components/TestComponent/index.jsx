import React, { useState, useEffect } from 'react';

// Import your testing components here!
// Feel free to remove any test components that were already here
import InputBlock from '../InputBlock';

const TestComponent = () => {
	const [email, setEmail] = useState('');

	useEffect(() => {
		console.log(email);
	}, [email]);

	return (
		<>
			<InputBlock
				type='email'
				label='Email'
				value={email}
				onChange={(v) => setEmail(v)}
				id='email'
			/>
		</>
	);
};

const Foo = () => {
	return <div>Foo</div>;
};

export default TestComponent;
