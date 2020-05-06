import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

const InputTextBlock = ({ id, label, onChange, placeholder, type = 'text', value }) => {
	const [focus, setFocus] = useState(false);

	const changeHandler = (e) => {
		onChange(e.currentTarget.value);
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
				<div className={styles['input-container']}>
					<input
						id={id}
						onBlur={() => setFocus(false)}
						onChange={(e) => changeHandler(e)}
						onFocus={() => setFocus(true)}
						placeholder={placeholder}
						type={type}
						value={value}
					/>
				</div>
			</div>
		</div>
	);
};

export default InputTextBlock;
