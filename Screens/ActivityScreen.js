import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

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

                    <View>
                        <Text style={styles.summaryText}>This week your water intake was {counts.weekCount} {units.unit}, which was [stats here] than last week's average.</Text>
                        <Text>daily count = {counts.count} {units.unit}</Text>
                        <Text>weekly = {counts.weekCount} , month = {counts.monthCount}</Text>
                    </View>

                    <View style={styles.summaryContainer}>
                        <Text style={styles.headerText}>This Week</Text>
                    </View>

                    <View style={styles.summaryContainer}>
                        <Text style={styles.headerText}>This Month</Text>
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
    summaryContainer: {
        paddingTop: 20,
    },
    summaryText: {
        fontSize: 18,
    },
    headerText: {
        fontSize: 24,
    },

});

export default ActivityScreen;