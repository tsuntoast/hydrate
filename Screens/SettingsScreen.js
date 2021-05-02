import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

const HomeScreen = props => {

    const [units, setUnits] = useState('oz');

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
                        <TouchableOpacity activeOpacity='0.2' onPress={() => { setUnits('oz') }} ><Text style={{backgroundColor: 'pink', padding: 2, }}>touch me</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { setUnits('mL') }} ><Text>touch me mL</Text></TouchableOpacity>
                        {/* <Text>(Fluid) Ounces (oz)</Text>
                        <Text>Milliliters (mL)</Text> */}
                        <Text>units = {units}</Text>
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

export default HomeScreen;