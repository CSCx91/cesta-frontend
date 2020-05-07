import React, { useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import styles from './index.module.scss';
import Card from '../Card';
import CardImg from '../../assets/images/test-card-img.png';

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

const GET_ITEMS_QUERY = gql`
	{
		Items {
			id
			price
			title
			condition
			description
			pictures
			category
			negotiable
		}
	}
`;

const CardList = () => {
	const { loading, error, data } = useQuery(GET_ITEMS_QUERY);

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<div className={styles['card-list-container']}>
			{data.Items.map((item) => {
				return <Card cardProps={item} key={item.id} />;
			})}
		</div>
	);
};

// {
//   id
//   price
//   title
//   condition
//   description
//   pictures
//   category
//   negotiable
// }

export default CardList;
