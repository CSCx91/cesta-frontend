import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import InputTextBlock from '../../components/InputTextBlock';
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import RadioSelector from '../../components/RadioSelector';

import styles from './index.module.scss';

// broken gql
const ADD_ITEM = gql`
	mutation addItem(
		$price: Int!
		$title: String!
		$condition: Int!
		$description: String!
		$pictures: [String]
		$category: Int!
		$negotiable: Boolean!
	) {
		addItem(
			price: $price
			title: $title
			condition: $condition
			description: $description
			pictures: $pictures
			category: $category
			negotiable: $negotiable
		) {
			id
			title
		}
	}
`;

const PostPage = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const [negotiable, setNegotiable] = useState(false);
	const [category, setCategory] = useState(0);
	const [condition, setCondition] = useState(0);

	const [addItem, { error }] = useMutation(ADD_ITEM);

	const requestHandler = () => {
		console.log({
			price,
			title,
			condition,
			description,
			pictures: [],
			category,
			negotiable,
		});
		addItem({
			variables: {
				price,
				title,
				condition,
				description,
				pictures: [''],
				category,
				negotiable: false,
			},
		});
	};

	const sellHandler = () => {
		addItem({});
	};

	if (error) return `Error! ${error.message}`;

	return (
		<div>
			<Navbar />
			<Container>
				<InputTextBlock
					id='Title'
					label='Title'
					onChange={(val) => setTitle(val)}
					placeholder='Title of item'
					value={title}
				/>
				<InputTextBlock
					id='Price'
					label='Price (in $)'
					onChange={(val) => setPrice(val)}
					placeholder='0.00'
					type='number'
					value={price}
				/>
				<InputTextBlock
					id='Description'
					label='Short Description'
					onChange={(val) => setDescription(val)}
					placeholder='Description here...'
					value={description}
				/>
				<div className={styles['checkbox-container']}>
					<div className={styles['label-container']}>
						<label htmlFor='negotiable'>
							Is price <strong>negotiable</strong>?
						</label>
					</div>
					<input
						id='negotiable'
						type='checkBox'
						value={negotiable}
						onChange={(e) => setNegotiable(e.currentTarget.value)}
					/>
				</div>
				<RadioSelector
					options={['books', 'classnotes', 'footwear', 'electronics', 'clothes', 'others']}
					name='category'
					changeHandler={setCategory}
				/>
				<RadioSelector
					options={['used', 'fairly-used', 'used-once', 'brand-new']}
					name='condition'
					changeHandler={setCondition}
				/>
				<div className={styles['button-container']}>
					<button
						className={styles['request-btn']}
						type='button'
						onClick={(e) => {
							e.preventDefault();
							requestHandler();
						}}>
						Request
					</button>{' '}
					or{' '}
					<button
						className={styles['sell-btn']}
						type='button'
						onClick={(e) => {
							e.preventDefault();
							sellHandler();
						}}>
						Sell
					</button>
				</div>
			</Container>
		</div>
	);
};

export default PostPage;
