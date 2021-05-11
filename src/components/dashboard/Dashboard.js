import React from 'react';
import { useHistory } from 'react-router-dom';
import ChatsPanel from './ChatsPanel';
import UsersPanel from './UsersPanel';
import TasksPanel from './TasksPanel';

const Dashboard = ({ isAuth }) => {
	let history = useHistory();
	if (!isAuth) {
		history.push('/');
	}
	return (
		<div className='content'>
			<TasksPanel />
			<ChatsPanel />
			<UsersPanel />
		</div>
	);
};

export default Dashboard;
