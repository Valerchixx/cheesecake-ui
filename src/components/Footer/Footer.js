import React from 'react';

import {Logo} from '../../icons/Logo';
import styles from './footer.module.scss';

export const Footer = () => (
	<div className={styles.footerWrap}>
		<div className={styles.contentContainer}>
			<div className={styles.logoWrap}><div><Logo /></div></div>
			<div className={styles.listsWrap}>
				<div className={styles.listWrap}>
					<ul>
						<li className={`${styles.listItem} ${styles.title}`}>Contacts</li>
						<li className={styles.listItem}>+380505507117</li>
						<li className={styles.listItem}>shopCake@gmail.com</li>
						<li className={styles.listItem}>@cakeShop</li>
					</ul>
				</div>
				<div className={styles.listWrap}>
					<ul>
						<li className={`${styles.listItem} ${styles.title}`}>Pages</li>
						<li className={styles.listItem}>Home</li>
						<li className={styles.listItem}>Menu</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
);
