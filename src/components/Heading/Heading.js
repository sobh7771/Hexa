import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1(props => {
	const commonStyles = {
		fontFamily: "'Montserrat', sans-serif",
		fontWeight: 600,
		color: '#fff'
	};

	const styles = {
		primary: {
			...commonStyles,
			fontSize: '3.6rem',
			color: '#6f6f6f',
			fontWeight: 700
		},
		secondary: {
			...commonStyles,
			fontFamily: "'Roboto', sans-serif",
			fontSize: '2.5rem',
			letterSpacing: '0px'
		},
		tertiary: {
			...commonStyles,
			fontSize: '1.8rem',
			color: '#232323'
		},
		quaternary: {
			...commonStyles,
			fontSize: '1.6rem',
			color: '#00ca9d'
		},
		quinary: {
			...commonStyles,
			fontSize: '1.4rem'
		}
	};

	return styles[props.type];
});

const Heading = props => <Title {...props}>{props.children}</Title>;

Heading.propTypes = {
	type: PropTypes.string.isRequired,
	className: PropTypes.string
};

Heading.defaultProps = {
	className: ''
};

export default Heading;
