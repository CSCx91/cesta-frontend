import React from 'react';
import styles from './index.module.scss';
import CardImg from '../../assets/images/test-card-img.png';
import ResultCard from '../ResultCard';

// Import your testing components here!
// Feel free to remove any test components that were already here

// Props:

const testProp = {
	img: CardImg,
	price: 200,
	viewers: 10,
	category: 'Footwear',
	location: 'Plattsburgh',
	desc: 'Yeezy Boost 2020 with letters on the side SPLY-350',
	date: 'May 10th, 2020',
	seller: 'Swornim2310',
	type: 'Negotiable',
};

const ResultCardList = () => {
	return (
		<div className={styles['card-list-container']}>
			{[...Array(10).keys()].map((element) => {
				return <ResultCard cardProps={testProp} key={element} />;
			})}
		</div>
	);
};

export default ResultCardList;
