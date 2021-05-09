import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navbar'>
			<ul className='navcontent'>
				<li>
					<NavLink
						to='/dashboard'
						className='nav-link'
						activeClassName='nav-active'>
						Dashboard
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/create-user'
						className='nav-link'
						activeClassName='nav-active'>
						Create Users
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/create-task'
						className='nav-link'
						activeClassName='nav-active'>
						Create Tasks
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/assign-task'
						className='nav-link'
						activeClassName='nav-active'>
						Assign Tasks
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/task-status'
						className='nav-link'
						activeClassName='nav-active'>
						View Task Status
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/messages'
						className='nav-link'
						activeClassName='nav-active'>
						Messaging
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
