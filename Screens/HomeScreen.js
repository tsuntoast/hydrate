import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, Image, TextInput, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, FlatList } from 'react-native';

import { addCount, addRecord } from '../store/actions/actionTypes';
import { useSelector, useDispatch } from 'react-redux';

import Log from '../Components/Log';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const HomeScreen = props => {
    // Calling in state from redux
    const counts = useSelector(state => state.count);
    const units = useSelector(state => state.unit);
    const records = useSelector(state => state.record);

    const dispatch = useDispatch();
    const add = (target) => dispatch({ type: addCount, value: Number(target) });
    //const log = () => dispatch({ type: addTimestamp });
    const record = (date) => dispatch({ type: addRecord, payload: { key: records.recordsKey, timeLog: (date), amount: Number(loggedAmount) } });



    // FIXME: for timestamps
    const [loggedAmount, setLoggedAmount] = useState('');
    const [isShowing, setIsShowing] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        // <KeyboardAvoidingView
        //     //style={styles.safeAreaView}
        //     behavior="padding"
        // >
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
            {/* <KeyboardAvoidingView
                //style={styles.safeAreaView}
                behavior="padding"
            > */}

            <SafeAreaView>

                <View style={styles.imageContainer}>
                    <Image source={require('../assets/logo.png')}
                        style={{ width: 100, height: 100, resizeMode: 'contain' }} />
                </View>

                <View style={styles.dailySummaryContainer}>
                    <Text>You have drank</Text>
                    <Text style={{ fontSize: 60 }}>{counts.count}</Text>
                    <Text>{units.unit} of water today.</Text>
                </View>

                <View style={{ paddingVertical: 20, alignItems: 'center' }}>
                    <TextInput style={styles.textInput} keyboardType='numeric' placeholder='Amount' value={loggedAmount} onChangeText={(text) => setLoggedAmount(text)} />

                    <Button title="Submit" onPress={() => {

                        if (!loggedAmount) { // If field is empty
                            alert("Empty field. Please try again.");
                        }
                        else {
                            add(loggedAmount);      // Adds to total count
                            record(new Date());     // Adds record

                            setLoggedAmount('');    // Resets text input field
                        }
                    }} />
                </View>

                <View style={{ alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faChevronDown} size={50} onPress={() => {
                        setIsShowing(!isShowing);
                        console.warn("Pressed");
                        setIsExpanded(!isExpanded);
                    }} icon={ isExpanded === true ? faChevronUp : faChevronDown}
/>
                    <Text>hi start of flatlist</Text>
                    {console.log(records)}
                    {isShowing ? (
                        <FlatList
                            //contentContainerStyle={{ flex: 1 }}
                            data={records.records}
                            renderItem={({ item }) =>
                                <View>

                                    <View style={{ paddingTop: 10 }}>
                                        <Log time={item.timeLog} intake={item.amount} unit={units.unit} />
                                    </View>

                                </View>
                            }
                            keyExtractor={item => item.key.toString()}
                        />
                    ) : null}

                </View>
            </SafeAreaView>
            {/* </KeyboardAvoidingView> */}
        </TouchableWithoutFeedback>
        //</KeyboardAvoidingView>

    );

};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        paddingBottom: 20,
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