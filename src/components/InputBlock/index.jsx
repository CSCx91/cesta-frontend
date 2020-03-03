import React from 'react';

import styles from './index.module.scss';

const InputBlock = (props) => {
	const { label, value, onChange, type = 'text', id } = props;

	const changeHandler = (e) => {
		e.preventDefault();
		onChange(e.currentTarget.value);
	};

	return (
		<div>
			<div className={styles['label-container']}>
				<label htmlFor={id}>{label}</label>
			</div>
			<input id={id} type={type} value={value} onChange={(e) => changeHandler(e)} />
		</div>
	);
};

export default InputBlock;
