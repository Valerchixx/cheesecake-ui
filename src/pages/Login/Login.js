import React from 'react';
import {Link} from 'react-router-dom';

import styles from './login.module.scss';

export const Login = () => (
	<div className={styles.modal}>
		<div className={styles.modalContent}>
			<h1>Вход</h1>
			<form action='sumbit'>
				<div className={styles.formWrap}>
					<label htmlFor='email'>Email</label>
					<input type='text' name='email' />
				</div>
				<div className={styles.formWrap}>
					<label htmlFor='password'>Пароль</label>
					<input type='password' name='password' />
				</div>
				<button className={styles.btn} type='button'>Войти</button>
			</form>
			<div className={styles.linkWrap}>
				<p>Впервые у нас?</p>
				<Link className={styles.link} to='/signUp'>Зарегестрироваться</Link>
			</div>
		</div>
	</div>
);
