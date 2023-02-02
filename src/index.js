import ReactDOM from 'react-dom';
import React from 'react';
import './Assets/CSS/reset.css';
import './Assets/CSS/style.css';
import { InitialPage } from './Components/Page/InitialPage/InitialPage';

function App() {
	return (
		<>
			<InitialPage page={'initial'} />
		</>
	);
}

ReactDOM.render(<App />, document.querySelector('.root'));
