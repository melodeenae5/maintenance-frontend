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
						to='/tasks'
						className='nav-link'
						activeClassName='nav-active'>
						Tasks
					</NavLink>
				</li>

				<li>
					<NavLink
						to='/chats'
						className='nav-link'
						activeClassName='nav-active'>
						Chats
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/users'
						className='nav-link'
						activeClassName='nav-active'>
						Users
					</NavLink>
				</li>
				<button className='logout' onClick={logout}>
					Sign out
				</button>
			</ul>
		</div>
	);
};

export default Navbar;
