import React, { useState } from 'react';

// Import your testing components here!
// Feel free to remove any test components that were already here
import InputBlock from '../InputBlock';

const TestComponent = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<InputBlock
				type='email'
				label='Email'
				value={email}
				onChange={(v) => setEmail(v)}
				id='email'
			/>

			<InputBlock
				type='password'
				label='Password'
				value={password}
				onChange={(v) => setPassword(v)}
				id='email'
			/>
		</>
	);
};

// const Foo = () => {
// 	return <div>Foo</div>;
// };

export default TestComponent;
