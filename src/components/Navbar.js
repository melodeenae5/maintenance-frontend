import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';

const Navbar = ({ isAuth, setIsAuth }) => {
	let history = useHistory();
	function logout() {
		localStorage.clear();
		setIsAuth(false);
		history.push('/');
	}
	if (!isAuth) {
		return null;
	}
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
				<button onClick={logout}>Logout</button>
			</ul>
		</div>
	);
};

export default Navbar;
