import React from 'react';
import Container from '../Container';
import Row from '../Row';
import styled from 'styled-components';
import PortfolioItem from './PortfolioItem';
import Heading from '../Heading';
import { Div } from '../Column/Column';

const Column = styled(Div)`
	@media screen and (max-width: 1200px) {
		margin-right: 0 !important;
	}
	@media screen and (min-width: 901px) {
		&:not(:last-child) {
			padding-right: 1rem;
		}
	}
`;

const Section = styled.section`
	padding: 9rem 0;
`;

const Paragraph = styled.p`
	margin-bottom: 1rem;
	text-align: center;
	text-transform: uppercase;
`;

const Portfolio = props => {
	return (
		<Section>
			<Container>
				<Paragraph>Our Creative Portfolio</Paragraph>
				<Heading
					as="h3"
					type="tertiary"
					style={{
						textTransform: 'uppercase',
						textAlign: 'center',
						marginBottom: '3rem'
					}}>
					Amazing work
				</Heading>
				<Row>
					<Column data-aos="fade-up">
						<PortfolioItem
							to="/"
							imgSrc={require('../../Assets/images/1544699660_34185.png')}
							title="SkipperFly"
							body="The best choice for guaranteed, reliable services that guarantee the
						rights of both Travelers and Guides"
						/>
					</Column>
					<Column data-aos="fade-up">
						<PortfolioItem
							to="/"
							imgSrc={require('../../Assets/images/1557836933_38536.jpeg')}
							title="BASIT"
							body="Online shopping app"
						/>
					</Column>
					<Column data-aos="fade-up">
						<PortfolioItem
							to="/"
							imgSrc={require('../../Assets/images/1561285128_96961.png')}
							title="Elmaaly Association"
							body="Elmaaly Association For Community Change"
						/>
					</Column>
				</Row>
				<Row>
					<Column data-aos="fade-up">
						<PortfolioItem
							to="/"
							imgSrc={require('../../Assets/images/1561621782_48861.png')}
							title="The Arab Engineers"
							body="The first and most experienced contractors in the Middle East"
						/>
					</Column>
					<Column data-aos="fade-up">
						<PortfolioItem
							to="/"
							imgSrc={require('../../Assets/images/1562573817_53493.png')}
							title="SkipperFly"
							body="The best choice for guaranteed, reliable services that guarantee the
						rights of both Travelers and Guides"
						/>
					</Column>
					<Column data-aos="fade-up">
						<PortfolioItem
							to="/"
							imgSrc={require('../../Assets/images/1544699660_34185.png')}
							title="SkipperFly"
							body="The best choice for guaranteed, reliable services that guarantee the
						rights of both Travelers and Guides"
						/>
					</Column>
				</Row>
			</Container>
		</Section>
	);
};

export default Portfolio;
