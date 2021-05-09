import React, { useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../config';

const CreateUser = () => {
	const [newUserInfo, setNewUserInfo] = useState({});
	function handleChange(event) {
		event.preventDefault();
		setNewUserInfo({ ...newUserInfo, [event.target.id]: event.target.value });
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
	return (
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
					<button type='submit'>Create User</button>
				</form>
			</div>
		</div>
	);
};

export default CreateUser;
