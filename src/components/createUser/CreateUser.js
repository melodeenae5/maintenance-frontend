import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../../config';
import UsersSidePanel from './UsersSidePanel';

const CreateUser = ({ isAuth }) => {
	const [newUserInfo, setNewUserInfo] = useState({ admin: false });
	let history = useHistory();
	function handleChange(event) {
		event.preventDefault();
		setNewUserInfo({ ...newUserInfo, [event.target.id]: event.target.value });
		if (event.target.type === 'checkbox') {
			if (event.target.value === 'on') {
				setNewUserInfo({ ...newUserInfo, admin: true });
			} else {
				setNewUserInfo({ ...newUserInfo, admin: false });
			}
		}
	}
	function handleSubmit(event) {
		event.preventDefault();
		axios({
			method: 'POST',
			url: `${apiUrl}/users/register`,
			data: newUserInfo,
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	}
	if (!isAuth) {
		history.push('/');
	}
	return (
		<div>
			<div className='content'>
				<div className='form'>
					<h1>Create User</h1>
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
						admin? <input type='checkbox' id='admin' onChange={handleChange} />
						<br />
						<button type='submit'>Create User</button>
					</form>
				</div>
				<UsersSidePanel />
			</div>
		</div>
	);
};

export default CreateUser;
