import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarItem from '../NavbarItem';

const StyledNavbar = styled.nav`
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
	transition: all 0.2s;
	padding: 0 5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 900px) {
		padding: 0 2rem;

		transform: ${({ showNavbar }) => (showNavbar ? '' : 'translateY(-100%)')};
		background-color: ${({ changeNav }) => (changeNav ? '#fff' : '')};
		position: ${({ changeNav }) => (changeNav ? 'fixed' : 'absolute')};
		box-shadow: ${({ changeNav }) =>
			changeNav ? '0 5px 10px -10px rgba(0,0,0,.6)' : ''};
	}
`;

const CollapseBtn = styled.button`
	display: none;
	position: absolute;
	top: 3rem;
	right: 2rem;

	background-color: transparent;
	border: ${({ changeNav }) =>
		changeNav ? '1px solid #ddd' : '1px solid #fff'};
	width: 4rem;
	height: 3rem;
	color: ${({ changeNav }) => (changeNav ? '#000' : '#fff')};
	font-size: 1.6rem;
	cursor: pointer;
	justify-content: center;
	transition: background-color 0.3s;
	&:focus {
		outline: none;
		background-color: #aaa;
	}
	&:hover {
		background-color: #ddd;
	}
	@media screen and (max-width: 900px) {
		display: flex;
	}
`;

const NavbarBrand = styled.img`
	margin-top: 1rem;
	width: 10rem;
	height: 5rem;

	@media screen and (max-width: 900px) {
		margin: 2rem 0;
	}
`;
const NavbarNav = styled.ul`
	display: flex;

	@media screen and (max-width: 900px) {
		flex-direction: column;
		position: absolute;
		top: 100%;
		left: 0;
		border-top: 1px solid #fff;
		width: 100%;
		padding: 0;
		background-color: rgba(23, 23, 23, 0.95);

		transition: all 0.3s;
		opacity: ${({ showNavbarNav }) => (showNavbarNav ? 1 : 0)};
		visibility: ${({ showNavbarNav }) =>
			showNavbarNav ? 'visible' : 'hidden'};

		&:not(:last-child) {
			border-bottom: 1px solid rgba(255, 255, 255, 0.06);
		}
	}
`;

class Navbar extends Component {
	state = {
		showNavbarNav: false,
		showNavbar: true,
		changeNav: false
	};

	componentDidMount() {
		let prevPosition = 0;
		window.addEventListener('scroll', () => {
			const YPosition = window.scrollY;

			if (YPosition > prevPosition) {
				// Down Scrolling
				if (this.state.showNavbar) {
					this.setState({ showNavbar: false });
				}
				prevPosition = YPosition;
			} else {
				// Up Scrolling
				if (!YPosition) {
					if (!this.state.showNavbar || this.state.changeNav) {
						this.setState({ showNavbar: true, changeNav: false });
					}
				} else if (YPosition) {
					if (!this.state.showNavbar) {
						this.setState({ showNavbar: true, changeNav: true });
					}
				}
			}
		});
	}

	handleClick = () =>
		this.setState(state => ({ showNavbarNav: !state.showNavbarNav }));

	handleBlur = () => this.setState({ showNavbarNav: false });

	render() {
		let logo = require('../../Assets/images/Bitmap.svg');

		if (this.state.changeNav && window.outerWidth <= 900) {
			logo = require('../../Assets/images/logo-page.svg');
		}

		return (
			<StyledNavbar {...this.state}>
				<a href="/">
					<NavbarBrand src={logo} />
				</a>
				<CollapseBtn
					onClick={this.handleClick}
					onBlur={this.handleBlur}
					changeNav={this.state.changeNav}>
					<i className="fas fa-bars"></i>
				</CollapseBtn>
				<NavbarNav {...this.state}>
					<NavbarItem to="/">Home</NavbarItem>
					<NavbarItem to="/">About us</NavbarItem>
					<NavbarItem to="/">Services</NavbarItem>
					<NavbarItem to="/">Portfolio</NavbarItem>
					<NavbarItem to="/">Team</NavbarItem>
					<NavbarItem to="/">Blogs</NavbarItem>
					<NavbarItem to="/">Contact us</NavbarItem>
					<NavbarItem to="/">عربي</NavbarItem>
				</NavbarNav>
			</StyledNavbar>
		);
	}
}

export default Navbar;
