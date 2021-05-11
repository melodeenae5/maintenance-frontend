import React from 'react';
import { Link } from 'react-router-dom';
import task_alt from '../../assets/task_alt.png';

const TasksPanel = () => {
	return (
		<div>
			<Link to='/tasks' className='link'>
				<div className='panel'>
					<img src={task_alt} alt='task icon' height='40px' />
					<div className='panel-span'>Tasks</div>
				</div>
			</Link>
		</div>
	);
};

export default TasksPanel;
