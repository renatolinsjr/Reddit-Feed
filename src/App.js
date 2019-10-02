import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Buttons from './Components/Buttons';
import Lista from './Components/Lista';
import Loadmore from './Components/Loadmore';
import RedditContextProvider from './Contexts/RedditContext';

function App() {
	return (
		<div className="App">
			<RedditContextProvider>
				<Navbar />
				<Buttons />
				<Lista />
				<Loadmore />
			</RedditContextProvider>
		</div>
	);
}

export default App;
