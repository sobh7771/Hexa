import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '../../Image';
import Link from '../../Link';
import Heading from '../../Heading';
import Paragraph from '../../Paragraph';

const Wrapper = styled.div`
	display: flex;
	align-items: flex-start;
`;

const Service = ({ imgSrc, to, title, body }) => {
	return (
		<Wrapper>
			<Image src={imgSrc} width="25%" className="mr--1rem" />
			<Link basic href={to}>
				<Heading as="h5" type="quinary" style={{ marginBottom: '0.5rem' }}>
					{title}
				</Heading>
				<Paragraph style={{ color: '#fff' }}>{body}</Paragraph>
			</Link>
		</Wrapper>
	);
};

Service.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired
};

export default Service;
