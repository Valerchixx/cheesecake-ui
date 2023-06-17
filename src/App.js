import './App.scss';

import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';

import {Login} from './pages/Login/Login';
import {Menu} from './pages/Menu/Menu';
import {Profile} from './pages/Profile/Profile';

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='*' element={<Menu />} />
					<Route path='/profile' element={<Profile />} />
				</Routes>
			</Router>

		</div>
	);
}

export default App;
