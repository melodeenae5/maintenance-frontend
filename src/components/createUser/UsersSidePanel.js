import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../../config';

const UsersSidePanel = () => {
	const [users, setUsers] = useState([]);
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
			// .then(() => console.log(users))
			// .then(() => setRefresh(false))
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className='side-content'>
			{users.map((user) => (
				<p>{user.firstName}</p>
			))}
		</div>
	);
};

export default UsersSidePanel;
