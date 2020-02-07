import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './Column.scss';

export const Div = styled.div`
	flex-grow: 1;
	/* width: ${({ width }) =>
		width === 'half' ? 'calc((100% - 6rem) / 2)' : ''}; */
	/* position: relative; */

	@media only screen and (max-width: 56.25em) {
		/* width: 100%; */
		flex-grow: 0;
	}

	&:not(:last-child) {
		margin-right: 6rem;
		@media only screen and (max-width: 56.25em) {
			margin-right: 0;
			margin-bottom: 6rem;
		}
	}
`;

const Column = props => <Div {...props}>{props.children}</Div>;

Column.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string
};

Column.defaultProps = {
	className: ''
};

export default Column;
