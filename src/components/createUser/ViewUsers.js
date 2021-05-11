import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../../config';
import done from '../../assets/done.png';
import person_add from '../../assets/person_add.png';
import CreateUser from './CreateUser';

const ViewUsers = ({ isAuth }) => {
	const [users, setUsers] = useState([]);
	const [refreshUsers, setRefreshUsers] = useState(true);
	const [show, setShow] = useState(false);
	function handleClose() {
		setShow(false);
	}
	useEffect(() => {
		setRefreshUsers(false);
	}, [refreshUsers]);
	useEffect(() => {
		const token = localStorage.getItem('token');
		axios({
			method: 'GET',
			url: `${apiUrl}/users`,
			headers: {
				Authorization: `${token}`,
			},
		})
			.then(
				(res) =>
					setUsers(
						res.data.sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
					)
				// console.log(res.data)
			)

			.catch((err) => console.log(err));
	}, []);
	let history = useHistory();
	if (!isAuth) {
		history.push('/');
	}
	return (
		<div>
			<div className='header'>
				<div className='header-title'>
					<h2>Users</h2>
					<div title='Add User'>
						<button
							className='add-icon'
							title='Add User'
							onClick={() => {
								setShow(true);
							}}>
							<img src={person_add} alt='add user' height='15px' />
						</button>
					</div>
				</div>
				<div className='header-admin'>Admin?</div>
			</div>
			<CreateUser
				show={show}
				handleClose={handleClose}
				setRefreshUsers={setRefreshUsers}
			/>
			<div className='content2'>
				{users.map((user) => (
					<div className='row'>
						<span>
							{user.firstName} {user.lastName}
						</span>
						<span>{user.username}</span>
						<span>{user.email}</span>
						<span>
							{user.admin ? (
								<img src={done} alt='checkmark' height='15px' />
							) : (
								''
							)}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default ViewUsers;
