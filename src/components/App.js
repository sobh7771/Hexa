import React from 'react';
import Header from './Header';
// import Container from './Container';
// import Row from './Row';
// import Column from './Column';
import AboutUs from './About';
import Services from './Services';
import Portfolio from './Portfolio';

const App = () => {
	return (
		<>
			<Header
				backgroundImage={require('../Assets/images/about-banner.jpg')}
				gradient="linear-gradient(90deg, rgba(0,0,0,.7), rgba(0,0,0,.7))"
			/>
			<AboutUs />
			<Services />
			<Portfolio />
		</>
	);
};

export default App;
