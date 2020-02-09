import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../Heading';
import Image from '../Image';
import Link from '../Link';

const StyledHeader = styled.header`
	height: 100vh;
	background-size: cover;
	background-image: ${props =>
		props.gradient
			? `${props.gradient}, url(${props.backgroundImage})`
			: `url(${props.backgroundImage})`};
	position: relative;
	background-position-y: ${({ position }) => `${position}px`};
	/* transition: ${({ scrollDirection }) =>
		scrollDirection === 'down'
			? 'background-position-y 0.2s ease-in-out'
			: 'background-position-y 0.5s ease-in-out'}; */

			transition:background-position-y 0.2s ease-in-out;
`;

const Wrapper = styled.div`
	position: absolute;
	top: 75%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-width: 114rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 1200px) {
		padding: 0 2rem;
	}
`;

const FlexItem = styled.div`
	flex-basis: calc((100%-6rem) / 2);

	&:not(:last-child) {
		margin-right: 6rem;
		max-width: 45rem;
		@media screen and (max-width: 900px) {
			margin-right: 0;
		}
	}

	&:last-child {
		text-align: -webkit-right;
		@media screen and (max-width: 900px) {
			display: none;
		}
	}

	@media screen and (max-width: 900px) {
		/* flex-grow: 1; */
		flex-basis: auto;
	}
`;

class Header extends React.Component {
	state = {
		position: 0,
		scrollDirection: ''
	};

	componentDidMount() {
		let initialPosition = 0;

		window.onscroll = () => {
			const position = window.scrollY;
			let scrollDirection;
			if (position > initialPosition) scrollDirection = 'down';
			else scrollDirection = 'up';

			initialPosition = position;

			this.setState({ position, scrollDirection });
		};
	}

	render() {
		const { props, state } = this;
		return (
			<StyledHeader {...props} {...state}>
				<Wrapper>
					<FlexItem>
						<Heading type="secondary" className="mb--3rem" as="h1">
							We will help increase your business's bottom-line growth at the
							hands of top tech mobile developers.
						</Heading>
						<Link href="/" primary>
							Apply now
						</Link>
					</FlexItem>
					<FlexItem>
						<Image src={require('../../Assets/images/mobail-slide.png')} />
					</FlexItem>
				</Wrapper>
			</StyledHeader>
		);
	}
}

Header.propTypes = {
	backgroundImage: PropTypes.string,
	gradient: PropTypes.string
};

export default Header;
