import './App.css';
import { Route } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import Navbar from './components/Navbar';

function App() {
	return (
		<div>

				<Navbar />
				<Route path='/create-user' render={() => <CreateUser />} />
			
		</div>
	);
}

export default App;
