import React, { useState } from 'react';
import InputTextBlock from '../../components/InputTextBlock';
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';

import styles from './index.module.scss';
import CategoryCardList from '../../components/CategoryCardList';
import Subheading from '../../components/Subheading';
import RadioSelector from '../../components/RadioSelector';

const SellPage = () => {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState(0.0);
	const [negotiable, setNegotiable] = useState(false);
  const [category, setCategory] = useState(0);
  const [condition, setCondition] = useState(0);
  
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
					onChange={(val) => setAmount(val)}
					placeholder='0.00'
					type='number'
					value={amount}
				/>
				<InputTextBlock
					id='Amount'
					label='Amount (in $)'
					onChange={(val) => setAmount(val)}
					placeholder='0.00'
					type='number'
					value={amount}
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
			</Container>
		</div>
	);
};

export default SellPage;
