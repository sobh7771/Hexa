import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled.a(props => {
	let style = {
		'font-family': "'Montserrat', sans-serif",
		'font-size': '1.1rem',
		'text-transform': 'uppercase',
		'font-weight': '500',
		color: 'inherit',
		display: 'inline-block',
		padding: '1rem 2.4rem',
		border: '2px solid transparent',
		cursor: 'pointer',
		transition: 'all 0.3s'
	};

	if (props.primary) {
		style = {
			...style,

			'background-color': '#00ca9d',
			color: '#fff',

			'&:hover': {
				color: '#00ca9d',
				border: '2px solid #00ca9d',
				'background-color': 'transparent'
			}
		};
	} else if (props.basic)
		return {
			color: 'inherit'
		};

	return style;
});

const Link = props => {
	return <StyledLink {...props}> {props.children}</StyledLink>;
};

Link.propTypes = {
	children: PropTypes.any.isRequired,
	primary: PropTypes.bool,
	basic: PropTypes.bool
};

Link.defaultProps = {
	primary: false
};

export default Link;
