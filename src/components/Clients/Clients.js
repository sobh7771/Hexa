import React from 'react';
import styled from 'styled-components';
import OwlCarousel from 'react-owl-carousel';
import Container from '../Container';
import Heading from '../Heading';
import ClientItem from './ClientItem';

const Section = styled.section`
	padding: 2rem 0 10rem 0;
`;

const Paragraph = styled.p`
	margin-bottom: 2rem;
	text-align: center;
`;

const owlOptions = {
	className: 'owl-theme',
	responsiveClass: true,
	margin: 30,
	responsive: {
		0: {
			items: 1,
			nav: false,
			dots: false
		},
		900: {
			items: 2,
			nav: false,
			dots: false
		},
		1000: {
			items: 3,
			nav: false,
			dots: false
		},
		1300: {
			items: 4,
			nav: false,
			dots: false
		}
	}
};

const Clients = () => (
	<Section>
		<Container>
			<Heading type="secondary--2" as="h2" className="text-align--center">
				Our Clients
			</Heading>
			<Paragraph>Our clients we take pride in.</Paragraph>
			<OwlCarousel {...owlOptions}>
				<ClientItem
					src={require('../../Assets/images/evento.png')}
					alt="Evento"
				/>
				<ClientItem src={require('../../Assets/images/en.png')} alt="Enjaz" />
				<ClientItem
					src={require('../../Assets/images/p.png')}
					alt="Palestinian Basketball Federation"
				/>
				<ClientItem
					src={require('../../Assets/images/sabaya-home.png')}
					alt="Sabaya Home"
				/>
			</OwlCarousel>
		</Container>
	</Section>
);

export default Clients;
