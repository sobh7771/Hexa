import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Figure = styled.figure`
	border: 1px solid #ddd;
	text-align: -webkit-center;
`;

const Image = styled.img`
	width: 20rem !important;
	max-height: 100px;
	margin: 2.7rem 0;
`;

const ClientItem = props => (
	<Figure>
		<Image {...props} />
	</Figure>
);

ClientItem.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired
};

export default ClientItem;
