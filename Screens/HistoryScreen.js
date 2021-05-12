import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, TextInput, FlatList, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Log from '../Components/Log';

//import {addTimestamp} from '../store/actions/actionTypes';
import {useSelector, useDispatch} from 'react-redux';


const HistoryScreen = props => {

   // const dispatch = useDispatch();
   // const log = () => dispatch({ type: addTimestamp });
   // Calling in state from redux
   const records = useSelector(state => state.record);
   const units = useSelector(state => state.unit);

   return (
      // <KeyboardAvoidingView
      //    style={styles.safeAreaView}
      //    behavior="padding"
      // >
      //    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.safeAreaView}>

               <View style={{ marginBottom: 50 }}>
                  <Text>Timestamps</Text>
                  {/* <Button title="Refresh" onPress={ () => { log() }} /> */}
               </View>

               <View style={{ flex: 1 }}>
                  <Text>hi start of flatlist</Text>
                  {console.log(records)}
                  <LinearGradient
                     // Background Linear Gradient
                     colors={['rgba(0,0,0,0.8)', 'transparent']}
                     //style={styles.background}
                  />
                  <FlatList
                     //contentContainerStyle={{ flex: 1 }}
                     data={records.records}
                     renderItem={({ item }) =>
                        <View>

                           <View style={{ paddingTop: 10 }}>
                              <Log time={item.timeLog} intake={item.amount} unit={units.unit}/>
                           </View>

                           {/* <View
                              style={{ // Creates line between items
                                 borderBottomColor: 'black',
                                 borderBottomWidth: StyleSheet.hairlineWidth,
                                 alignSelf: 'center',
                                 width: '70%',
                                 marginBottom: 10
                              }}
                           /> */}

                        </View>
                     }
                     keyExtractor={(item, index) => index.toString()}
                  />
               </View>

            </SafeAreaView>
      //    </TouchableWithoutFeedback>
      // </KeyboardAvoidingView>

   );

};

const styles = StyleSheet.create({
   safeAreaView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },


});

export default HistoryScreen;