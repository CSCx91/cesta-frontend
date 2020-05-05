import React, { useState } from 'react';
import classnames from 'classnames';
import Avatar from '../../assets/images/avatar-placeholder.svg';
import ArrowDown from '../../assets/images/arrow-down.svg';
import styles from './index.module.scss';

const ProfileButton = (props) => {
	const { name } = props;

	const [showDropDown, setShowDropDown] = useState(false);

	return (
		<div>
			<button
				type='button'
				className={styles['profile-btn']}
				onClick={() => setShowDropDown(!showDropDown)}>
				<img className={styles['avatar-img']} src={Avatar} alt='' />
				<span className={styles['greeting-container']}>Hi, {name}!</span>
				<img className={styles['arrow-img']} src={ArrowDown} alt='' />
			</button>
			<div
				className={classnames([
					styles['profile-dropdown'],
					showDropDown && styles['profile-dropdown--show'],
				])}>
				<div className={styles['dropdown-item']}>
					<button type='button'>Profile</button>
				</div>
				<div className={styles['dropdown-item']}>
					<button type='button'>Logout</button>
				</div>
			</div>
		</div>
	);
};

export default ProfileButton;
