import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import {changeToML, changeToOz} from '../store/actions/actionTypes';
import {useSelector, useDispatch} from 'react-redux';

const SettingsScreen = props => {

    const dispatch = useDispatch();
    const changeUnitsToML = () => dispatch({ type: changeToML });
    const changeUnitsToOz = () => dispatch({ type: changeToOz });
    // Calling in state from redux
    const units = useSelector(state => state.unit);

    //const [units, setUnits] = useState('oz');

    return (
        <KeyboardAvoidingView
            style={styles.safeAreaView}
            behavior="padding"
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <SafeAreaView>

                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Settings</Text>
                    </View>

                    <View>
                        <Text style={styles.subHeader}>Volume Units</Text>
                        <TouchableOpacity onPress={() => { changeUnitsToOz() }} >
                            <Text style={{ backgroundColor: 'pink', padding: 2, }}>(Fluid) Ounces (oz)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { changeUnitsToML() }} >
                            <Text>Milliliters (mL)</Text>
                        </TouchableOpacity>
                        <Text>units = {units.unit}</Text>
                    </View>

                    <View>
                        <Text style={styles.subHeader}>Reminder Notifications</Text>
                        <Text>Push Notifications</Text>
                        <Text>Remind me every</Text>
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
    headerContainer: {
        alignItems: 'center',
        paddingBottom: 20,      //attempt to pin to top
    },
    header: {
        fontSize: 36,
    },
    subHeader: {
        fontSize: 24,
    }
});

export default SettingsScreen;