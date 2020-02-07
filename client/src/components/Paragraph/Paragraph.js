import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = props => {
	return <p {...props}>{props.children}</p>;
};

Paragraph.propTypes = {
	children: PropTypes.any.isRequired
};

export default Paragraph;
