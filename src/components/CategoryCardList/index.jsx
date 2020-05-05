import React from 'react';
import styles from './index.module.scss';
import CategoryCard from '../CategoryCard';

// Test image
import BooksImage from '../../assets/images/books-img.png';

// Props:

// const testProp = {
// 	img: CardImg,
// 	price: 200,
// 	viewers: 10,
// 	category: 'Footwear',
// 	location: 'Plattsburgh',
// 	desc: 'Yeezy Boost 2020 with letters on the side SPLY-350',
// 	date: 'May 10th, 2020',
// 	seller: 'Swornim2310',
// 	type: 'Negotiable',
// };

const categories = ['books', 'class notes', 'footwear', 'electronics', 'clothes'];

const CategoryCardList = () => {
	return (
		<div className={styles['category-card-list-container']}>
			{categories.map((category) => {
				return <CategoryCard title={category} imgUrl={BooksImage} key={category} />;
			})}
		</div>
	);
};

export default CategoryCardList;
