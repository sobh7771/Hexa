import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
	color: #fff;
	background: #878787;
	height: 3rem;
	width: 3rem;
	position: fixed;
	display: ${({ showButton }) => (showButton ? 'flex' : 'none')};
	opacity: ${({ showButton }) => (showButton ? 1 : 0)};
	transition: opacity 0.3s;
	align-items: center;
	justify-content: center;
	right: 4.5rem;
	top: 91%;
	z-index: 1000;
	border-radius: 100%;

	&:hover {
		background: rgba(0, 0, 0, 0.8);
	}

	@media screen and (max-width: 900px) {
		display: none;
	}
`;

class ScrollToTopBtn extends React.Component {
	state = {
		showButton: false
	};
	componentDidMount() {
		window.addEventListener('scroll', () => {
			if (window.scrollY >= 140 && window.outerWidth > 900) {
				if (!this.state.showButton) {
					this.setState({ showButton: true });
				}
			} else {
				this.setState({ showButton: false });
			}
		});
	}

	render() {
		return (
			<Button {...this.state} href="#">
				<i className="fas fa-arrow-up"></i>
			</Button>
		);
	}
}

export default ScrollToTopBtn;
