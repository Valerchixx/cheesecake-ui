/* eslint-disable no-useless-concat */
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

console.log('%c' + 'Hold Up!', 'color: #7289DA; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;');

reportWebVitals();
