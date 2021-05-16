import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Log = props => {
	return (
		<View style={props.customStyle}>

			<Text style={styles.timeText}>{props.time}</Text>
			<Text style={styles.intakeText}>{props.intake} {props.unit}</Text>

		</View>
	);
};

Log.propTypes = { time: PropTypes.string.isRequired, intake: PropTypes.number.isRequired, unit: PropTypes.string.isRequired, customStyle: PropTypes.any, };

const styles = StyleSheet.create({
	// rootContainer: {
	// 	// flex: 1,
	// 	// flexDirection: 'row',
	// 	// justifyContent: 'space-between',
	// 	// paddingVertical: 5,
	// 	// paddingHorizontal: 10,
	// 	// width: 200,
	// 	//backgroundColor: 'lightgrey',
	// },
	timeText: {
		fontSize: 20,
		//fontWeight: 'bold',
	},
	intakeText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'royalblue'
	},
});

export default Log;