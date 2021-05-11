import React from 'react';
import { Link } from 'react-router-dom';
import contact_mail from '../../assets/contact_mail.png';

const ChatsPanel = () => {
	return (
		<div>
			<Link to='/chats' className='link'>
				<div className='panel'>
					<img src={contact_mail} alt='contact icon' height='40px' />
					<div className='panel-span'>Chats</div>
				</div>
			</Link>
		</div>
	);
};

export default ChatsPanel;
