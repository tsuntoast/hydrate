import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import HamburgerIcon from '../Components/HamburgerIcon';

import {useSelector} from 'react-redux';



const ActivityScreen = props => {

    //Redux
    const counts = useSelector(state => state.count);
    const units = useSelector(state => state.unit);

    return (
        <KeyboardAvoidingView
            style={styles.safeAreaView}
            behavior="padding"
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <SafeAreaView>

                    <HamburgerIcon onPress={() => { props.navigation.openDrawer() }} />

                    <View>
                        <Text>hi this is Activity</Text>
                        <Text>test {counts.count} test {units.units}</Text>
                        <Text>weekly = {counts.weekCount} , month = {counts.monthCount}</Text>
                        
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

});

export default ActivityScreen;