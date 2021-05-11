import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../../config';

const CreateTask = ({ show, handleClose, setRefreshTasks }) => {
	const [newTask, setNewTask] = useState({ complete: false });
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
			.then((res) =>
				setUsers(res.data.sort((a, b) => (a.firstName > b.firstName ? 1 : -1)))
			)
			// .then(() => setRefresh(false))
			.catch((err) => console.log(err));
	}, []);
	function handleChange(event) {
		event.preventDefault();
		setNewTask({ ...newTask, [event.target.id]: event.target.value });

		if (event.target.type === 'checkbox') {
			if (event.target.value === 'on') {
				setNewTask({ ...newTask, complete: true });
			} else {
				setNewTask({ ...newTask, complete: false });
			}
		}
	}
	function handleSubmit(event) {
		event.preventDefault();
		const token = localStorage.getItem('token');
		setNewTask({ ...newTask, date: Date.now() });
		// if (!newTask.user_id || newTask.user_id === '') {
		// 	setNewTask({
		// 		...newTask,
		// 		user_id: users[0]._id,
		// 		username: users[0].username,
		// 	});
		// }
		axios({
			method: 'POST',
			url: `${apiUrl}/api/tasks`,
			data: newTask,
			headers: {
				Authorization: `${token}`,
			},
		})
			.then((res) => {
				handleClose();
				setRefreshTasks(true);
				setNewTask({ complete: false });
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
				<h2>Add Task</h2>
				<div className='form'>
					<form onSubmit={handleSubmit}>
						<input
							type='text'
							required
							id='description'
							placeholder='Task Description'
							onChange={handleChange}
						/>
						<br />
						<input
							list='users-list'
							required
							id='username'
							placeholder='choose user'
							onChange={handleChange}
						/>
						<datalist id='users-list'>
							{users.map((user) => (
								<option value={user.username} />
							))}
						</datalist>
						<br />
						complete?{' '}
						<input type='checkbox' id='complete' onChange={handleChange} />
						<br />
						<button type='submit'>Done</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CreateTask;
