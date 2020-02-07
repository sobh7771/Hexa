import React from 'react';
// import PropTypes from 'prop-types';
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

const Services = props => {
	return (
		<Section>
			<Container>
				<Row>
					<Column className="one-third">
						<Service
							title="Marketing"
							body="We provide you with distinguished and exceptional methods to help you spread your brand through well..."
							imgSrc={require('../../Assets/images/3.svg')}
							to="/"
						/>
					</Column>
					<Column className="one-third">
						<Service
							title="Designing"
							body="We provide you with error-free novel designs of special taste worthy of your website."
							imgSrc={require('../../Assets/images/2.svg')}
							to="/"
						/>
					</Column>
					<Column className="one-third">
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
};

Services.propTypes = {};

export default Services;
