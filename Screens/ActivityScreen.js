import React, {} from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, } from 'react-native';

import { useSelector } from 'react-redux';

const ActivityScreen = props => {

    // Redux State
    const records = useSelector(state => state.record);
    const units = useSelector(state => state.unit);

    return (
        <SafeAreaView style={styles.safeAreaView}>

            <View>
                <Text style={styles.summaryText}>This week your water intake was {records.weekCount} {units.unit}, which was [stats here] than last week's average.</Text>
                <Text>daily count = {records.dayount} {units.unit}</Text>
                <Text>weekly = {records.weekCount} , month = {records.weekCount}</Text>
            </View>

            <View style={styles.summaryContainer}>
                <Text style={styles.headerText}>This Week</Text>
            </View>

            <View style={styles.summaryContainer}>
                <Text style={styles.headerText}>This Month</Text>
            </View>

        </SafeAreaView>

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