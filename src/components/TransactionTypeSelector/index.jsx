import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

const TransactionTypeSelector = () => {
	// true is for sale and false is for requests
	const [transactionType, setTransactionType] = useState(true);

	return (
		<div className={styles['transaction-type-bar']}>
			<button
				className={classnames([
					styles['transaction-type'],
					transactionType && styles['transaction-type--active'],
				])}
				onClick={() => !transactionType && setTransactionType(true)}
				type='button'>
				For Sale
			</button>
			<button
				className={classnames([
					styles['transaction-type'],
					!transactionType && styles['transaction-type--active'],
				])}
				onClick={() => transactionType && setTransactionType(false)}
				type='button'>
				Requests
			</button>
		</div>
	);
};

export default TransactionTypeSelector;
