import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Log = props => {
	return (
		<View style={styles.rootContainer}>

				<View style={styles.logContainer}>

					<View style={styles.timeContainer}>
						<Text style={styles.logText}>{props.time}</Text>
					</View>

					<View style={styles.intakeContainer}>
						<Text style={styles.logText}>
							{props.intake} {props.unit}
						</Text>
					</View>

				</View>

			</View>
	);
};

Log.propTypes = { time: PropTypes.string.isRequired, intake: PropTypes.number.isRequired, unit: PropTypes.string.isRequired };

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		backgroundColor: 'lightgrey',
		padding: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	logContainer: {
		flexDirection: 'row',
	},
	timeContainer: {
		marginRight: 20,
	},
	logText: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});

export default Log;