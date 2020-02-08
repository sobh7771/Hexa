import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Row from '../Row';
import Column from '../Column';
import Heading from '../Heading/Heading';
import bg from '../../Assets/images/testimonial-bg.png';
import StatisticsItem from './StatisticsItem';

const Section = styled.section`
	padding: 5rem 0;
	background-image: url(${bg});
`;

const Statistics = props => {
	return (
		<Section>
			<Container>
				<Row>
					<Column className="one-quarter">
						<Heading type="primary" as="h1" style={{ textAlign: 'center' }}>
							Company statistics
						</Heading>
					</Column>
					<StatisticsItem
						icon={require('../../Assets/images/Group7.svg')}
						statisticsAbout="Clients"
						dataTo={130}
					/>
					<StatisticsItem
						icon={require('../../Assets/images/idea.svg')}
						statisticsAbout="Projects"
						dataTo={120}
					/>
					<StatisticsItem
						icon={require('../../Assets/images/network.svg')}
						statisticsAbout="Employees"
						dataTo={25}
					/>
				</Row>
			</Container>
		</Section>
	);
};

export default Statistics;
