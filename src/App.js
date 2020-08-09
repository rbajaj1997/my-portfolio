import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
	return (
		<div className="container">
			<Router basename={process.env.PUBLIC_URL}>
				<Navbar />
				<Switch>
					<Route path="/about" exact component={About} />
					<Route path="/projects" exact component={Projects} />
					<Route path="/contact" exact component={Contact} />
					<Route path="/" exact component={Home} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
