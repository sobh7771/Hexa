import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './index.scss';
import App from './components/App';

AOS.init({
	duration: 1000
});

ReactDOM.render(<App />, document.getElementById('root'));
