import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledItem = styled.li`
	&:not(:last-child) {
		margin-right: 2rem;
	}

	@media screen and (max-width: 900px) {
		margin-right: 0 !important;
		&:not(:last-child) {
			border-bottom: 1px solid rgba(255, 255, 255, 0.06);
		}
	}
`;

const NavbarLink = styled.a`
	font-family: 'Montserrat', sans-serif;
	/* letter-spacing: 1px; */
	font-weight: 600;
	font-size: 1.2rem;
	color: #fff;
	text-transform: uppercase;
	transition: color 0.3s;
	/* padding-right: 1rem; */

	&:hover {
		color: rgba(255, 255, 255, 0.6);
	}

	@media screen and (max-width: 900px) {
		width: 100%;
		display: block;
		padding: 0.7rem 0 0.7rem 2rem;
	}
`;

const NavbarItem = ({ to, children }) => {
	return (
		<StyledItem>
			<NavbarLink href={to}>{children}</NavbarLink>
		</StyledItem>
	);
};

NavbarItem.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired
};

export default NavbarItem;
