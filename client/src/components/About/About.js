import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../Container';
import Row from '../Row';
import Column from '../Column';
import Heading from '../Heading';
import Image from '../Image';
import Paragraph from '../Paragraph';
import Link from '../Link';

const Section = styled.section`
	padding: 13rem 0;
`;

const About = props => {
	return (
		<Section>
			<Container>
				<Row>
					<Column className="half">
						<Image
							src={require('../../Assets/images/1539674290_63351.jpg')}
							width="100%"
						/>
					</Column>
					<Column className="half">
						<Heading as="h4" type="quaternary" className="mb--1rem">
							Integrated services for a perfect outcome.
						</Heading>
						<Heading as="h3" type="tertiary" className="mb--3rem">
							We are committed to helping our clients create a brand from a
							simple idea.
						</Heading>
						<Paragraph className="mb--3rem">
							We at HEXA work with steady steps to improve the IT services
							provided to our clients through a specialized team in areas of
							programming, design and marketing. We aim to reach the top and are
							proud of working with a large base of key clients and companies.
						</Paragraph>
						<Link href="/" primary>
							<i className="fas fa-play-circle mr--1rem"></i>
							Read more
						</Link>
					</Column>
				</Row>
			</Container>
		</Section>
	);
};

About.propTypes = {};

export default About;
