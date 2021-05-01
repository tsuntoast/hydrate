import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

const HomeScreen = props => {

    const [amount, setAmount] = useState(0);
    const [loggedAmount, setLoggedAmount] = useState(0);
    const [units, setUnits] = useState('oz');

    return (
        <KeyboardAvoidingView
            style={styles.safeAreaView}
            behavior="padding"
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <SafeAreaView>

                    <View style={styles.dailySummaryContainer}>
                        <Text>You have drank</Text>
                        <Text style={{ fontSize: 60 }}>{amount}</Text>
                        <Text>{units} of water today.</Text>
                    </View>

                    <View style={{ paddingVertical: 20 , alignItems: 'center'}}>
                        <TextInput style={styles.textInput} keyboardType='numeric' placeholder='Amount' value={loggedAmount} onChangeText={(text) => setLoggedAmount(text)} />

                        <Button title="Submit" onPress={() => {

                            if (!loggedAmount) { // If field is empty
                                alert("Empty field. Please try again.");
                            }
                            else {
                                setAmount(amount + Number(loggedAmount));

                                // Resets text input field
                                setLoggedAmount('');


                            }

                        }} />
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    );

};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dailySummaryContainer: {
        alignItems: 'center',
    },
    textInput: {
        borderBottomWidth: 1,
        borderColor: '#AA8A81',
        backgroundColor: 'lightgrey',
        padding: 4,
        width: 100
    },

});

export default HomeScreen;