import React, { useState } from 'react';
import styles from './index.module.scss';
import SearchIcon from '../../assets/images/search-icon.svg';

const SearchBlock = () => {
	const [searchText, setSearchText] = useState('');

	return (
		<div className={styles['search-block-container']}>
			<img src={SearchIcon} alt='Search Icon' />
			<input
				placeholder='Try "Text books MATH 101"'
				value={searchText}
				onChange={(e) => {
					setSearchText(e.currentTarget.value);
				}}
			/>
			<button type='button'>Search</button>
		</div>
	);
};

export default SearchBlock;
