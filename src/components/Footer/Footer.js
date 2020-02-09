import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import { Div } from '../Row/Row';
import Social from '../Social';

const Row = styled(Div)`
	justify-content: space-between;
`;

const StyledFooter = styled.footer`
	padding-top: 3%;
	padding-bottom: 2%;
	background-color: #1c1c1c;
`;

const CopyRight = styled.p`
	color: #fff;
	font-size: 1.2rem;
`;

const Logo = styled.img`
	display: block;
	height: 4rem;
	margin: 2rem 0 1.5rem;
`;

const Socials = styled.ul`
	display: flex;
	width: 18rem;
	align-items: center;
	justify-content: space-between;
`;

const Footer = () => (
	<StyledFooter>
		<Container>
			<Row>
				<CopyRight>HexaCIT @ 2020</CopyRight>
				<a href="/">
					<Logo src={require('../../Assets/images/Bitmap.svg')} />
				</a>
				<Socials>
					<Social to="/" className="fab fa-facebook-f" />
					<Social to="/" className="fab fa-twitter" />
					<Social to="/" className="fab fa-instagram" />
					<Social to="/" className="fab fa-linkedin-in" />
					<Social to="/" className="fab fa-dribbble" />
					<Social to="/" className="fab fa-behance" />
				</Socials>
			</Row>
		</Container>
	</StyledFooter>
);

export default Footer;
