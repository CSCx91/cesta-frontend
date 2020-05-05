import React from 'react';
import styles from './index.module.scss';

const Container = ({ children, isFull = false }) => {
	return (
		<div className={styles['dashboard-bottom-container']}>
			{!isFull ? (
				<div className={styles['dashboard-bottom-content']}>{children}</div>
			) : (
				<div className={styles['dashboard-bottom-content-full']}>
					<div className={styles['dashboard-bottom-content']}>{children}</div>
				</div>
			)}
		</div>
	);
};

export default Container;
