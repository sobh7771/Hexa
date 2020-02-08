import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import './index.scss';
import App from './components/App';

AOS.init({
	duration: 1000
});

ReactDOM.render(<App />, document.getElementById('root'));
