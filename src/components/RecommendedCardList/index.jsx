import React from 'react';
import Carousel from 'react-multi-carousel';

import styles from './index.module.scss';
import CardImg from '../../assets/images/fridge-img.png';
import RecommendedCard from '../RecommendedCard';
import 'react-multi-carousel/lib/styles.css';

// Import your testing components here!
// Feel free to remove any test components that were already here

// Props:

const testProp = {
	img: CardImg,
	price: 200,
	viewers: 10,
	desc: 'Sony Fridge ',
	date: 'May 10th, 2020',
	seller: 'Khanh Le',
	type: 'Negotiable',
};

const RecommendedCardList = ({ deviceType }) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	return (
		<div className={styles['recommended-card-list-container']}>
			<Carousel
				swipeable={false}
				draggable={false}
				showDots
				ssr // means to render carousel on server-side.
				infinite
				responsive={responsive}
				autoPlay={false}
				autoPlaySpeed={1000}
				keyBoardControl
				customTransition='all .5'
				transitionDuration={500}
				containerClass='carousel-container'
				removeArrowOnDeviceType={['tablet', 'mobile']}
				deviceType={deviceType}
				dotListClass='custom-dot-list-style'
				itemClass='carousel-item-padding-40-px'>
				{[...Array(10).keys()].map((element) => {
					return <RecommendedCard cardProps={testProp} key={element} />;
				})}
			</Carousel>
		</div>
	);
};

export default RecommendedCardList;
