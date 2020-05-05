import React from 'react';
import styles from './index.module.scss';
// eslint-disable-next-line import/no-unresolved

// Import your testing components here!
// Feel free to remove any test components that were already here

const Card = ({ cardProps }) => {
	const { img, price, viewers, category, location, desc, date, seller, type } = cardProps;

	return (
		<div className={styles['card-container']}>
			<div className={styles['card-top']}>
				<img src={img} alt='item img' />
				<span>{viewers}</span>
				<span>{price}</span>
			</div>
			<div className={styles['card-content']}>
				<p className={styles['card-category']}>
					{category} · {location}
				</p>
				<p className={styles['card-description']}>{desc}</p>
				<p className={styles['card-date']}>Posted on {date}0</p>
				<p className={styles['card-seller']}>
					{seller} · {type}
				</p>
			</div>
		</div>
	);
};

export default Card;
