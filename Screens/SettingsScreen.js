import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import HamburgerIcon from '../Components/HamburgerIcon';

import { changeToML, changeToOz } from '../store/actions/actionTypes';
import { useSelector, useDispatch } from 'react-redux';

const SettingsScreen = props => {

    const dispatch = useDispatch();
    const changeUnitsToML = () => dispatch({ type: changeToML });
    const changeUnitsToOz = () => dispatch({ type: changeToOz });
    // Calling in state from redux
    const units = useSelector(state => state.unit);

    return (
        <KeyboardAvoidingView
            style={styles.safeAreaView}
            behavior="padding"
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <SafeAreaView>
                    <HamburgerIcon onPress={() => { props.navigation.openDrawer() }} />

                    <View styles={styles.contentContainer}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.header}>Settings</Text>
                        </View>

                        <View>
                            <Text style={styles.subHeader}>Volume Units</Text>

                            <TouchableOpacity onPress={() => { changeUnitsToOz() }} >
                                <Text style={units.unit === 'oz' ? styles.active : styles.inactive}>(Fluid) Ounces (oz)</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { changeUnitsToML() }} >
                                <Text style={units.unit === 'mL' ? styles.active : styles.inactive}>Milliliters (mL)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ paddingVertical: 20 }}>
                            <Text style={styles.subHeader}>Reminder Notifications</Text>
                            <Text>Push Notifications</Text>
                            <Text>Remind me every</Text>
                        </View>
                    </View>

                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    );

};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 75
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
    },
    active: {
        backgroundColor: 'lightgrey',
        padding: 2,
    },
    inactive: {

        padding: 2,
    },
});

export default SettingsScreen;