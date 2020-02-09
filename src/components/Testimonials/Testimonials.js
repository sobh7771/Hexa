import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import styled from 'styled-components';
import Container from '../Container';
import bgImg from '../../Assets/images/parallax-bg28.jpg';

const Section = styled.section`
	padding: 13rem 0;
	background-image: linear-gradient(
			90deg,
			rgba(0, 0, 0, 0.7),
			rgba(0, 0, 0, 0.7)
		),
		url(${bgImg});
	background-position-y: ${({ position }) => `${position}px`};
	/* transition: all 1.5s ease-out; */
`;

const Figure = styled.figure`
	margin-right: 6rem;
	@media screen and (max-width: 900px) {
		margin-right: 0;
		margin-bottom: 3rem;
	}
`;

const Image = styled.img`
	width: 15rem !important;
	height: 15rem;
	border-radius: 50%;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 900px) {
		flex-direction: column;
		text-align: center;
	}
`;

const Quote = styled.p`
	color: #bfbfbf;
	margin-bottom: 2rem;
`;

const Name = styled.h6`
	font-size: 1.2rem;
	color: #fff;
	font-weight: 400;
	text-transform: uppercase;
`;

class Testimonials extends React.Component {
	// state = {
	// 	position: 0,
	// 	scrollDirection: ''
	// };

	// sectionRef = React.createRef();

	// componentDidMount() {
	// 	let initialPosition = 0;

	// 	window.addEventListener('scroll', () => {
	// 		const position = this.sectionRef.current.getBoundingClientRect().y;
	// 		let scrollDirection;
	// 		if (position < initialPosition) scrollDirection = 'down';
	// 		else scrollDirection = 'up';

	// 		initialPosition = position;

	// 		this.setState({ position: position * -1, scrollDirection });
	// 	});
	// }

	render() {
		return (
			<Section {...this.state}>
				<Container>
					<OwlCarousel className="owl-theme" loop items={1} nav>
						<div className="item">
							<Wrapper>
								<Figure>
									<Image
										src={require('../../Assets/images/1535832857_25279.png')}
									/>
								</Figure>
								<div>
									<Quote>
										HEXA Company is one of the best companies that we have been
										dealing with to implement a number of projects for our
										office in Jeddah and praise God with high skills, and I say
										that one of the most important advantages of any company is
										to provide professionalism in the work which is what
										distinguish the brothers in thank you my loved ones you
										created..
									</Quote>

									<Name>Nawaf Asiri</Name>
								</div>
							</Wrapper>
						</div>
					</OwlCarousel>
				</Container>
			</Section>
		);
	}
}

export default Testimonials;
