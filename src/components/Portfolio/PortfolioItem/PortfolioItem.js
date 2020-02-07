import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Div } from '../../Column/Column';
import Link from '../../Link';

const Column = styled(Div)`
	@media screen and (max-width: 1200px) {
		margin-right: 0 !important;
	}
`;

const Figure = styled.figure`
	width: max-content;
	position: relative;
	overflow: hidden;
`;

const Img = styled.img`
	display: block;
	transition: all 0.3s;
	${Figure}:hover & {
		transform: scale(1.2);
	}
`;
const Figcaption = styled.figcaption`
	/* display: none; */
	opacity: 0;
	visibility: hidden;
	transition: all 0.3s;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);

	${Figure}:hover & {
		/* display: flex; */
		opacity: 1;
		visibility: visible;
	}
`;
const Title = styled.h6`
	color: #fff;
	font-family: 'Montserrat', sans-serif;
	text-transform: uppercase;
	font-size: 1.4rem;
	margin-bottom: 1rem;
	&::before {
		content: '';
		display: block;
		margin: 0 auto 1rem;
		width: 5rem;
		height: 1px;
		background-color: #00ca9d;
	}
`;
const Body = styled.p`
	font-size: 1.1rem;
	text-transform: uppercase;
	color: #939393;
	line-height: 14px;
	width: 95%;
`;

const PortfolioItem = ({ imgSrc, title, body, to }) => {
	return (
		<Column>
			<Link basic href={to}>
				<Figure>
					<Img src={imgSrc} />
					<Figcaption>
						<Title>{title}</Title>
						<Body>{body}</Body>
					</Figcaption>
				</Figure>
			</Link>
		</Column>
	);
};

PortfolioItem.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired
};

export default PortfolioItem;
