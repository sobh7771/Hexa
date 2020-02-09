import React from 'react';
import Header from './Header';
// import Container from './Container';
// import Row from './Row';
// import Column from './Column';
import AboutUs from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Statistics from './Statistics';
import Testimonials from './Testimonials';
import Navbar from './Navbar/Navbar';
import Clients from './Clients';
import Footer from './Footer';

const App = () => {
	return (
		<>
			<Navbar />
			<Header
				backgroundImage={require('../Assets/images/about-banner.jpg')}
				gradient="linear-gradient(90deg, rgba(0,0,0,.7), rgba(0,0,0,.7))"
			/>
			<main>
				<AboutUs />
				<Services />
				<Portfolio />
				<Statistics />
				<Testimonials />
				<Clients />
			</main>
			<Footer />
		</>
	);
};

export default App;
