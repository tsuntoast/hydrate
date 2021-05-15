import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';

import { changeToML, changeToOz, convertLogsToOz, convertLogsToML } from '../store/actions/actionTypes';
import { useSelector, useDispatch } from 'react-redux';

const SettingsScreen = props => {
    // Redux State
    const units = useSelector(state => state.unit);

    const dispatch = useDispatch();
    const changeUnitsToML = () => dispatch({ type: changeToML });
    const changeUnitsToOz = () => dispatch({ type: changeToOz });
    const convertToOz = () => dispatch({ type: convertLogsToOz });
    const convertToML = () => dispatch({ type: convertLogsToML });

    // For the Switch
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = (value) => {
        setIsEnabled(value);
    }

    // For the RNPickerSelect
    const [interval, setInterval] = useState('');

    // For DateTimePicker
    const [date, setDate] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    const onChange2 = (event, selectedDate) => {
        const currentDate2 = selectedDate || date2;
        setShow(Platform.OS === 'ios');
        setDate2(currentDate2);
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>

            <View styles={styles.contentContainer}>

                <View>
                    <Text style={styles.header}>Volume Units</Text>

                    <TouchableOpacity disabled={(units.unit === 'oz')} onPress={() => {
                        // Disabling button prevents accidental multiple conversions
                        convertToOz();
                        changeUnitsToOz();
                    }} >
                        <Text style={units.unit === 'oz' ? styles.active : styles.inactive}>(Fluid) Ounces (oz)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={(units.unit === 'mL')} onPress={() => {
                        convertToML();
                        changeUnitsToML();
                    }} >
                        <Text style={units.unit === 'mL' ? styles.active : styles.inactive}>Milliliters (mL)</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ paddingVertical: 20 }}>
                    <Text style={styles.header}>Reminder Notifications</Text>
                    <View style={styles.toggleContainer}>
                        <Text style={styles.text}>Push Notifications</Text>
                        <Switch
                            trackColor={{ false: "#7fff00", true: "#dc143c" }}
                            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                    <View style={isEnabled ? null : { opacity: 0.5 }} pointerEvents={isEnabled ? null : 'none'}>
                        <View style={styles.reminderContainer}>
                            <Text style={styles.subText}>Remind me every</Text>
                            <RNPickerSelect
                                onValueChange={(value) => setInterval(value)}
                                items={[
                                    { label: '30 minutes', value: 30 },
                                    { label: '1 hour', value: 60 },
                                    { label: '2 hours', value: 120 },
                                    { label: '3 hours', value: 180 },
                                ]}
                            />
                        </View>

                        <View style={styles.timeContainer}>
                            <Text style={styles.subText}>From</Text>
                            <DateTimePicker
                                style={{ width: '50%' }}
                                value={date}
                                mode={'time'}
                                is24Hour={true}
                                display="inline"
                                minuteInterval={5}
                                onChange={onChange}
                            />
                        </View>

                        <View style={styles.timeContainer}>
                            <Text style={styles.subText}>To</Text>
                            <DateTimePicker
                                style={{ width: '50%', paddingRight: 80 }}
                                value={date2}
                                mode={'time'}
                                is24Hour={true}
                                display="inline"
                                minuteInterval={5}
                                onChange={onChange2}
                            />
                        </View>

                    </View>

                </View>

            </View>

        </SafeAreaView>

    );

};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        margin: 20,
    },
    contentContainer: {
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
    },
    active: {
        backgroundColor: 'lightgrey',
        padding: 3,
        fontSize: 16,
    },
    inactive: {
        padding: 3,
        fontSize: 16,
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5
    },
    reminderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        marginRight: 20
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
    },
    subText: {
        fontSize: 14,
        marginLeft: 20,
    },
});

export default SettingsScreen;