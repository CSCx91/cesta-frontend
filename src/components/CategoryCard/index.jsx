import React from 'react';
import styles from './index.module.scss';

const CategoryCard = ({ imgUrl, title }) => {
	const backgroundImg = {
		backgroundImage: `url(${imgUrl})`,
	};
	return (
		<div style={backgroundImg} className={styles['category-card-container']}>
			<div className={styles['category-card-content']}>
				<p>{title}</p>
			</div>
		</div>
	);
};

export default CategoryCard;
