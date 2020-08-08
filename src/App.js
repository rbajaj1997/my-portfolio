import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
	return (
		<div className="container">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/about" component={About} />
					<Route path="/projects" component={Projects} />
					<Route path="/contact" component={Contact} />
					<Route path="/" component={Home} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
