import React from 'react';

import SearchBlock from '../SearchBlock';
import NavLinks from '../Navlinks';

import styles from './index.module.scss';

const Navbar = () => {
	return (
		<div className={styles['navbar-container']}>
			<SearchBlock />
			<NavLinks />
		</div>
	);
};

export default Navbar;
