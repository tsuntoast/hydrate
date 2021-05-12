import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, Switch } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';

import { changeToML, changeToOz } from '../store/actions/actionTypes';
import { useSelector, useDispatch } from 'react-redux';

const SettingsScreen = props => {

    const dispatch = useDispatch();
    const changeUnitsToML = () => dispatch({ type: changeToML });
    const changeUnitsToOz = () => dispatch({ type: changeToOz });
    // Calling in state from redux
    const units = useSelector(state => state.unit);
    const counts = useSelector(state => state.count);
    const records = useSelector(state => state.record);

    // For the Switch
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = (value) => {
        setIsEnabled(value);
    }

    // For DateTimePicker
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        //setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    return (
        <KeyboardAvoidingView
            style={styles.safeAreaView}
            behavior="padding"
        >
            {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> */}
                <SafeAreaView>

                    <View styles={styles.contentContainer}>
                        {/* <View style={styles.headerContainer}>
                            <Text style={styles.header}>Settings</Text>
                        </View> */}

                        <View>
                            <Text style={styles.header}>Volume Units</Text>

                            <TouchableOpacity disabled={(units.unit === 'oz')} onPress={() => { 
                                // Disabling button prevents accidental multiple conversions

                                // Converts total count
                                if (counts.count != 0) {
                                    counts.count = (counts.count * 0.0338).toFixed(1);
                                }

                                // Convert count of records, parse through records.records.amount
                                //use map() to mutate records.records.amount
                                //records.records.map(item.amount => {item.amount * 0.0338});
                                
                                changeUnitsToOz();
                                
                            }} >
                                <Text style={units.unit === 'oz' ? styles.active : styles.inactive}>(Fluid) Ounces (oz)</Text>
                            </TouchableOpacity>
                            <TouchableOpacity disabled={(units.unit === 'mL')} onPress={() => { 
                                if (counts.count != 0) {
                                    counts.count = (counts.count * 29.573).toFixed(1);
                                }
                                
                                changeUnitsToML()
                            }} >
                                <Text style={units.unit === 'mL' ? styles.active : styles.inactive}>Milliliters (mL)</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ paddingVertical: 20 }}>
                            <Text style={styles.header}>Reminder Notifications</Text>
                            <View style={styles.pushContainer}>
                                <Text>Push Notifications</Text>
                                <Switch
                                    trackColor={{ false: "#7fff00", true: "#dc143c" }}
                                    thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                            
                            <Text>Notifications is {isEnabled ? 'enabled' : 'disabled'}</Text>
                            
                            <View style={ isEnabled ? null : {opacity: 0.5}}>
                                <View style={styles.pushContainer}>
                                    <Text>Remind me every</Text>
                                    <RNPickerSelect
                                        disabled={!isEnabled}
                                        onValueChange={(value) => console.log(value)}
                                        items={[
                                            { label: '30 minutes', value: '30' },
                                            { label: '1 hour', value: '60' },
                                            { label: '2 hours', value: '120' },
                                            { label: '3 hours', value: '180' },
                                        ]}
                                    />
                                </View>

                                <View >
                                    <Text>From</Text>
                                    <DateTimePicker
                                        value={new Date()}
                                        mode={'time'}
                                        is24Hour={true}
                                        display="compact"
                                        //disabled={!isEnabled}
                                        minuteInterval={5}
                                        onChange={onChange}
                                    />
                                </View>
                                
                                <View>
                                    <Text>To</Text>
                                    <DateTimePicker
                                        value={new Date()}
                                        mode={'time'}
                                        is24Hour={true}
                                        display="compact"
                                        //disabled={!isEnabled}
                                        minuteInterval={5}
                                        onChange={onChange}
                                    />
                                </View>

                                
                                
                            </View>
                            
                            
                            
                        </View>
                    </View>

                </SafeAreaView>
            {/* </TouchableWithoutFeedback> */}
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
        fontSize: 24,
    },
    active: {
        backgroundColor: 'lightgrey',
        padding: 2,
    },
    inactive: {
        padding: 2,
    },
    pushContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});

export default SettingsScreen;