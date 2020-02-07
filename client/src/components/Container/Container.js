import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
	max-width: 114rem;
	margin: 0 auto;
	/* background-color: red; */
	@media only screen and (max-width: 75em) {
		padding: 0 2rem;
	}

	@media only screen and (max-width: 56.25em) {
		max-width: 50rem;
		padding: 0;
	}

	@media only screen and (max-width: 37.5em) {
		padding: 0 1rem;
	}
`;

const Container = props => <Div {...props}>{props.children}</Div>;

Container.propTypes = {
	children: PropTypes.any.isRequired
};

export default Container;
