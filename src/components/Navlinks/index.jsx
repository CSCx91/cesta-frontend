import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './index.module.scss';
import CartIcon from '../../assets/images/cart-icon.svg';

const navData = [
	{
		name: 'Home',
		route: '/home',
	},
	{
		name: 'Request',
		route: '/request',
	},
	{
		name: 'Sell',
		route: '/sell',
	},
	{
		name: 'Saved',
		route: '/saved',
	},
];

const NavLinks = () => {
	return (
		<div className={styles['nav-links-container']}>
			{navData.map((data) => (
				<div className={styles['nav-link']}>
					<Link to={data.route}>{data.name}</Link>
				</div>
			))}
			<div className={classnames(styles['nav-link'], styles['cart-link'])}>
				<img src={CartIcon} alt='' className={styles['cart-icon']} />
				Cart
			</div>
			<div>Hi, {'Gonzalo'}</div>
		</div>
	);
};

export default NavLinks;
