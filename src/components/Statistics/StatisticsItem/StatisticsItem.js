import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Column from '../../Column';

const Icon = styled.img`
	width: 6rem;
	height: 5rem;
	/* display: block; */
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
		color: '#00ca9d'
	},
	column: {
		textAlign: '-webkit-center'
	}
};

class StatisticsItem extends React.Component {
	state = {
		counter: 0
	};

	headingRef = React.createRef();

	componentDidMount() {
		const el = this.headingRef.current;
		const countTo = el.getAttribute('data-to');
		const countSpeed = el.getAttribute('data-speed');
		window.addEventListener('scroll', e => {
			const YPosition = el.getBoundingClientRect().y;

			if (YPosition >= -76.25 && YPosition <= 683.75) {
				if (this.state.counter === 0) {
					this.startCount(countTo, countSpeed);
				}
			}
		});
	}

	startCount = (countTo, countSpeed) => {
		this.setState(state => ({ counter: state.counter + 1 }));

		if (this.state.counter >= countTo) {
			return;
		}

		setTimeout(() => {
			this.startCount(countTo, countSpeed);
		}, 1 / parseFloat(countSpeed));
	};

	render() {
		const { icon, statisticsAbout, dataTo } = this.props;
		return (
			<Column
				className="one-quarter"
				style={styles.column}
				data-aos="fade-down">
				<Icon src={icon} />
				<Heading
					ref={this.headingRef}
					data-to={dataTo}
					data-speed="2000"
					style={styles.heading}>
					{this.state.counter}
				</Heading>
				<Span>{statisticsAbout}</Span>
			</Column>
		);
	}
}

StatisticsItem.propTypes = {
	icon: PropTypes.string.isRequired,
	statisticsAbout: PropTypes.string.isRequired,
	dataTo: PropTypes.number.isRequired
};

export default StatisticsItem;
