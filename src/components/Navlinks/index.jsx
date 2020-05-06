import React from 'react';
import { Link } from 'react-router-dom';
import ProfileButton from '../ProfileButton';
import styles from './index.module.scss';
// import CartImage from '../../assets/images/cart-icon.svg';

const navData = [
	{
		name: 'Home',
		route: '/home',
	},
	{
		name: 'Post',
		route: '/post',
	},
	{
		name: 'Saved',
		route: '/saved',
	},
];

// const CartIcon = (props) => {
// 	const { itemsInCart } = props;

// 	return (
// 		<div>
// 			{itemsInCart !== 0 && <div className={styles['cart-item-count']}>{itemsInCart}</div>}

// 			<img src={CartImage} alt='' className={styles['cart-icon']} />
// 		</div>
// 	);
// };

const NavLinks = () => {
	return (
		<div className={styles['nav-links-container']}>
			{navData.map((data) => (
				<div className={styles['nav-link']}>
					<Link to={data.route}>{data.name}</Link>
				</div>
			))}
			{/* <div className={styles['nav-link']}>
				<div className={styles['cart-link']}>
					<CartIcon itemsInCart={4} />
					<div>Cart</div>
				</div>
			</div> */}
			<div className={styles['nav-link']}>
				<ProfileButton name='Gonzalo' />
			</div>
		</div>
	);
};

export default NavLinks;
