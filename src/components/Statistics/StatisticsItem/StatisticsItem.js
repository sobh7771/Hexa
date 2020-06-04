import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Column from '../../Column';

const Icon = styled.img`
	width: 6rem;
	height: 5rem;
`;

const Heading = styled.h4`
	margin: 1.5rem 0;
	font-size: 2.5rem;
`;

const Span = styled.span`
	display: block;
`;

const styles = {
	heading: {
		color: '#00ca9d',
	},
	column: {
		textAlign: '-webkit-center',
	},
};

class StatisticsItem extends React.Component {
	state = {
		count: 0,
	};

	ref = React.createRef();

	componentDidMount() {
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(({ isIntersecting, target }) => {
				if (isIntersecting) {
					const id = setInterval(() => {
						this.setState((s) => ({ count: s.count + 1 }));

						if (this.state.count >= this.props.dataTo) {
							window.clearInterval(id);
						}
					}, 10);
					observer.unobserve(target);
				}
			});
		});

		observer.observe(this.ref.current);
	}

	render() {
		const { icon, statisticsAbout } = this.props;
		return (
			<Column className="one-quarter" style={styles.column} {...this.props}>
				<div ref={this.ref}>
					<Icon src={icon} />
					<Heading style={styles.heading}>{this.state.count}</Heading>
					<Span>{statisticsAbout}</Span>
				</div>
			</Column>
		);
	}
}

StatisticsItem.propTypes = {
	icon: PropTypes.string.isRequired,
	statisticsAbout: PropTypes.string.isRequired,
	dataTo: PropTypes.number.isRequired,
};

export default StatisticsItem;
