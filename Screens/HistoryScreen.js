import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, TextInput, FlatList, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import Log from '../Components/Log';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

//import {addTimestamp} from '../store/actions/actionTypes';
import {useSelector, useDispatch} from 'react-redux';


const HistoryScreen = props => {

   // const dispatch = useDispatch();
   // const log = () => dispatch({ type: addTimestamp });
   // Calling in state from redux
   const records = useSelector(state => state.record);
   const units = useSelector(state => state.unit);

   const [isShowing, setIsShowing] = useState(false);
   const [isExpanded, setIsExpanded] = useState(false);

   return (
      // <KeyboardAvoidingView
      //    style={styles.safeAreaView}
      //    behavior="padding"
      // >
      //    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.safeAreaView}>

               <View style={{ marginBottom: 50 }}>
                  <Text>Timestamps</Text>
                  {/* <Button title="Reveal" onPress={ () => { setIsShowing(!isShowing) }} /> */}
                  
                  <FontAwesomeIcon icon={faChevronDown} size={50} onPress={() => {
                     setIsShowing(!isShowing);
                     console.warn("Pressed");
                  }} />
               </View>

               <View style={{ flex: 1 }}>
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

                              {/* use ItemSeparatorComponent */}

                           </View>
                        }
                        keyExtractor={item => item.key.toString()}
                     />
                  ) : null }
                  
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