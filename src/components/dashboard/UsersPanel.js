import React from 'react';
import { Link } from 'react-router-dom';
import manage_accounts from '../../assets/manage_accounts.png';

const UsersPanel = () => {
	return (
		<div>
			<Link to='/users' className='link'>
				<div className='panel'>
					<img src={manage_accounts} alt='user icon' height='40px' />
					<div className='panel-span'>Users</div>
				</div>
			</Link>
		</div>
	);
};

export default UsersPanel;
