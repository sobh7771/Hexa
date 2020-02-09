import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

export const Div = styled.div`
	display: flex;
	align-items: center;

	@media only screen and (max-width: 56.25em) {
		flex-direction: column;
	}

	&:not(:last-child) {
		margin-bottom: 8rem;
		@media only screen and (max-width: 56.25em) {
			margin-bottom: 6rem;
		}
	}
`;

const Row = ({ children }) => <Div>{children}</Div>;

Row.propTypes = {
	children: Proptypes.any.isRequired
};

export default Row;
