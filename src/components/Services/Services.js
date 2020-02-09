import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Row from '../Row';
import Column from '../Column';
import Service from './Service/Service';

const Section = styled.section`
	padding: 13rem 0;
	background-color: #00ca9d;
	color: '#fff';
`;

const Services = props => (
	<Section>
		<Container>
			<Row>
				<Column
					className="one-third"
					data-aos="fade-up"
					data-aos-duration="300">
					<Service
						title="Marketing"
						body="We provide you with distinguished and exceptional methods to help you spread your brand through well..."
						imgSrc={require('../../Assets/images/3.svg')}
						to="/"
					/>
				</Column>
				<Column
					className="one-third"
					data-aos="fade-up"
					data-aos-duration="600">
					<Service
						title="Designing"
						body="We provide you with error-free novel designs of special taste worthy of your website."
						imgSrc={require('../../Assets/images/2.svg')}
						to="/"
					/>
				</Column>
				<Column
					className="one-third"
					data-aos="fade-up"
					data-aos-duration="900">
					<Service
						title="Development"
						body="The most powerful and advanced programming languages at the hands of highly-experienced professional..."
						imgSrc={require('../../Assets/images/1.svg')}
						to="/"
					/>
				</Column>
			</Row>
		</Container>
	</Section>
);

export default Services;
