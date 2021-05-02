import React from 'react';
import {} from 'react-native';

const Log = props => {
	return (
		<TextInput style={styles.textInput} value={props.value} onChangeText={(text) => props.onChangeText(text)}/>
	);
};

const styles = Stylesheet.create({
	textInput: {
		backgroundColor: 'green',
		width: '50%',
		padding: 20
	}
});

export default Log;