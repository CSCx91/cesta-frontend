import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

import EmailIcon from '../../assets/images/email-icon.svg';
import PasswordIcon from '../../assets/images/password-icon.svg';
import EyeIcon from '../../assets/images/eye-icon.svg';

const InputBlock = (props) => {
	const { id, label, onChange, placeholder, type = 'text', value } = props;

	const [focus, setFocus] = useState(false);

	const [tempType, setTempType] = useState(type);

	const changeHandler = (e) => {
		e.preventDefault();
		onChange(e.currentTarget.value);
	};

	const changeTempType = () => {
		setTempType(tempType === 'password' ? 'email' : 'password');
	};

	return (
		<div className={styles['input-block-container']}>
			<div className={styles['label-container']}>
				<label htmlFor={id}>{label}</label>
			</div>
			<div
				className={classnames([
					styles['input-super-container'],
					focus && styles['input-super-container--focused'],
				])}>
				<div className={classnames([styles['icon-container']])}>
					<img
						alt=''
						className={type === 'password' ? styles['password-icon'] : styles['email-icon']}
						src={type === 'password' ? PasswordIcon : EmailIcon}
					/>
				</div>
				<div className={styles['input-container']}>
					<input
						className={type === 'password' && styles['password-input']}
						id={id}
						onBlur={() => setFocus(false)}
						onChange={(e) => changeHandler(e)}
						onFocus={() => setFocus(true)}
						placeholder={placeholder}
						type={tempType}
						value={value}
					/>
					{type === 'password' && (
						<button type='button' onClick={(e) => changeTempType(e)}>
							<img alt='' src={EyeIcon} className={styles['eye-icon']} />
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default InputBlock;
