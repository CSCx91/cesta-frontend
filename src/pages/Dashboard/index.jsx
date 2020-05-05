import React from 'react';
import Navbar from '../../components/Navbar';
import styles from './index.module.scss';
import CardList from '../../components/CardList';
import TransactionTypeSelector from '../../components/TransactionTypeSelector';
import Subheading from '../../components/Subheading';
import Container from '../../components/Container';
import CategoryCardList from '../../components/CategoryCardList';
import RecommendedCardList from '../../components/RecommendedCardList';

const Dashboard = () => {
	return (
		<>
			<div>
				<Navbar />
				<TransactionTypeSelector />
			</div>
			<Container>
				<Subheading title='Categories' />
				<CategoryCardList />
			</Container>

			<Container isFull>
				<div className={styles['dashboard-recommended-container']}>
					<div>
						<Subheading title='Recommended For You' />
						<RecommendedCardList />
					</div>
				</div>
			</Container>

			<Container>
				<Subheading title='Latest items' />
				<CardList />
			</Container>
		</>
	);
};

export default Dashboard;
