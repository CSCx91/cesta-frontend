import React from 'react';
import BooksImg from '../../assets/images/books.png';
import ClassNotesImg from '../../assets/images/class-notes.png';
import FootwearImg from '../../assets/images/footwear.png';
import ElectronicsImg from '../../assets/images/electronics.png';
import ClothesImg from '../../assets/images/clothes.png';

import styles from './index.module.scss';

const CategorySelector = () => {
	// use to select category
	// const [category, setCategory] = useState('');

	return (
		<div className={styles['category-container']}>
			<div>Categories</div>
			<div className={styles['category-img-container']}>
				<div className={styles['category-img']}>
					<img src={BooksImg} alt='book-img' />
					<div>Books</div>
				</div>
				<div className={styles['category-img']}>
					<img src={ClassNotesImg} alt='classnotes-img' />
					<div>Class Notes</div>
				</div>
				<div className={styles['category-img']}>
					<img src={FootwearImg} alt='footwear-img' />
					<div>Footwear</div>
				</div>
				<div className={styles['category-img']}>
					<img src={ElectronicsImg} alt='electronics-img' />
					<div>Electronics</div>
				</div>
				<div className={styles['category-img']}>
					<img src={ClothesImg} alt='clothes-img' />
					<div>Clothes</div>
				</div>
			</div>
		</div>
	);
};

export default CategorySelector;
