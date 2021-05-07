import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

import {useSelector} from 'react-redux';



const HomeScreen = props => {

    //Redux
    const counts = useSelector(state => state.count);
    const units = useSelector(state => state.units);

    return (
        <KeyboardAvoidingView
            style={styles.safeAreaView}
            behavior="padding"
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <SafeAreaView>

                    <View>
                        <Text>hi this is Activity</Text>
                        <Text>test {counts.count} test {units.units}</Text>
                        
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

export default HomeScreen;