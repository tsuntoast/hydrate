import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, Image, TextInput, Keyboard, TouchableWithoutFeedback, FlatList } from 'react-native';

// Redux Imports
import { addLog, deleteLog } from '../store/actions/actionTypes';
import { useSelector, useDispatch } from 'react-redux';

// Components and Icons
import Log from '../Components/Log';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import AppleStyleSwipeableRow from '../Components/AppleStyleSwipeableRow';

const HomeScreen = props => {
    // Redux State
    const units = useSelector(state => state.unit);
    const records = useSelector(state => state.record);

    const dispatch = useDispatch();
    const record = (date) => dispatch({ type: addLog, payload: { key: records.logKey, timeLog: (date), amount: Number(loggedAmount), dateKey: date } });
    const remove = (keytoDelete) => dispatch({ type: deleteLog, key: keytoDelete });

    const [loggedAmount, setLoggedAmount] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const colors = ['#9E9E9E', '#D3D3D3'];

    return (
       
        <SafeAreaView style={styles.safeAreaView}>

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

                <View style={styles.upperContentContainer}>

                    <View style={styles.imageContainer}>
                        <Image source={require('../assets/logo.png')}
                            style={{ width: 100, height: 200, resizeMode: 'contain' }}
                        />
                    </View>

                    <View style={styles.dailySummaryContainer}>
                        <Text>You have drank</Text>
                        <Text style={{ fontSize: 60 }}>{records.dayCount}</Text>
                        <Text>{units.unit} of water today.</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput style={styles.textInput} keyboardType='numeric' placeholder='Amount' value={loggedAmount} onChangeText={(text) => setLoggedAmount(text)} />

                        <Button title="Submit"
                            onPress={() => {
                                if (!loggedAmount) { // If field is empty
                                    alert("Empty field. Please try again.");
                                }
                                else if (loggedAmount <= 0) {
                                    alert("Amount must be greater than 0. Please try again.");
                                }
                                else {
                                    record(new Date());     // Adds log and updates counts
                                    setLoggedAmount('');    // Resets text input field
                                }
                            }}
                        />
                    </View>

                </View>

            </TouchableWithoutFeedback>

            <View style={styles.logContainer}>

                <FontAwesomeIcon
                    style={styles.arrowIcon}
                    icon={faChevronDown} size={30}
                    onPress={() => {
                        Keyboard.dismiss();
                        setIsExpanded(!isExpanded);
                    }}
                    icon={isExpanded ? faChevronUp : faChevronDown}
                />

                {isExpanded ? (
                    <FlatList
                        data={records.logs}
                        renderItem={({ item }) =>
                        
                            <View style={styles.logItem}>
                                <AppleStyleSwipeableRow onPress={() => remove(item.key)}>
                                    <Log time={item.timeLog} intake={item.amount} unit={units.unit} 
                                        customStyle={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            paddingVertical: 5,
                                            paddingHorizontal: 10,
                                            width: 200,
                                            backgroundColor:  (item.key % 50 === 0) ? colors[1] : colors[0]
                                        }} 
                                    />
                                </AppleStyleSwipeableRow>
                                
                            </View>
                            
                            
                        }
                        keyExtractor={item => item.key.toString()}
                    />
                ) : null}
                
            </View>

        </SafeAreaView>

    );

};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    upperContentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    dailySummaryContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    inputContainer: {
        justifyContent: 'center',
        flex: 1,
        height: 200,
    },
    textInput: {
        borderBottomWidth: 1,
        borderColor: '#AA8A81',
        backgroundColor: 'lightgrey',
        padding: 4,
        width: 100,
    },
    arrowIcon: {
        alignSelf: 'center',
    },
    logContainer: {
        flex: 1,
    },
    logItem: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
    },

});

export default HomeScreen;