import React from 'react';

import {Footer} from '../Footer/Footer';
import {Header} from '../Header/Header';
import styles from './layout.module.scss';

export const Layout = ({children}) => (
	<>
		<Header />
		<div className={styles.contentContainer}>{children}</div>
		<Footer />
	</>
);

Layout.propTypes = {
	children: React.node,
};
