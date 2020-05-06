import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

const RadioSelector = ({ options, name, changeHandler }) => {
	const [selected, setSelected] = useState(0);

	useEffect(() => {
		changeHandler(selected);
	}, [selected]);

	return (
		<div className={styles['radio-container']}>
			<div className={styles['label-container']}>
				<label>{name}</label>
			</div>
			<div className={styles['radio-flex']}>
				{options.map((option, idx) => {
					return (
						<div
							onClick={(e) => {
								e.preventDefault();
								setSelected(idx);
							}}>
							<input id={option} name={name} type='radio' checked={selected === idx} />
							<label htmlFor={option}>{option.split('-').join(' ')}</label>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default RadioSelector;
