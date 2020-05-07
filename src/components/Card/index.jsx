import React from 'react';
import styles from './index.module.scss';
// eslint-disable-next-line import/no-unresolved

const conditionRating = {
	0: 'Used',
	1: 'Fairly Used',
	2: 'Used Once',
	3: 'Brand New',
};

const imgNotFound = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';

const Card = ({ cardProps }) => {
	const { pictures, price, title, category, condition } = cardProps;

	return (
		<div className={styles['card-container']}>
			<div className={styles['card-top']}>
				<img src={pictures[0] ? pictures[0] : imgNotFound} alt='item img' />
				{/* <span>{viewers}</span> */}
				
			</div>
			<div className={styles['card-content']}>
				<p className={styles['card-category']}>
					{category} · {conditionRating[condition]}
				</p>
				<p className={styles['card-description']}>{title} · ${price}</p>
				{/* <p className={styles['card-date']}>Posted on {date}</p> */}
				{/* <p className={styles['card-seller']}>
					{seller} · {type}
				</p> */}
			</div>
		</div>
	);
};

export default Card;
