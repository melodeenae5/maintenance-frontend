import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../../config';

const CreateUser = ({ show, handleClose, setRefreshUsers }) => {
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
				setRefreshUsers(true);
				handleClose();
				setNewUserInfo({ admin: false });
			})
			.catch((err) => console.log(err));
	}
	if (!show) {
		return null;
	}
	return (
		<div className='modal'>
			<div className='modal-content'>
				<button className='close' onClick={handleClose}>
					&times;
				</button>
				<h2>Create User</h2>
				<div className='form'>
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
			</div>
		</div>
	);
};

export default CreateUser;
