import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
	display: block;
	/* width: 100%; */
`;

const Image = props => {
	return <Img {...props} />;
};

Image.propTypes = {
	src: PropTypes.string.isRequired
};

export default Image;
