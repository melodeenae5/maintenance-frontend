import './App.css';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import Navbar from './components/Navbar';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';

function App() {
	const [token, setToken] = useState(localStorage.getItem('token'));
	const [refresh, setRefresh] = useState(true);
	const [isAuth, setIsAuth] = useState(token ? true : false);
	return (
		<div>
			<Route
				path='/'
				exact
				render={() => (
					<Login
						setToken={setToken}
						setRefresh={setRefresh}
						setIsAuth={setIsAuth}
						isAuth={isAuth}
					/>
				)}
			/>
			<Route
				path='/create'
				exact
				render={() => (
					<CreateAccount
						setToken={setToken}
						setRefresh={setRefresh}
						setIsAuth={setIsAuth}
						isAuth={isAuth}
					/>
				)}
			/>
			<Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
			<Route path='/create-user' render={() => <CreateUser />} />
		</div>
	);
}

export default App;
