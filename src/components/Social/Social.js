import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Link = styled.a`
	color: #fff;
	transition: color 0.3s;
	font-size: 1.6rem;
	&:hover {
		color: #6843fb;
	}
`;

const Social = ({ to, className }) => (
	<li>
		<Link href={to}>
			<i className={className} />
		</Link>
	</li>
);

Social.propTypes = {
	to: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired
};

export default Social;
