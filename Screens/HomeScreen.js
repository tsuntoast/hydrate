import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, Image, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import HamburgerIcon from '../Components/HamburgerIcon';

import {addCount} from '../store/actions/actionTypes';
import {useSelector, useDispatch} from 'react-redux';

const HomeScreen = props => {

    const dispatch = useDispatch();
    const add = (target) => dispatch({ type: addCount, value: Number(target) });
    // Calling in state from redux
    const counts = useSelector(state => state.count);
    const units = useSelector(state => state.unit);

    // FIXME: for timestamps
    const [loggedAmount, setLoggedAmount] = useState('');

    return (
        // <KeyboardAvoidingView
        //     //style={styles.safeAreaView}
        //     behavior="padding"
        // >
            <TouchableWithoutFeedback style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView
                //style={styles.safeAreaView}
                behavior="padding"
            >

        
                <SafeAreaView>
                    <HamburgerIcon onPress={() => { props.navigation.openDrawer() }} />

                    <View style={styles.imageContainer}>
                        <Image source={require('../assets/logo.png')}
                                style={{ width: 100, height: 100, resizeMode: 'contain' }} />
                    </View>

                    <View style={styles.dailySummaryContainer}>
                        <Text>You have drank</Text>
                        <Text style={{ fontSize: 60 }}>{counts.count}</Text>
                        <Text>{units.unit} of water today.</Text>

                    </View>

                    <View style={{ paddingVertical: 20 , alignItems: 'center'}}>
                        <TextInput style={styles.textInput} keyboardType='numeric' placeholder='Amount' value={loggedAmount} onChangeText={(text) => setLoggedAmount(text)} />

                        <Button title="Submit" onPress={() => {

                            if (!loggedAmount) { // If field is empty
                                alert("Empty field. Please try again.");
                            }
                            else {
                                // Redux
                                add(loggedAmount);

                                // Resets text input field
                                setLoggedAmount('');
                            }

                        }} />
                    </View>
                </SafeAreaView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        //</KeyboardAvoidingView>

    );

};

const styles = StyleSheet.create({
    safeAreaView: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        paddingBottom: 20
    },
    dailySummaryContainer: {
        justifyContent: 'center',
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