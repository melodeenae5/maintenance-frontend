import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../../config';
import CreateTask from './CreateTask';
import done from '../../assets/done.png';
import close from '../../assets/close.png';
import add_task from '../../assets/add_task.png';

const ViewTasks = ({ isAuth }) => {
	const [tasks, setTasks] = useState([]);
	const [refreshTasks, setRefreshTasks] = useState(true);
	const [show, setShow] = useState(false);
	function handleClose() {
		setShow(false);
	}
	useEffect(() => {
		const token = localStorage.getItem('token');
		axios({
			method: 'GET',
			url: `${apiUrl}/api/tasks/all`,
			headers: {
				Authorization: `${token}`,
			},
		})
			.then((res) => setTasks(res.data))
			.then(() => setRefreshTasks(false))
			.catch((err) => console.log(err));
	}, []);
	useEffect(() => {
		setRefreshTasks(false);
	}, [refreshTasks]);
	function sortByTask() {
		setTasks(
			tasks.sort(function (a, b) {
				if (a.description.toLowerCase() < b.description.toLowerCase()) {
					return -1;
				}
				if (a.description.toLowerCase() > b.description.toLowerCase()) {
					return 1;
				}
				return 0;
			})
		);
		setRefreshTasks(true);
	}
	function sortByUser() {
		setTasks(
			tasks.sort(function (a, b) {
				if (a.username < b.username) {
					return -1;
				}
				if (a.username > b.username) {
					return 1;
				}
				return 0;
			})
		);
		setRefreshTasks(true);
	}
	function sortByDate() {
		setTasks(
			tasks.sort(function (a, b) {
				if (b.date) {
					if (a.date < b.date) {
						return -1;
					}
					if (a.date > b.date) {
						return 1;
					}
				}

				if (!b.date) {
					if (a.description.toLowerCase() < b.description.toLowerCase()) {
						return -1;
					}
					if (a.description.toLowerCase() > b.description.toLowerCase()) {
						return 1;
					}
				}
				return 0;
			})
		);
		setRefreshTasks(true);
	}
	function sortByStatus() {
		setTasks(
			tasks.sort(function (a, b) {
				if (a.complete < b.complete) {
					return 1;
				}
				if (a.complete > b.complete) {
					return -1;
				}
				return 0;
			})
		);
		setRefreshTasks(true);
	}

	let history = useHistory();
	if (!isAuth) {
		history.push('/');
	}
	return (
		<div>
			<div className='header'>
				<div className='header-title'>
					<h2>Tasks</h2>
					<div title='Add Task'>
						<button
							className='add-icon'
							title='Add Task'
							onClick={() => {
								setShow(true);
							}}>
							<img src={add_task} alt='add task' height='15px' />
						</button>
					</div>
				</div>

				<div className='buttons'>
					<button className='sort-button' onClick={sortByTask}>
						Task
					</button>{' '}
					<button className='sort-button' onClick={sortByUser}>
						User
					</button>{' '}
					{/* <button className='sort-button' onClick={sortByDate}>
						Date
					</button>{' '} */}
					<button className='sort-button' onClick={sortByStatus}>
						Status
					</button>
				</div>
			</div>
			<CreateTask
				show={show}
				handleClose={handleClose}
				setRefreshTasks={setRefreshTasks}
			/>
			<div className='content2'>
				{tasks.map((task) => (
					<div className='row'>
						<span>{task.description}</span>
						<span>{task.username}</span>
						<span>
							{task.date ? task.date.toLocaleString().slice(0, 10) : ''}
						</span>
						<span>
							{task.complete ? (
								<img src={done} alt='checkmark' height='15px' />
							) : (
								<img src={close} alt='X' height='15px' />
							)}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default ViewTasks;
