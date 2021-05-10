import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { apiUrl } from '../config';

const CreateAccount = ({ setToken, setRefresh, setIsAuth, isAuth }) => {
	const [newAdminInfo, setNewAdminInfo] = useState({ admin: true });
	let history = useHistory();
	function handleChange(event) {
		event.preventDefault();
		setNewAdminInfo({ ...newAdminInfo, [event.target.id]: event.target.value });
	}
	function handleSubmit(event) {
		event.preventDefault();
		axios({
			method: 'POST',
			url: `${apiUrl}/users/register`,
			data: newAdminInfo,
		})
			.then((res) => {
				console.log(res);
				if (res.data.token) {
					localStorage.setItem('token', res.data.token);
					localStorage.setItem('userId', res.data.user_id);
					localStorage.setItem('username', res.data.username);
					setToken(res.data.token);
					setIsAuth(true);
					history.push('/dashboard');
					setRefresh(true);
				}
			})
			.catch((err) => console.log(err));
	}
	if (isAuth) {
		history.push('/dashboard');
	}
	return (
		<div>
			<div className='form'>
				<h1>Create Account</h1>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						required
						id='firstName'
						placeholder='First Name'
						onChange={handleChange}
					/>
					<br />
					<input
						type='text'
						required
						id='lastName'
						placeholder='Last Name'
						onChange={handleChange}
					/>
					<br />
					<input
						type='text'
						required
						id='username'
						placeholder='Username'
						onChange={handleChange}
					/>
					<br />
					<input
						type='email'
						required
						id='email'
						placeholder='Email'
						onChange={handleChange}
					/>
					<br />
					<input
						type='password'
						required
						id='password'
						placeholder='Password'
						onChange={handleChange}
					/>
					<br />
					<button type='submit'>Create Admin Account</button>
				</form>
			</div>
		</div>
	);
};

export default CreateAccount;
