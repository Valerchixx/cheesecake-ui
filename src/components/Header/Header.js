import React from 'react';

import {CartIcon} from '../../icons/CartIcon';
import {Logo} from '../../icons/Logo';
import styles from './header.module.scss';

export const Header = () => (
	<div className={styles.headerWrap}>
		<div className={styles.contentContainer}>
			<div className={styles.logoWrap} ><Logo /></div>
			<nav className={styles.navWrap}>
				<div className={styles.navItem}><p>Home</p></div>
				<div className={styles.navItem}><p>Menu</p></div>
				<div className={styles.cartItem}><CartIcon /></div>
			</nav>
		</div>
		<hr />
	</div>
);
